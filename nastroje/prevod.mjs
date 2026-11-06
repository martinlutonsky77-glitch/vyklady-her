// Čisté funkce převodu textů výkladů na data webu. Bez práce se soubory, aby šly rychle testovat.
import { marked } from 'marked';

export const PORADI_ZALOZEK = ['Pro hráče', 'Výklad', 'Učíme se hrát', 'Příprava', 'Pomocná karta'];

export const slug = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

const entity = s => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
  .replace(/&apos;|&#39;/g, "'").replace(/&#91;/g, '[').replace(/&#93;/g, ']').replace(/&amp;/g, '&');
export const proTisk = html => entity(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Tabulka v knihovna.md → řádky {hra, vydani, styl, slug, datum}.
export function rozeberKnihovnu(md) {
  const bunky = l => l.trim().slice(1, -1).split(/(?<!\\) \| /).map(s => s.trim().replace(/\\\|/g, '|'));
  return md.split('\n')
    .filter(l => l.startsWith('| ') && !l.startsWith('| Hra |') && !l.startsWith('| ---'))
    .map(l => {
      const [hra, vydani, styl, odkaz, datum] = bunky(l);
      const s = (odkaz.match(/\(vyklady\/([a-z0-9-]+)\.md\)/) || [])[1];
      if (!s) throw new Error(`Řádek „${hra}“ nemá odkaz na soubor ve vyklady/.`);
      return { hra, vydani, styl, slug: s, datum };
    });
}

// Text výkladu → záložky [{nazev, md}] v pořadí webu.
export function rozdelNaZalozky(md) {
  const casti = md.replace(/<!--.*?-->/gs, '').split(/^# Záložka: (.+)$/m);
  const zalozky = [];
  for (let i = 1; i < casti.length; i += 2) {
    const nazev = casti[i].trim();
    // Pod nadpisem záložky bývá stejný nadpis ještě jednou; na webu je to záložka sama.
    const telo = casti[i + 1].replace(/^\s*(---\s*)?/, '').replace(new RegExp(`^# ${nazev.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*$`, 'm'), '').trim();
    zalozky.push({ nazev, md: telo.replace(/\n---\s*$/, '').trim() });
  }
  const pozice = n => { const i = PORADI_ZALOZEK.indexOf(n); return i < 0 ? 99 : i; };
  return zalozky.sort((a, b) => pozice(a.nazev) - pozice(b.nazev));
}

// Markdown záložky → HTML pro web. obrazky: jméno → hotové HTML obrázku (figure), pokud ho máme.
export function naHtml(md, obrazky = {}) {
  const sObrazky = md.replace(/^\[\[obrázek ([a-z0-9-]+): (.*?)\]\]$/gm, (_, jmeno, popis) =>
    obrazky[jmeno] ? `\n${obrazky[jmeno].trim()}\n` : `\n<p class="note">Obrázek „${esc(popis)}“ zatím chybí.</p>\n`);
  return marked.parse(sObrazky, { gfm: true })
    .replace(/<(script|iframe|object|embed)\b.*?(<\/\1>|\/>)/gis, '')
    .replace(/\son[a-z]+="[^"]*"/gi, '')
    .replace(/href="([a-z0-9-]+)\.md"/g, 'href="#$1"')
    .replace(/<table>/g, '<div class="tbl"><table>').replace(/<\/table>/g, '</table></div>');
}

// Řádek knihovny + text → hra pro web.
export function sestavHru(radek, md, obrazky) {
  const zalozky = rozdelNaZalozky(md).map(z => ({ nazev: z.nazev, html: naHtml(z.md, obrazky) }));
  if (!zalozky.length) throw new Error(`${radek.hra}: text nemá žádnou záložku („# Záložka: …“).`);
  const plny = !zalozky.some(z => z.nazev === 'Pomocná karta');
  return { ...radek, plny, zalozky };
}

// Porovná nové hry s tím, co je na webu; vrátí přidané, upravené (se seznamem záložek) a odebrané.
export function porovnej(hry, stareObsahy, stareSlugy) {
  const pridano = [], upraveno = [];
  for (const g of hry) {
    const stare = stareObsahy[g.slug];
    if (!stare) { pridano.push(g); continue; }
    const jine = g.zalozky.filter(z => { const s = stare.zalozky.find(x => x.nazev === z.nazev); return !s || s.html !== z.html; }).map(z => z.nazev);
    const ubyle = stare.zalozky.filter(s => !g.zalozky.some(z => z.nazev === s.nazev)).map(s => s.nazev);
    if (jine.length || ubyle.length) upraveno.push({ g, co: [...jine, ...ubyle] });
  }
  const nove = new Set(hry.map(g => g.slug));
  const odebrano = stareSlugy.filter(s => !nove.has(s.slug)).map(s => s.hra);
  return { pridano, upraveno, odebrano };
}
