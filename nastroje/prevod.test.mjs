import { test } from 'node:test';
import assert from 'node:assert/strict';
import { rozeberKnihovnu, rozdelNaZalozky, naHtml, sestavHru, porovnej, slug } from './prevod.mjs';

const TEXT = `<!-- Převzato z Claude Docs -->

---

# Záložka: Příprava

# Příprava

## Zdroje

- pravidla

---

# Záložka: Pro hráče

# Pro hráče

Cíl hry. Viz [Abyss](abyss.md).

[[obrázek hra-1: první tah]]

[[obrázek hra-2: tah v obrázku]]
`;

test('slug odstraní diakritiku a znaky', () => {
  assert.equal(slug('Válka o Prsten (War of the Ring, 2. edice)'), 'valka-o-prsten-war-of-the-ring-2-edice');
});

test('knihovna: řádky se svislítkem v textu a odkazem na soubor', () => {
  const md = `| Hra | Vydání | Styl výkladu | Výklad | Připraveno |
| --- | --- | --- | --- | --- |
| Abyss | České \\| Tlama | Mapa | [abyss](vyklady/abyss.md) | 31. 10. 2026 |`;
  assert.deepEqual(rozeberKnihovnu(md), [{ hra: 'Abyss', vydani: 'České | Tlama', styl: 'Mapa', slug: 'abyss', datum: '31. 10. 2026' }]);
});

test('knihovna: řádek bez odkazu je chyba', () => {
  assert.throws(() => rozeberKnihovnu('| X | a | b | nic | 1. 1. 2026 |'), /nemá odkaz/);
});

test('záložky: pořadí webu, bez zdvojeného nadpisu a komentáře', () => {
  const z = rozdelNaZalozky(TEXT);
  assert.deepEqual(z.map(x => x.nazev), ['Pro hráče', 'Příprava']);
  assert.ok(!z[0].md.includes('# Pro hráče'));
  assert.ok(!z[1].md.includes('Převzato'));
  assert.ok(!z[1].md.endsWith('---'));
});

test('HTML: odkaz na jiný výklad vede na kotvu, chybějící obrázek je poznámka, známý se vloží', () => {
  const html = naHtml(rozdelNaZalozky(TEXT)[0].md, { 'hra-2': '<figure class="schema">SVG</figure>' });
  assert.match(html, /href="#abyss"/);
  assert.match(html, /Obrázek „první tah“ zatím chybí/);
  assert.match(html, /<figure class="schema">SVG<\/figure>/);
});

test('HTML: odstraní skripty a obsluhy událostí, tabulku zabalí', () => {
  const html = naHtml('<script>x()</script>\n\n| a |\n| - |\n| b |\n\n<p onclick="y()">t</p>');
  assert.ok(!html.includes('<script'));
  assert.ok(!html.includes('onclick'));
  assert.match(html, /<div class="tbl"><table>/);
});

test('hra jen s pomocnou kartou není plná', () => {
  const g = sestavHru({ hra: 'X', slug: 'x' }, '# Záložka: Pomocná karta\n\nText');
  assert.equal(g.plny, false);
  assert.throws(() => sestavHru({ hra: 'Y', slug: 'y' }, 'bez záložek'), /žádnou záložku/);
});

test('porovnání: přidaná, upravená a odebraná hra', () => {
  const a = { slug: 'a', hra: 'A', zalozky: [{ nazev: 'Výklad', html: '<p>1</p>' }] };
  const b = { slug: 'b', hra: 'B', zalozky: [{ nazev: 'Výklad', html: '<p>2</p>' }] };
  const stare = { a: { zalozky: [{ nazev: 'Výklad', html: '<p>0</p>' }] }, c: { zalozky: [] } };
  const r = porovnej([a, b], stare, [{ slug: 'a', hra: 'A' }, { slug: 'c', hra: 'C' }]);
  assert.deepEqual(r.pridano.map(g => g.slug), ['b']);
  assert.deepEqual(r.upraveno.map(u => [u.g.slug, u.co]), [['a', ['Výklad']]]);
  assert.deepEqual(r.odebrano, ['C']);
});
