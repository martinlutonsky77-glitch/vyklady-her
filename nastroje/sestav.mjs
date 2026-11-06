// Sestaví data webu (data/) z knihovna.md a textů ve vyklady/. Postup popisuje ../CLAUDE.md.
//   node nastroje/sestav.mjs                 zkušební běh: vypíše, co se změní, nic nezapíše
//   node nastroje/sestav.mjs --zapsat "popis" zapíše data/ a přidá vydání do novinek
//   node nastroje/sestav.mjs nahled          spustí web na http://localhost:8123/
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';
import { rozeberKnihovnu, sestavHru, porovnej, proTisk } from './prevod.mjs';

const KOREN = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DATA = path.join(KOREN, 'data');
const cti = (f, nahrada) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { if (nahrada !== undefined) return nahrada; throw e; } };
const dnes = () => { const d = new Date(); return `${d.getDate()}. ${d.getMonth() + 1}. ${d.getFullYear()}`; };

function nactiHry() {
  const radky = rozeberKnihovnu(fs.readFileSync(path.join(KOREN, 'knihovna.md'), 'utf8'));
  const obrazky = {};
  for (const f of fs.readdirSync(path.join(KOREN, 'diagramy'))) obrazky[f.replace(/\.html$/, '')] = fs.readFileSync(path.join(KOREN, 'diagramy', f), 'utf8');
  const videne = new Set();
  const hry = radky.map(r => {
    if (videne.has(r.slug)) throw new Error(`Soubor ${r.slug}.md je v knihovně dvakrát.`);
    videne.add(r.slug);
    const soubor = path.join(KOREN, 'vyklady', r.slug + '.md');
    if (!fs.existsSync(soubor)) throw new Error(`${r.hra}: chybí soubor vyklady/${r.slug}.md`);
    return sestavHru(r, fs.readFileSync(soubor, 'utf8'), obrazky);
  });
  const navic = fs.readdirSync(path.join(KOREN, 'vyklady')).map(f => f.replace(/\.md$/, '')).filter(s => !videne.has(s));
  if (navic.length) console.log(`Pozor, soubory bez řádku v knihovně (na web nejdou): ${navic.join(', ')}`);
  return hry;
}

function sestav(zapsat, popis) {
  const hry = nactiHry();
  const staryKatalog = cti(path.join(DATA, 'katalog.json'), []);
  const stareObsahy = Object.fromEntries(staryKatalog.map(s => [s.slug, cti(path.join(DATA, 'hry', s.slug + '.json'), null)]).filter(([, o]) => o));
  const { pridano, upraveno, odebrano } = porovnej(hry, stareObsahy, staryKatalog);
  const udaje = hry.filter(g => { const s = staryKatalog.find(x => x.slug === g.slug); return s && (s.hra !== g.hra || s.vydani !== g.vydani || s.styl !== g.styl || s.datum !== g.datum); });

  console.log(`Her: ${hry.length}, z toho s celým výkladem ${hry.filter(g => g.plny).length}`);
  console.log(`Přibude ${pridano.length}: ${pridano.map(g => g.hra).join(', ') || '–'}`);
  console.log(`Změní se obsah ${upraveno.length}: ${upraveno.map(({ g, co }) => `${g.hra} [${co.join(', ')}]`).join('; ') || '–'}`);
  console.log(`Změní se jen údaje v seznamu ${udaje.length}: ${udaje.map(g => g.hra).join(', ') || '–'}`);
  console.log(`Odebere se ${odebrano.length}: ${odebrano.join(', ') || '–'}`);
  const zmena = pridano.length || upraveno.length || odebrano.length;
  if (!zapsat) return console.log('Zkušební běh, nic nezapsáno. Zápis: --zapsat "popis vydání"');
  if (!zmena && !udaje.length) return console.log('Není co zapsat.');

  const novinky = cti(path.join(DATA, 'novinky.json'), []);
  const verze = (novinky[0] ? novinky[0].verze : 0) + (zmena ? 1 : 0);
  const zmenene = new Set([...pridano, ...upraveno.map(u => u.g)].map(g => g.slug));
  if (zmena) novinky.unshift({ verze, datum: dnes(), popis: popis || '',
    pridano: pridano.map(g => ({ slug: g.slug, hra: g.hra })),
    upraveno: upraveno.map(({ g, co }) => ({ slug: g.slug, hra: g.hra, co })), odebrano });

  fs.rmSync(path.join(DATA, 'hry'), { recursive: true, force: true });
  fs.mkdirSync(path.join(DATA, 'hry'), { recursive: true });
  for (const g of hry) fs.writeFileSync(path.join(DATA, 'hry', g.slug + '.json'), JSON.stringify({ zalozky: g.zalozky, jenKarta: !g.plny }));
  fs.writeFileSync(path.join(DATA, 'katalog.json'), JSON.stringify(hry.map(g => {
    const hlavni = g.zalozky.find(z => z.nazev === 'Pro hráče') || g.zalozky[0];
    const stara = staryKatalog.find(s => s.slug === g.slug);
    return { slug: g.slug, hra: g.hra, vydani: g.vydani, styl: g.styl, datum: g.datum, plny: g.plny,
      zalozky: g.zalozky.map(z => z.nazev), verze: zmenene.has(g.slug) ? verze : stara && stara.verze, text: proTisk(hlavni.html).slice(0, 3000) };
  })));
  fs.writeFileSync(path.join(DATA, 'novinky.json'), JSON.stringify(novinky));
  console.log(zmena ? `Zapsáno jako vydání č. ${verze}.` : 'Zapsány jen změněné údaje v seznamu, bez nového vydání.');
}

function nahled(port = 8123) {
  const typy = { '.html': 'text/html; charset=utf-8', '.json': 'application/json; charset=utf-8' };
  http.createServer((q, s) => {
    const cesta = decodeURIComponent(q.url.split('?')[0]);
    const f = path.join(KOREN, cesta === '/' ? 'index.html' : cesta);
    if (!f.startsWith(KOREN) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { s.writeHead(404); return s.end(); }
    s.writeHead(200, { 'content-type': typy[path.extname(f)] || 'text/plain; charset=utf-8' });
    s.end(fs.readFileSync(f));
  }).listen(port, () => console.log(`Náhled: http://localhost:${port}/`));
}

const arg = process.argv.slice(2);
if (arg[0] === 'nahled') nahled(arg[1]);
else sestav(arg.includes('--zapsat'), arg.filter(a => a !== '--zapsat')[0]);
