// Čistá kontrola jednoho obrázku (HTML s SVG). Vrací seznam nálezů, prázdný = v pořádku.
// Šířka textu je odhad (průměrný znak ≈ 0,5 velikosti písma, tučně 0,54). Rozhoduje náhled v PNG.

const atribut = (tag, jmeno) => { const m = tag.match(new RegExp(`\\s${jmeno}="([^"]*)"`)); return m ? m[1] : null; };
const POVOLENE_BARVY = /^(none|transparent|currentColor|var\(--cds-[a-z0-9-]+\))$/;

export function textoveBloky(svg, vychoziPismo) {
  const bloky = [];
  for (const m of svg.matchAll(/<text\b([^>]*)>([\s\S]*?)<\/text>/g)) {
    const tag = m[1];
    const obsah = m[2].replace(/<[^>]+>/g, '').replace(/&[a-z#0-9]+;/g, 'x');
    const fs = Number(atribut(tag, 'font-size') || vychoziPismo);
    const sirka = obsah.length * fs * (atribut(tag, 'font-weight') && Number(atribut(tag, 'font-weight')) >= 600 ? 0.54 : 0.5);
    const x = Number(atribut(tag, 'x') || 0), y = Number(atribut(tag, 'y') || 0);
    const kotva = atribut(tag, 'text-anchor') || 'start';
    const x0 = kotva === 'middle' ? x - sirka / 2 : kotva === 'end' ? x - sirka : x;
    bloky.push({ text: obsah.trim(), x0, x1: x0 + sirka, y0: y - fs * 0.8, y1: y + fs * 0.2, tspan: /<tspan/.test(m[2]), transform: !!atribut(tag, 'transform') });
  }
  return bloky;
}

export function zkontrolujObrazek(html) {
  const n = [];
  const t = html.trim();
  if (!/^<figure class="schema"><div class="schema-plocha"><svg\b/.test(t)) n.push('nezačíná <figure class="schema"><div class="schema-plocha"><svg');
  if (!/<\/svg><\/div><figcaption>[^<]+<\/figcaption><\/figure>$/.test(t)) n.push('nekončí </svg></div><figcaption>popis</figcaption></figure>');
  if (/<(script|foreignObject|image|style|iframe)\b/i.test(t) || /\son[a-z]+=/i.test(t)) n.push('obsahuje script, foreignObject, image, style nebo obsluhu události');
  const svgTag = (t.match(/<svg\b[^>]*>/) || [''])[0];
  const vb = (atribut(svgTag, 'viewBox') || '').split(/\s+/).map(Number);
  if (vb.length !== 4 || vb[0] !== 0 || vb[1] !== 0) { n.push('svg nemá viewBox="0 0 šířka výška"'); return n; }
  const [, , W, H] = vb;
  if (W < 600 || W > 900) n.push(`šířka viewBox ${W} mimo 600–900`);
  if (!atribut(svgTag, 'role') || !atribut(svgTag, 'aria-label')) n.push('svg nemá role="img" a aria-label');
  for (const m of t.matchAll(/\s(fill|stroke)="([^"]*)"/g)) if (!POVOLENE_BARVY.test(m[2])) { n.push(`pevná barva ${m[1]}="${m[2]}" (jen var(--cds-…), none)`); break; }
  const bloky = textoveBloky(t, Number(atribut(svgTag, 'font-size') || 13));
  if (!bloky.length) n.push('žádný text');
  for (const b of bloky) {
    if (b.tspan || b.transform) { n.push(`text „${b.text.slice(0, 30)}“ používá tspan nebo transform (piš řádek = jeden <text>)`); continue; }
    if (b.x0 < -1 || b.x1 > W + 1 || b.y0 < -1 || b.y1 > H + 1) n.push(`text „${b.text.slice(0, 40)}“ přetéká mimo obrázek`);
  }
  for (let i = 0; i < bloky.length; i++) for (let j = i + 1; j < bloky.length; j++) {
    const a = bloky[i], b = bloky[j];
    if (a.x0 < b.x1 - 2 && b.x0 < a.x1 - 2 && a.y0 < b.y1 - 1 && b.y0 < a.y1 - 1) n.push(`texty se překrývají: „${a.text.slice(0, 25)}“ a „${b.text.slice(0, 25)}“`);
  }
  return n;
}
