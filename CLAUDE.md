# Výklady her

Český web s výklady deskových her Martina Lutonského, veřejně na GitHub Pages:
https://martinlutonsky77-glitch.github.io/vyklady-her/

**Zdroj pravdy jsou texty v tomto repozitáři** (od 6. 11. 2026). Dřív byly v Claude Docs, ke kterým už není přístup;
odkaz „Převzato z Claude Docs“ na začátku souboru je jen historie.

## Kde co je

- `knihovna.md`: seznam her (Hra | Vydání | Styl výkladu | Výklad | Připraveno), řazený podle abecedy.
- `vyklady/<slug>.md`: jeden výklad. Záložky začínají řádkem `# Záložka: <název>`. Pořadí na webu je
  Pro hráče · Výklad · Učíme se hrát · Příprava. Hra bez celého výkladu má jen záložku `Pomocná karta`.
- `diagramy/<slug>-<n>.html`: hotový obrázek (`<figure class="schema">…</figure>`). V textu ho zastupuje řádek
  `[[obrázek <slug>-<n>: popis]]`. Když soubor chybí, web napíše „Obrázek … zatím chybí“.
- `nastroje/`: převod textů na data webu (`prevod.mjs` čisté funkce, `sestav.mjs` práce se soubory, testy).
- `data/`, `index.html`: hotový web. `data/` se negeneruje ručně, jen přes `sestav.mjs`.

## Postup

1. Nová hra: soubor `vyklady/<slug>.md` (slug = název bez diakritiky, malými písmeny, pomlčky) a řádek
   v `knihovna.md` na místě podle abecedy. Odkaz mezi výklady: `[Abyss](abyss.md)`.
2. `cd nastroje && npm install` (jen poprvé), `npm test`.
3. `node nastroje/sestav.mjs`: zkušební běh, vypíše, co přibude a co se změní.
4. `node nastroje/sestav.mjs --zapsat "popis vydání"`: zapíše `data/` a přidá vydání do „Co je nového“.
5. `node nastroje/sestav.mjs nahled`: web na http://localhost:8123/, prohlédnout.
6. Commit do vývojové větve, záznam do `ZMENY.md`. Push a PR dělá Martin.

Pravidla psaní výkladů (pojmy, záložky, kontrola Opusem) jsou v agentovi `~/.claude/agents/vyklad-autor.md`.
Repozitář je veřejný: žádné osobní údaje, hesla ani stažená PDF pravidel.
