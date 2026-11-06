import { test } from 'node:test';
import assert from 'node:assert/strict';
import { zkontrolujObrazek } from './obrazky-kontrola.mjs';

const obal = svg => `<figure class="schema"><div class="schema-plocha">${svg}</div><figcaption>tah · 3 kroky</figcaption></figure>`;
const SVG = (telo, vb = '0 0 760 300') => `<svg viewBox="${vb}" role="img" aria-label="Tah" font-size="13">${telo}</svg>`;

test('správný obrázek projde', () => {
  assert.deepEqual(zkontrolujObrazek(obal(SVG('<rect x="10" y="10" width="200" height="40" fill="none" stroke="var(--cds-chart-axis)"/><text x="20" y="35" fill="var(--cds-text-primary)">Vezmete kartu.</text>'))), []);
});

test('přetékající text, překryv, pevná barva a chybějící popisek', () => {
  const n = zkontrolujObrazek(`<figure class="schema"><div class="schema-plocha">${SVG('<text x="700" y="20" fill="#000">Tento text je příliš dlouhý a přeteče</text><text x="700" y="22">Druhý</text>')}</div></figure>`);
  assert.ok(n.some(x => x.includes('přetéká')));
  assert.ok(n.some(x => x.includes('překrývají')));
  assert.ok(n.some(x => x.includes('pevná barva')));
  assert.ok(n.some(x => x.includes('figcaption')));
});

test('skript a tspan jsou zakázané, viewBox povinný', () => {
  assert.ok(zkontrolujObrazek(obal(SVG('<script>x()</script><text x="1" y="20">a<tspan>b</tspan></text>'))).some(x => x.includes('script')));
  assert.ok(zkontrolujObrazek(obal('<svg role="img" aria-label="x"><text>a</text></svg>')).some(x => x.includes('viewBox')));
});
