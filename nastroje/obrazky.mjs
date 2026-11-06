// Kontrola a náhled obrázků ve složce diagramy/.
//   node nastroje/obrazky.mjs kontrola [jméno …]   strukturu, barvy a přetékání textu (bez jmen: všechny)
//   node nastroje/obrazky.mjs nahled <jméno> …     uloží PNG do %TEMP%\vyklady-nahled\ a vypíše cestu
//   node nastroje/obrazky.mjs chybi                vypíše obrázky, které v textech chybí
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { zkontrolujObrazek } from './obrazky-kontrola.mjs';

const KOREN = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIAGRAMY = path.join(KOREN, 'diagramy');
const VYSTUP = path.join(os.tmpdir(), 'vyklady-nahled');
const PROHLIZECE = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Google/Chrome/Application/chrome.exe'];

const jmena = arg => arg.length ? arg.map(a => a.replace(/\.html$/, '')) : fs.readdirSync(DIAGRAMY).map(f => f.replace(/\.html$/, ''));

function kontrola(arg) {
  let chyb = 0;
  for (const j of jmena(arg)) {
    const p = path.join(DIAGRAMY, j + '.html');
    if (!fs.existsSync(p)) { console.log(`✗ ${j}: soubor neexistuje`); chyb++; continue; }
    const nalezy = zkontrolujObrazek(fs.readFileSync(p, 'utf8'));
    if (nalezy.length) { chyb++; console.log(`✗ ${j}\n  - ${nalezy.join('\n  - ')}`); } else console.log(`✓ ${j}`);
  }
  if (chyb) process.exitCode = 1;
}

function nahled(arg) {
  const styl = (fs.readFileSync(path.join(KOREN, 'index.html'), 'utf8').match(/<style>[\s\S]*?<\/style>/) || [''])[0];
  const prohlizec = PROHLIZECE.find(p => fs.existsSync(p));
  if (!prohlizec) throw new Error('Nenašel jsem Edge ani Chrome pro náhled.');
  fs.mkdirSync(VYSTUP, { recursive: true });
  for (const j of jmena(arg)) {
    const html = path.join(VYSTUP, j + '.html');
    const png = path.join(VYSTUP, j + '.png');
    fs.writeFileSync(html, `<!doctype html><html lang="cs" data-theme="light"><meta charset="utf-8">${styl}<body style="margin:0;padding:16px;width:808px">${fs.readFileSync(path.join(DIAGRAMY, j + '.html'), 'utf8')}</body></html>`);
    const vyska = 140 + Number(((fs.readFileSync(path.join(DIAGRAMY, j + '.html'), 'utf8').match(/viewBox="0 0 (\d+(?:\.\d+)?) (\d+(?:\.\d+)?)"/) || [, 760, 500]).slice(1).reduce((w, h) => 776 * h / w)));
    try { fs.rmSync(png, { force: true }); } catch { /* nic */ }
    execFileSync(prohlizec, ['--headless=new', '--disable-gpu', `--user-data-dir=${path.join(VYSTUP, 'profil')}`, '--hide-scrollbars', `--window-size=840,${Math.ceil(vyska)}`, `--screenshot=${png}`, 'file:///' + html.replace(/\\/g, '/')], { stdio: 'ignore', timeout: 60000 });
    // Prohlížeč může skončit dřív, než soubor dopíše: počkáme až 20 s.
    for (let i = 0; i < 40 && !fs.existsSync(png); i++) Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500);
    console.log(fs.existsSync(png) ? png : `✗ ${j}: náhled se nevytvořil`);
  }
}

function chybi() {
  const hotove = new Set(fs.readdirSync(DIAGRAMY).map(f => f.replace(/\.html$/, '')));
  const podleHry = {};
  for (const f of fs.readdirSync(path.join(KOREN, 'vyklady'))) {
    for (const m of fs.readFileSync(path.join(KOREN, 'vyklady', f), 'utf8').matchAll(/^\[\[obrázek ([a-z0-9-]+): (.*?)\]\]$/gm)) {
      if (!hotove.has(m[1])) (podleHry[f.replace(/\.md$/, '')] ||= []).push(`${m[1]}: ${m[2]}`);
    }
  }
  const hry = Object.keys(podleHry);
  for (const h of hry) console.log(`${h}\n  ${podleHry[h].join('\n  ')}`);
  console.log(`Chybí ${hry.reduce((s, h) => s + podleHry[h].length, 0)} obrázků u ${hry.length} her.`);
}

const [prikaz, ...arg] = process.argv.slice(2);
const akce = { kontrola: () => kontrola(arg), nahled: () => nahled(arg), chybi };
if (!akce[prikaz]) { console.log('Příkazy: kontrola, nahled, chybi'); process.exit(1); }
akce[prikaz]();
