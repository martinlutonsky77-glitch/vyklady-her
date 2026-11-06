<!-- Převzato z Claude Docs (https://claude.ai/artifact/6ziYSrMS83a2iKS7RRQ395), export 6. 11. 2026 -->


---

# Záložka: Pro hráče

# Pro hráče

## Česká pomocná karta

❓ Podle Quick Reference Sheet 2.5; hodnoty označené ❓ jsou jen z neoficiálního shrnutí verze 1.

**Průběh kola**

1. Scenario die (scénářová kostka): padne-li spouštěcí číslo, threat roll (hod na hrozbu) d20 proti threat level (úroveň hrozby).
2. Hrdinové a nepřátelé táhnou; v boji podle initiative tokens (žetony iniciativy). Nakonec se wandering monster (bloudící netvor) pohne o 4 políčka.
3. Kontrola Sanity (příčetnost).
4. Kontrola Party Morale (PM, morálka družiny).

**Co můžeš v tahu (2 Action Points, AP, akční body)**

| Cena | Akce |
| --- | --- |
| 0 AP | otočení, prayer (modlitba) |
| 1 AP | pohyb, dveře, standard attack, parry stance, aim, reload, change gear, shove, stand up, obvaz, quick spell |
| 2 AP | pick lock, power attack, charge attack, standard spell, search |

**Dveře a truhly:** 1 AP, threat +1 ❓; hod d10 a d6 (šestka = past) ❓; d10 1 až 6 otevřeno, 7 až 0 zamčeno; vylomení 1 AP a threat +2 za pokus, jen když vedle nestojí nepřítel.

**Boj:** d100 pod CS nebo RS (Combat Skill, Ranged Skill). Nepřítel má hodnotu to hit / defence, která se odčítá. Zezadu +20, power attack +20 (pak v příštím tahu bez uhýbání a parry), ležící cíl +30, aim +10, parry stance cíle -10. Poškození = DMG + DB - NA - brnění. 01 až 05 perfect roll, 00 fumble.

**Threat level:** +1 dveře, truhla, vyhraný boj ❓; +2 vylomení. Klesá: Rest -5, událost z tabulky -2 až -10, přirozená 20 na d20 -5.

**Rest (odpočinek):** bez nepřátel na dlaždici a vedle, hrdinové spolu. -1 ration (příděl jídla), PM +2, každý +1d6 HP, za ztracenou Energy d6 (1 až 3 se vrátí), wizards mají všechnu Mana, wandering monster se pohne 3×, threat level -5, nakonec hod na Ambush (přepadení) ❓.

**Sanity:** past -2, terror test -2, fear test -1, zásah do hlavy -1, 0 HP -1, jed -1, nemoc -1, demoni -1.

**Party Morale:** smrt hrdiny -5, hrdina na 0 HP -4, demoni -2, hlad -2, past -1, poklad +1 až +3, odpočinek +2.

**Loot:** Hardcore: mrtvé po jednom za 1 AP. Streamlined: hodíš najednou, 0 AP.

**Pozor na:** miscast řeší tabulka (ne -1d3 Sanity); pojmenovaný netvor přidává žeton; po vyražení dveří +2 žetony nepřátel; do jámy se slezá bez DEX testu.

## Připomenutí na 2 minuty

🗣️ „Jste parta dobrodruhů v náhodném podzemí. Cíl je splnit výpravu a vrátit se živí. Body tu nejsou, vyhrává se přežitím.“

🗣️ „Každé kolo začíná hodem na scenario die. Každé otevření dveří a každý vyhraný boj zvedají threat level, který přivolává wandering monsters.“

🗣️ „Každý model má 2 AP. V boji se losují žetony, útok je d100 pod CS nebo RS.“

🗣️ „Na konci kola kontrolujeme Sanity a Party Morale. Rest snižuje threat level a léčí, ale stojí ration.“

💡 Snadno se zapomene: threat level stoupá i vašimi akcemi; extra žetony nepřátel; miscast je z tabulky. (Úsudek z FAQ a QRS, diskuse jsem neviděl.)

💡 Pozor na verzi: pravidla 2.5 změnila focus (max 2 AP), dual wield (DEX 55) a self-healing v boji. Starší shrnutí to nezná.


---

# Záložka: Příprava

# Příprava

## Vydání a zdroje

- **Hra:** League of Dungeoneers, návrhář Michael Lundstedt, vydavatel von Braus Publishing (vonbraus.se), 1 až 4 hráči, 90 až 180 minut, od 14 let.
- **Vydání:** anglické. Výklad vychází z Gamefound edition (2. tisk, pravidla 2.5). Kickstarter 2022 má starší pravidla.
- **Oficiální PDF pravidel jsem nenašel.** Hledal jsem na vonbraus.se (stránka hry, Reference Material, FAQ, produkty Knave, Queen, King), na orderofgamers.com a dvěma obecnými hledáními „rules pdf“ (výsledky jen spam nebo neoficiální shrnutí). Vlákno na BoardGameGeek vrátilo 403. Podle výsledku hledání se pravidlová PDF prodávají zvlášť ❓. Výklad je proto psaný z oficiálních podkladů (QRS 2.5, Changelog 2.5, FAQ, Quest sheet, seznam součástí) a z neoficiálního shrnutí verze 1; kde se verze liší, platí 2.5. Kontrola 3. 11. 2026 hledala znovu (Reference Material, obecné hledání včetně Gamefound): kniha 2.5 veřejně jako PDF není, King set podle stránky vydavatele obsahuje Queen a The False Prophet.
- **NotebookLM:** sešit k této hře neznám ❓. Kdyby vznikl, nahraj do něj QRS 2.5, Changelog 2.5, FAQ, Quest sheet, seznam součástí a pravidlovou knihu z krabice (jako sken). Shrnutí verze 1 jen pro srovnání.

## Rozbor hry a zvolený styl výkladu

**Styl výkladu:** výklad po vrstvách s mapou předem, a správa jako první rozhodnutí. Hra nemá body, takže těžiště není v bodování, ale v množství pravidel a v evidenci hrdinů. Nováček potřebuje nejdřív smyčku dveře, threat level, boj, odpočinek (4 bloky v Taháku), pak teprve postavu a kampaň. Mapu předem dává diagram kola, protože kolo má čtyři kroky a v nich se mění threat level. Ekonomika je řetěz zdrojů, které ubývají: HP, Energy, Mana, rations, mince, Durability, Sanity a Party Morale. ❓ Kapitoly knihy 2.5 jsem neviděl, proto je hodnocení délky odhad: výklad Taháku asi 15 minut, příprava hrdin 30 minut na jednoho, jedna výprava 2 až 4 hodiny.

## Pozor na

BoardGameGeek mi vrátil 403, proto seznam nevychází z diskusí, ale z oficiálního FAQ a Changelogu.

1. **Verze pravidel.** Pravidla 2.5 přepsala a přeuspořádala celou knihu. Mění level up (cena 1 až 3, max +3 na dovednost, HP 1d2-1, mezi levely nutná výprava), dual wield (DEX 55), focus (max 2 AP), self-healing v boji a šance past v místnostech. Starší shrnutí to neznají ([Changelog 2.5](https://vonbraus.se/wp-content/uploads/2026/08/Changelog-2.5.pdf)).
2. **Miscast.** Řeší se tabulkou, ne ztrátou 1d3 Sanity (FAQ). Starší shrnutí to uvádí jinak.
3. **Initiative tokens.** Žeton velkých a pojmenovaných netvorů se sečítá (FAQ). Vyražené dveře dávají nepřátelům +2 žetony (QRS 2.5).
4. **Jámy.** Slezení do jámy nevyžaduje DEX test, jen 1 AP (FAQ).
5. **Prohledávání.** Hraje se jen na předměty v místnosti; pro doly a jeskyně vydavatel doporučuje house rule (FAQ).
6. **Komponenty.** Wilderness event deck z TFP nahrazuje deck ze základní hry (první tisk měl karty vzhůru nohama). TFP má jen jednu trap card. „/10“ u zatížení znamená, kolik kusů se vejde do jednoho rychlého slotu (FAQ).
7. **Kniha.** Recenzent Travelled Tales popisuje nejednotné pojmy, tiskové chyby a chyby v rejstříku; ❓ nevím, zda je 2.5 opravila.

## Jádro hry

1. **O čem to je:** parta dobrodruhů prochází náhodně vznikající podzemí, plní zakázky a v osadě se posíluje.
2. **Jak se vyhrává:** splníš cíl výpravy a vrátíš se živý pro odměnu (mince, XP, poklad). Body ve hře nejsou.
3. **Kostra:** kolo má podle QRS 2.5 čtyři kroky (verze 1 jich měla pět); kampaň střídá osadu a výpravu.
4. **Tah:** každý model má 2 AP, v boji se losují žetony iniciativy.
5. **Dilema:** threat level roste, když se pohybuješ (dveře, truhly, boje). Odpočinek ji snižuje, ale stojí ration a necháš wandering monster přijít. K tomu ubývají HP, Energy, Mana, Sanity a Party Morale.
6. **Konec:** výprava končí splněním cíle. Prohra: všichni hrdinové krvácí, nebo Party Morale spadne na nulu a družina musí odejít ❓.
7. **Výjimky na později:** magie, prayers, alchemy, Luck, pasti, páky, portcullis, pavučiny, fear a terror, level up, cesta domů.

## První hra a příprava

- **Tipy pro první hru:** hraj jednu výpravu, Streamlined looting, žádná volitelná pravidla, 2 hrdiny nebo hrdiny a žoldáky. Hrdiny vytvoř před příchodem hostů.
- **Co koučovat:** po prvním boji se zeptej, co hráče nejvíc zdrželo, a přidávej akce až po jedné.
- **Příprava vysvětlovače:** QRS 2.5 přečti dvakrát, pak odehraj 2 až 3 zkušební kola sám.
- **Videa:** výukové video jsem nehledal ❓. Reference Material odkazuje jen na video o upgrade kitu.
- **Kontrola v NotebookLM:** až vznikne sešit, polož dotaz „Je v tomto výkladu něco v rozporu s pravidly nebo chybí něco podstatného?“.

## Zdroje

Otevřené stránky:

- [Reference Material, von Braus](https://vonbraus.se/games/league-of-dungeoneers/reference-material/) a z ní [Quick Reference Sheet 2.5](https://vonbraus.se/wp-content/uploads/2026/08/QRS-v2.5.pdf), [Changelog 2.5](https://vonbraus.se/wp-content/uploads/2026/08/Changelog-2.5.pdf), [Component list 1.3](https://vonbraus.se/wp-content/uploads/2024/09/All-components-1.3.pdf), [Quest sheet 1.0](https://vonbraus.se/wp-content/uploads/2024/11/Quest-sheet-1.0.pdf)
- [FAQ LoD a TFP, von Braus](https://vonbraus.se/games/league-of-dungeoneers/faq-lod-gamefound-edition-and-the-false-prophet-tfp/)
- [Stránka hry, von Braus](https://vonbraus.se/games/league-of-dungeoneers)
- [Knave box](https://vonbraus.se/product/league-of-dungeoneers-gamefound-edition-knave-box-english/), [Queen box](https://vonbraus.se/product/936/), [King set](https://vonbraus.se/product/league-of-dungeoneers-gamefound-edition-king-set-english/)
- [Esoteric Order of Gamers, stránka hry](https://www.orderofgamers.com/games/league-of-dungeoneers/) a [Rules and Reference v1](https://www.orderofgamers.com/downloads/LeagueofDungeoneers_v1.pdf) (neoficiální)
- [Recenze Travelled Tales](https://travelledtales.com/league-of-dungeoneers-review/)
- [Kallax: Companions](https://kallax.io/boardgame/UEOXW-League-of-Dungeoneers), [I'm Board Games: Kickstarter All-In](https://shop.imboardgames.com/products/league-of-dungeoneers-kickstarter-all-in-edition), [Game Nerdz: Queen, 2nd print](https://www.gamenerdz.com/league-of-dungeoneers-2nd-print-queen-pledge)
- Neotevřeno (403): [BGG, FAQ Gamefound edition](https://boardgamegeek.com/thread/3363932/gamefound-edition-league-of-dungeoneers-and-the-fa)


---

# Záložka: Učíme se hrát

# Učíme se hrát

**Značky:** 🗣️ říkáš nahlas · 🔴 častá chyba · 💡 napovídej · 🔧 jen pro tebe · ⏸️ pauza na otázky · ❓ ověřit v krabici

## Než začneš

Nauč se hru sám na jednu výpravu s jedním až dvěma hrdiny. Celou 268stránkovou knihu nečti naraz. ❓ Kapitoly knihy 2.5 jsem neviděl, proto neodkazuji na čísla stran.

🔧 Pojmy této záložky: start tile (úvodní dlaždice), Action Points (AP, akční body), scenario die (scénářová kostka), threat level (úroveň hrozby) a threat roll (hod na hrozbu), exploration card (karta průzkumu), initiative tokens (žetony iniciativy), wandering monster (bloudící netvor), Rest (odpočinek), Streamlined looting (zjednodušený loot), Combat Skill (CS, bojová dovednost), Quick Reference Sheet (QRS, rychlý přehled).

- Přečti dvě strany QRS 2.5. Je oficiální, kryje kolo, dveře, hrozbu, boj, odpočinek a loot a najdeš ho v záložce Příprava, oddíl Zdroje.
- Vytvoř 1 až 2 hrdiny. Jeden trvá asi 30 minut. Podle shrnutí verze 1: hodíš vlastnosti, rozdělíš 15 bodů, vybereš povolání a talenty, hodíš HP a začínáš se 150 mincemi ❓ (verze 2.5 mění některé ceny a limity).
- Vyber jednu výpravu z Quest Booku I. Quest sheet radí hodit d6: 1 až 3 se hraje z tabulky vesnic, 4 až 6 ze Silver City. ❓ Nejkratší výpravu jsem nezjistil.
- Rozlož stůl podle Taháku. Zvol Streamlined looting a žádná volitelná pravidla.

## Komiks

[[obrázek league-of-dungeoneers-1: komiks · šest panelů prvního tahu]]

Každý panel odpovídá jednomu kroku níže. Panel 3 a 4 se stávají jen tehdy, když na d100 padne setkání.

## Kolo 1 krok za krokem

1. Polož start tile a postav hrdiny na stranu s dveřmi. Scenario die zatím neházíš.
2. Jeden hrdina utratí 1 AP a otevře první dveře. Jsou vždy odemčené a threat level nezvyšují ❓ (verze 1).
3. Otoč vrchní exploration card z balíčku a polož podle ní dlaždici. Hodíš d100: místnost má 50 %, chodba 30 % šance na nepřátele ❓.
4. Jsou-li tam nepřátelé, rozmístíš je: bojovníci zblízka aspoň 1 políčko od hrdinů, střelci a kouzelníci co nejdál, ale v dohledu ❓. Do pytlíku dáš initiative tokens.
5. Losuj žeton a odehraj ho. Každý model má 2 AP: pohyb, útok d100 pod CS, parry stance (obranný postoj) a další akce z Taháku.
6. Po boji stoupne threat level o 1. Prohledej mrtvé podle zvoleného lootování.
7. Od teď na začátku každého kola hod scenario die; padne-li spouštěcí číslo, dělej threat roll.

💡 Napovídej: v prvním boji nech hráče používat jen běžný útok a pohyb. Zbytek akcí přidávej, až se zeptají.

## Kolo 2 a 3

- **Kolo 2:** hod scenario die, otevři další dveře (threat +1, hod d10 a d6 na zamknutí a past). Zkus threat roll, až padne spouštěč.
- **Kolo 3:** zkus prohledání dlaždice (2 AP, test PER; dva hrdinové +10, každý další +5). Když není nepřítel v dohledu, můžeš zkusit Rest.

⏸️ Pauza: po třech kolech zhodnoť, jestli tě baví hlídat Sanity a Party Morale na konci každého kola. U někoho je právě tady hranice, jestli ho hra zahltí.

## Co dál

- Dokonči výpravu: splň cíl, odejdi z podzemí (nemusíš jít zpět k vchodu ❓) a vrať se do osady pro odměnu.
- V osadě rozdělíš body na level up. Ve verzi 2.5 stojí zvýšení 1 až 3 body, každá vlastnost a dovednost smí vyrůst o nejvýš 3 a mezi levely musíš dokončit výpravu (Changelog 2.5).
- Přidej magic, prayers a alchemy až s hrdiny, kteří je skutečně mají.
- Pak zkus Companions a kampaň.


---

# Záložka: Výklad

# Výklad: League of Dungeoneers

Nov 3, 2026 · @Promens

**Značky:** 🗣️ říkáš nahlas · 🔴 častá chyba · 💡 napovídej · 🔧 jen pro tebe · ⏸️ pauza na otázky · ❓ ověřit v krabici

## Správa: kolik jí je a jak ji zmenšit

Správy je hodně: každý hrdina je list s desítkami čísel, která se mění po každé ráně, a družina vede navíc své společné čítače. Hra správu sama nezjednodušuje, ale dává několik oficiálních způsobů, jak ji ubrat. Jestli tě hra bude bavit, rozhodne hlavně to, zda tě baví vést si postavu jako v RPG.

Podklad: recenzent z Travelled Tales označil evidenci za těžkou (psal si všechno na čtverečkovaný papír) a píše, že někoho odradí. Vydavatel sám uvádí, že žoldáci a kovové mince správu snižují. Změřenou pracnost nikdo nezveřejnil, proto je sloupec „Zátěž“ níže můj odhad podle pravidel.

| Co sleduješ | Jak často se mění | Zátěž (odhad) | Co ji sníží |
| --- | --- | --- | --- |
| Hit Points (HP, životy), Energy (energie), u čarodějů Mana | po každé ráně, kouzlu a schopnosti | střední | Žoldáci (mercenaries) se vedou jako nepřátelé s hodnotou obrany, nemají dodge ani parry |
| Sanity (příčetnost, start 10) | past, strach, 0 HP, nemoc, jed | nízká až střední | Žoldáci Sanity neztrácejí |
| Party Morale (PM, morálka družiny) | smrt hrdiny, past, poklad, odpočinek; kontrola každé kolo | střední | jeden společný čítač na dry-erase scenario sheet |
| Threat level (úroveň hrozby) | +1 za otevřené dveře nebo truhlu a za vyhraný boj, +2 za vylamování | nízká, ale musíš na ni myslet | jeden čítač na scenario sheet |
| Durability (DUR, odolnost výbavy) | zásah do trupu může poškodit předmět v rychlém slotu (hod d10) | střední až vysoká v boji | vlastní návrh, v pravidlech není: v první hře DUR neřeš ❓ |
| Encumbrance (ENC, zátěž) a quick slots (rychlé sloty) | při každém sebrání a přesunu věcí | nízká až střední | Streamlined looting (viz níže) |
| Mince, loot, rations (příděly jídla) | po boji a při každém odpočinku | střední | metal coins (kovové mince), Streamlined looting |
| Stavy: otrava, nemoc, krvácení, duševní stavy | nárazově, ale s opakovanými hody | nízká až vysoká podle situace | léčení a odpočinek je řeší hromadně |
| Postup postavy: XP, zvýšení dovedností o +1, level up v osadě | po výpravě; level up utrácí body za vlastnosti a dovednosti | vysoká (nejvíc rozhodování) | Žoldáci XP nezískávají |
| Stav podzemí: balíčky karet, bloudící netvor, poznámky | celou dobu výpravy | střední | tiskni nebo kresli mapu jen u přerušené výpravy |

**Orientačně:** vytvoření jednoho hrdiny trvá asi 30 minut, jedna výprava 2 až 4 hodiny (Travelled Tales); v nabídce stojí 90 až 180 minut.

### Jak správu zmenšit, od nejúčinnějšího

1. **Žoldáci z rozšíření Companions.** Vydavatel píše, že hra s jedním hrdinou a třemi žoldáky má méně evidence, protože žoldáci nezískávají XP ani neztrácejí Sanity. Recenzent je ale považuje za slabší a doporučuje tři hrdiny plus jednoho střídavého žoldáka.
2. **Streamlined looting místo Hardcore looting.** Po boji hodíš na loot za všechny padlé nepřátele najednou a rozdělíš ho bez pohybu a bez Action Points. Hardcore vyžaduje prohledávat mrtvé po jednom za 1 AP.
3. **Pomůcky v krabici.** Dry-erase scenario sheet pro čítače družiny, bloky character sheets a scenario sheets (po 20 listech), quick reference sheet a treasure reference sheet, acrylic initiative tokens a party token, door tokens, metal coins (jen v Queen a King).
4. **Vynech volitelná pravidla.** Dungeon events jsou výslovně volitelné, počítání šípů také, časový limit krvácení se přidává jen když je hra příliš snadná. Darkness je v pravidlech 2.5 označeno jako pokročilé pravidlo.
5. **Jedna výprava místo kampaně.** Hra je sandbox, kampaň můžeš začít i přerušit kdykoli, takže první večer nemusí řešit postup mezi výpravami.
6. **Rozdělení práce u stolu (vlastní návrh, v pravidlech není).** Jeden hráč drží společné čítače (Threat level, PM, rations, mince), ostatní svůj list. ❓

💡 Jak se rozhodnout: po první výpravě se zeptej, jestli ti vedení listů dalo pocit růstu postavy, nebo tě odvádělo od hry. Pokud to druhé a ani žoldáci se Streamlined looting nepomohli, hra je pro tebe pravděpodobně moc těžká na evidenci.

## Tahák na stůl

**Vydání:** anglické. Řídil jsem se Gamefound edition (2. tisk, pravidla ve verzi 2.5, modrá kniha). Původní Kickstarter z roku 2022 má starší pravidla (verze 1), rozdíly jsou v záložce Příprava. Hodnoty bez ❓ jsou z oficiálního Quick Reference Sheet 2.5, hodnoty s ❓ jen z neoficiálního shrnutí verze 1. ❓ Zkontroluj na hřbetu knihy, kterou verzi máš.

🔧 **Příprava stolu:** hrdinové jsou hotoví předem (hra je vyvážená pro 4 hrdiny ❓). Polož start tile: jedna strana je s dlaždicemi a dveřmi do podzemí, druhá s trávou (ta vede na světovou mapu). Podle questu vyber exploration cards (karty průzkumu): místnosti a chodby zamíchej zvlášť, vezmi předepsaný počet, zamíchej dohromady a rozděl na dvě stejné půle ❓. Objective card (karta cíle) přidej k jedné půli, zamíchej a polož ji dole pod druhou. Balíček dá za první dveře. Do pytlíku dáš initiative tokens (žetony iniciativy). U sebe máš dry-erase scenario sheet, d100 a d10 (scenario die, scénářová kostka).

### Blok 1 · O čem hra je a jak končí

🗣️ „Jste parta dobrodruhů. Vezmete zakázku, vejdete do podzemí, které vzniká až za pochodu, splníte cíl a vrátíte se živí pro odměnu. V osadě se pak léčíte, nakupujete a postupujete na vyšší úroveň.“

🗣️ „Body tu nejsou. Vyhrajete, když splníte cíl výpravy a vrátíte se. Prohrajete, když padnou všichni, nebo když Party Morale klesne na nulu a musíte utéct. Pak můžete výpravu zkusit znovu.“ ❓

🗣️ „Každý hrdina má druh, povolání, vlastnosti a dovednosti (skills). Ve hře hodíte d100 a musíte hodit nejvýš hodnotu dovednosti. Hod 01 až 05 je perfect roll (perfektní hod) a dá bonus.“

### Blok 2 · Průzkum a threat

🗣️ „Podzemí neznáme. Když otevřu dveře, otočím vrchní exploration card a položím dlaždici.“

Otevření dveří nebo truhly po krocích:

1. Stojíte vedle a utratíte 1 Action Points (AP, akční body), neboť každý model má v tahu 2. Threat level hned stoupne o 1 ❓ (verze 1, QRS 2.5 to neuvádí).
2. Hodíte d10 a d6 najednou. Šestka na d6 znamená past: vytáhne se trap card. ❓ (verze 1; podle Changelogu 2.5 jsou pasti v místnostech častější)
3. Dveře: d10 1 až 6 jsou otevřené, 7 až 0 zamčené (stoupá obtížnost páčení zámku 0, -10, -15, -20 %). Zamčené jde vylomit, jen když vedle nestojí nepřítel; každý pokus stojí 1 AP a threat +2 (QRS 2.5).
4. Otočíte kartu, položíte dlaždici. Hodíte d100 na setkání: místnost má 50 %, chodba 30 % šance na nepřátele ❓.

🗣️ „Na začátku každého kola hodím scenario die. Když padne 9 nebo 0 (quest může spouštěcí hodnotu změnit ❓ verze 1), dělám threat roll: d20 proti threat level. Padne-li víc, threat level stoupne o 1. Padne-li stejně nebo méně, čtu v tabulce, co se stalo, a threat level o uvedenou hodnotu klesne. Přirozená 20 sníží threat level o 5.“

- Mimo boj: 1 až 12 objeví se wandering monster (bloudící netvor, -5); 13 až 15 přidá se exploration card na každý balíček (-5); 16 až 17 šance na setkání +10 všude do max 70 % (-6); 18 až 19 někdo spustil past (-7); 20 je +1 ke scenario die (-10).
- V boji: tabulka d10 hodí zlé zvraty nepřátel (např. jed ve zbrani, +15 CS jednomu nepříteli, léčení); threat level klesne o 2 až 6.

🗣️ „Wandering monster je žeton, který začíná na start tile, poté co se pohnou všechny ostatní modely, a jde za vámi 4 políčka. Po prvním kroku hodím d6: 1 jde zpátky k východu, 2 až 6 jde nejkratší cestou k vám. Zavřené dveře ho zdrží.“

💡 Napovídej: threat level stoupá i vašimi vlastními akcemi (dveře, truhly, vyhraný boj). Tím hra tlačí na to, aby se nezdržovalo.

⏸️ Pauza na otázky.

### Blok 3 · Boj

🗣️ „Na tahu má každý model dvě akce. Uděláte, co chcete, ale každou akci musíte dokončit, než začnete další.“

- 0 AP: otočení, modlitba.
- 1 AP: pohyb o M políček, otevřít dveře, standard attack (běžný útok), parry stance (obranný postoj), aim (míření), dobíjení, výměna výbavy, shove (strk), obvaz, rychlé kouzlo.
- 2 AP: páčení zámku, power attack (silný útok, +20 CS, ale v příštím tahu nemůžeš uhýbat ani bránit a nepřátelé mají proti tobě +10 CS), charge attack (nabíhavý útok), standardní kouzlo, prohledání.

🗣️ „V boji nehrajeme po řadě. Z pytlíku losuji žetony: jeden za každého hrdinu a jeden za každého nepřítele. Kdo je vylosován, odehraje obě akce. Pak už nelosuje.“ Extra žeton nepřítel: +1 za pojmenovaného netvora, +1 za velkého, +2 když jste vyrazili dveře. Hrdina na overwatch (hlídce) žeton nepřidává.

🗣️ „Útok je d100: musíte hodit nejvýš Combat Skill (CS) zblízka, nebo Ranged Skill (RS) na dálku. Nepřítel se nebrání hodem, má číslo to hit (obrana), které odečítám od vaší hodnoty.“ Poškození = DMG zbraně + Damage Bonus (DB) - Natural Armour (NA, přirozené brnění) - obleček ❓.

- Bonusy: útok zezadu +20, power attack +20, cíl leží +30, výška +10, aim +10; mínusy: parry stance nepřítele -10, polovýsoká překážka při střelbě -10.
- Když nepřítel trefí hrdinu, hodí se d6 na místo zásahu: 1 hlava, 2 paže, 3 až 5 trup, 6 nohy. Zásah do trupu může poškodit výbavu (d10 na rychlé sloty).
- Hrdina na 0 HP padne a začne bleeding out (krvácení): potřebuje léčení. Když krvácí všichni, quest je prohraný ❓.
- Wounded (zraněný) je model, který ztratil aspoň polovinu HP (zaokrouhleno nahoru); smí v tahu použít jen 1 AP. ❓ (verze 1; stav wounded zná i QRS 2.5, omezení AP ověř v knize)

💡 **Napovídej:** v boji se nehraje po řadě, ale losováním žetonů; mimo boj jdou nejdřív hrdinové a pak nepřátelé. ❓ (z pravidel, ne z diskusí)

⏸️ Pauza na otázky.

### Blok 4 · Po boji, odpočinek a Party Morale

🗣️ „Když boj vyhrajete, threat level stoupá o 1. Pak si zvolíte, jak se bude lootovat: Hardcore, kdy prohledáváte mrtvé po jednom za 1 AP, nebo Streamlined, kdy se hodí na loot najednou a nic nestojí AP.“

🗣️ „Rest (odpočinek) si můžete dát, když není nepřítel na dlaždici ani vedle a všichni stojíte spolu. Spotřebujete 1 ration (příděl jídla), threat level klesne o 5, Party Morale stoupne o 2, každý dostane 1d6 HP, za každý ztracený bod Energy hodím d6 (1 až 3 se vrátí), wizards dostávají Mana zpátky. Ale wandering monster se mezitím třikrát pohne. Nakonec hodím na Ambush (přepadení).“ ❓ (podmínky Rest jsou z verze 1, co dělá Ambush, uvádí jen kniha 2.5)

🗣️ „Každé kolo kontrolujeme Sanity a Party Morale. Past -2 Sanity, strach -1, smrt hrdiny -5 PM, hrdina na 0 HP -4, nalezený poklad +1 až +3. Když Party Morale klesne pod polovinu, všichni mají -10 RES.“ ❓ (pokles pod polovinu a -10 RES jsou jen z verze 1)

### Co vysvětlit až během hry

- Magic (magie): mana, casting value (CV), hod pod Arcane Arts mínus CV, miscast na 95 a výš; prayers (modlitby) stojí vždy 1 Energy a hod na Battle Prayer.
- Alchemy (alchymie): ingredience a části nepřátel, slabý, běžný a vynikající lektvar.
- Luck (štěstí): 1 bod pro opakování hodu, obnoví se v osadě.
- Pasti: percepční test, odzbrojení 2 AP; padací mříž (portcullis) si otevře test STR; pavučinové otvory se rozsečou s threat +1; páky (levers) mají vlastní tabulky.
- Fear a Terror: test RES, selhání dává -10 CS/RS.
- Level up v osadě, cesta domů (Travel Events), Silver City s cechy.
- Party Morale a Sanity: 0 Sanity je duševní stav, 0 PM je útěk.

## Režimy hry

Hra nemá pojmenované režimy jako samostatné knihy pravidel; režim vzniká kombinací voleb níže. Všechny jsem vypsal ze shrnutí verze 1, z Quick Reference Sheet 2.5 a z Quest sheet. ❓ Kniha 2.5 možná přidává další volitelná pravidla, která jsem neviděl.

| Volba | Co mění | Správa | Kdy ji zvolit |
| --- | --- | --- | --- |
| 4 hrdinové | hra je na čtyři nejlépe vyvážená, hrdiny si rozdělí hráči | nejvyšší | skupina 2 až 4 hráčů, vyhovuje ti postavy vést |
| 1 až 3 hrdinové + mercenaries | žoldáci (z Companions) doplní družinu a hrají jako nepřátelé s defence hodnotou | nižší | solo nebo 2 hráči; recenzent doporučuje 3 hrdiny a jednoho střídavého žoldáka |
| Solo | jeden hráč vede celou družinu; hra je navržená jako solo/co-op | podle počtu hrdinů | večer sám |
| Co-op | hráči sdílejí tu samou družinu proti hře | podle počtu hrdinů | skupina |
| Game master (herní vedoucí) | volitelný hráč jako facilitátor; recenzent ho doporučuje pro nenáročné skupiny ❓ pravidla pro něj jsem nenašel | nižší pro hráče | hra s nováčky |
| Jedna výprava (single quest) | vybereš quest z Quest Booku a skončíš po jeho splnění | nízká | první pokus, jeden večer |
| Kampaň (7 propojených, podle prodejce) | výpravy navazují, sandbox: začneš a přerušíš kdykoli | vysoká (postup postav) | když tě hra chytne |
| Hardcore looting nebo Streamlined looting | hardcore: mrtvé prohledáváš po jednom za 1 AP; streamlined: loot se hodí najednou | streamlined je lehčí | dohodni před hrou |
| Dungeon events (volitelné) | v místnostech bez setkání hod d10, 9 až 10 spustí událost | vyšší | až znáš základ |
| Počítání šípů (volitelné) | toulec drží 10 šípů, zbylé jsou v batohu | vyšší | když chceš větší realismus |
| Časový limit krvácení (volitelné) | hrdina na 0 HP umře po 1d6+1 kolech | beze změny, ale těžší hra | když je hra příliš snadná |
| Darkness (pokročilé pravidlo 2.5) | světlo mění hody: šero dává -10 PER a -5 na DEX dovednosti kromě CS, tma -20 PER a -15; bez přenosného světla PM -4 (šero) nebo -7 (tma); pochodně a lampy upravuješ na začátku kola | vyšší (pochodně, lampy) | až znáš základ |

💡 Pro první hru: jedna výprava, Streamlined looting, žoldáci nebo 2 hrdinové, žádná volitelná pravidla. Tak uvidíš jádro hry, ne evidenci.

## Obsah krabice a rozšíření

Hra má tři rozšíření: Ancient Lands, Companions a The False Prophet (TFP). Co z nich máš, závisí na vydání. ❓ Nevím, kterou krabici máš. Porovnej ji s oficiálním seznamem All components 1.3 (odkaz v záložce Příprava).

| Vydání | Co obsahuje | Poznámka |
| --- | --- | --- |
| Kickstarter 2022, All-In | základní hra, Ancient Lands, Companions (kompendium a karty), 3D dveře, všechny stretch goaly, bloky character sheets a scenario sheets, kostky, taška na kostky, podložka na kostky, kovové mince, sleeves, standees a držáky, karty kouzel a modliteb, neoprenová mapa; asi 51 dlaždic a 6 cílových, 394 karet, přes 100 tokenů, 30 dveří, 240stránková kniha | starší pravidla (verze 1); podle prodejce I'm Board Games, stránka vyprodaná |
| Gamefound, Knave | základní hra se vším potřebným: tvrdá pravidlová kniha (268 stran, včetně Quest Book I), Bestiary, Quest Book II, Quick Reference Compendium, 52 dlaždic, 483 standees, karty (445 + 102 + 5), 9 kostek, 30 acrylic initiative tokens, party token, 18 dřevěných kostek, složitá mapa, 9 venkovních dlaždic, 20 character sheets, 20 scenario sheets, dry-erase scenario sheet, 30 door tokens, 124 tokenů | nejlevnější varianta; bez rozšíření |
| Gamefound, Queen | Knave plus Ancient Lands (1 kniha, 22 dlaždic, 22 karet), Companions (1 kniha, 46 karet), 96 kovových mincí s pouzdrem, 71 karet kouzel a modliteb, podložka a taška na kostky, neoprenová mapa, 15 otevřených a 10 zavřených plastových dveří, 691 sleeves | seznam doplňků odpovídá stránce King setu vydavatele, kde je navíc jen The False Prophet |
| Gamefound, King | Queen plus The False Prophet (stránka King setu vydavatele) | váha asi 19 kg |
| Gamefound, Ace | zřejmě King se zlatou krabicí, jadeitovými kostkami, acrylic standees, vlajkou, podtácky, certifikátem a hedvábným váčkem na kostky ❓ | vychází jen ze seznamu součástí, stránku produktu jsem nenašel |
| Upgrade kit | pro Kickstarter backery: tvrdá pravidlová kniha, Bestiary, Quest Book II, Quick Reference Compendium, nové karty a tokeny | převádí Kickstarter na Gamefound edici |

### Rozšíření jednotlivě

**Companions (kdy zapojit: hned, hlavně solo a ve dvou).** Přidá mercenaries (žoldáky): 15 jmenovaných s příběhem a obecné ze všech povolání. Žoldáci bojují jako nepřátelé s hodnotou obrany a ty je ovládáš. Další obsah: psí společníci, kteří získávají XP, a pro čaroděje familiars (mazlíčci). ❓ Počty se liší: výběr z Kickstarteru uvádí dvě plemena psů a 13 familiars, katalog Kallax tři plemena a 10 typů.

**Ancient Lands (kdy zapojit: až s postavami na vyšší úrovni).** Malá kampaň pro zkušenější postavy, kde se vydáváš z osady The Outpost. Přidá 22 dlaždic, 22 karet a knihu. Quest sheet uvádí pro Outpost pět výprav: The Pyramid of Xanthu, Tomb of the Hierophant, Temple of Despair, Halls of Amenhotep, Crypt of Khaba.

**The False Prophet (TFP, kdy zapojit: až je jádro hry pod kontrolou ❓).** Samostatné pravidlové doplnky: TFP rulebook, Quest Book III, Legendary items book. Seznam součástí ❓ ukazuje 22 dlaždic, 31 karet nestvůr, 27 karet pokladů, 42 karet událostí, 10 karet invocation, 9 karet beastform, 10 squire, 13 modliteb, 12 cantrip, 29 lektvarů, 51 legendárních předmětů a 48 dungeon event cards. FAQ k TFP uvádí nové druhy Duckfolk a Half-Ogre. ❓ Podrobnosti pravidel TFP jsem neviděl.

🔴 **Pozor (FAQ vydavatele):** Wilderness event deck z TFP nahrazuje deck ze základní hry, protože první tisk měl karty vzhůru nohama (FAQ vydavatele). Chybějící žeton C19 v krabici nehledej, číslování ho nemá.

## Tah v jednom obrázku

[[obrázek league-of-dungeoneers-2: kolo · čtyři kroky a pohyb hrozby]]

Kolo má podle QRS 2.5 čtyři kroky; wandering monster se hýbe na konci kroku 2. Threat level stoupá vaší vlastní činností (dveře, truhly, vyhrané boje) a klesá při Rest nebo událostí z tabulky; vstupuje do hodu v kroku 1. V Quick Reference Sheet 2.5 se wandering monster hýbe až po pohybu všech ostatních modelů.
