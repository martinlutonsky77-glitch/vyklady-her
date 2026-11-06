<!-- Převzato z Claude Docs (https://claude.ai/artifact/KNFGcTAR48tRZi3gixhEXV), export 6. 11. 2026 -->


---

# Záložka: Učíme se hrát

# Učíme se hrát

Tato záložka je pro tebe, když se chceš hru naučit sám, dřív, než ji budete vysvětlovat u stolu. První úlohu zvládneš asi za 20 minut a stačí ti k tomu krabice, tužka a popisovač.

## Příprava

1. Prolistuj pravidla: cíl hry, přípravu a kapitolu o průběhu kola. Je to pár stran.
2. Sestav podstavec na děrné karty (po hře ho nerozebírej) a seřaď do něj děrné karty podle barev a čísel.
3. Vyber úlohu. První úlohy v knížce jsou určené pro začátečníky a řešení kódu je vytisknuté v tabulce v knížce, tak se tam zatím nedivej.
4. Ke každému ověřovači (A, B, C, D) přiřaď kartu kritérií podle úlohy a vedle ní polož kartu ověření lícem dolů. Na rub karet ověření zaškrtni jejich písmeno.
5. Vezmi si pomůcku hráče a záznamový list. Sloupce E a F na listu přeškrtni, úloha je nepoužívá.
6. Přečti si každou kartu kritérií a ujasni si, co přesně znamenají její možnosti. Pravidla radí to udělat na začátku každé hry. Výklad všech karet je v pravidlech a přehled typů najdeš v záložce Pro hráče.

Hrajete-li sami, hrajete sólo: řešíš úlohu s co nejmenším počtem kol a otázek. Na turingmachine.info pak můžeš zjistit, jak dopadl Stroj.

## Komiks prvního tahu

[[obrázek turing-machine-1: první kolo · 6 panelů]]

První kolo na jednoduché úloze se čtyřmi ověřovači: tři otázky, tři odpovědi a první možnosti jsou vyřazené.

## Kolo 1 krok za krokem

Počítáme s příkladem z komiksu výše. Je vymyšlený, aby bylo vidět, jak odpovědi zužují možnosti.

1. **Slož návrh.** Vezmi modrou 3, žlutou 4 a fialovou 1 a přilož je přes sebe. Zapíš návrh na záznamový list.
2. **Zeptej se ověřovače A.** Vlož jeho kartu ověření pod děrné karty, zarovnej ji podle značek v rozích a podívej se do otvoru. Vidíš ✓. Ověřovač A kontroluje modré číslo, takže platí „modrá je větší než 1“. Zapiš V pod A a kartu vrať lícem dolů.
3. **Zeptej se ověřovače D.** Dá ✗. D hlídá, která barva má nejmenší číslo. V návrhu je nejmenší fialová a to neplatí, takže nejmenší je žlutá, nebo modrá. Zapiš X pod D.
4. **Zeptej se ověřovače C.** Dá ✗. C porovnává modrou s fialovou. V návrhu je modrá větší než fialová a to neplatí, takže modrá je menší, nebo stejná jako fialová. Zapiš X pod C.
5. **Odvozuj.** Modrá je aspoň 2 a fialová není menší než modrá, takže fialová je také aspoň 2. Škrtni na listu modrou 1 a fialovou 1.
6. **Konec kola.** Už jsi položil tři otázky, víc nesmíš. Kód zatím neznáš, tak ukážeš palec dolů.

🔴 **Častá chyba:** ✓ od ověřovače A neznamená „modrá je 3“, jen „modrá je větší než 1“. Ověřovač zná jen své pravidlo.

## Kola 2–3

1. **Rozhodni, co ti zbylo.** A už znáš, tak se na něj už neptej. U C zbyly dvě možnosti (modrá je menší, nebo rovna fialové) a u D také dvě (nejmenší je žlutá, nebo modrá). O ověřovači B zatím nevíš nic.
2. **Slož návrh, který dvě možnosti odliší.** Třeba modrá 2, žlutá 1, fialová 2: modrá je rovna fialové a nejmenší je žlutá. Odpověď ✓ u C by řekla „rovna“, ✗ „menší“. U D by ✓ řekla „nejmenší je žlutá“, ✗ „nejmenší je modrá“.
3. **Zeptej se C, D a B.** Zapiš odpovědi a škrtej čísla na listu.
4. **Čím méně otázek, tím líp.** Když kód najde víc hráčů, vyhrává ten, kdo položil nejméně otázek. Ptej se proto jen na to, co ti pomůže.
5. **Když znáš pravidla všech ověřovačů, najdi kód.** Je jen jeden, který splní všechna pravidla. Ukazuj palec nahoru, až když si jsi jistý. Kdo se spletl a nikdo nemá správně, vypadává.
6. **Ověř kód.** Zapiš ho na list, zkontroluj v tabulce řešení a pro důkaz ho slož z děrných karet a projdi s ním všechny ověřovače.

💡 Každý ověřovač přináší informaci, kterou nemá žádný jiný. Když ti někdo řekne, že jedno pravidlo už víš, nepotřebuješ se ho ptát znovu.

## Co dál

- Zahraj další úvodní úlohy z knížky. Je jich dohromady 20 a každá má jiné karty kritérií.
- Na turingmachine.info jsou miliony dalších úloh. Pro pravidla z této krabice vybírej režim Klasický.
- Zkus režimy Extrémní a Noční můra (krátce ve Výkladu v oddíle Varianty).
- S nováčky hraj s handicapem, pokud jsi zkušenější.
- Sólo nebo v týmu: poraz Stroj. Najdi kód s ne více koly a otázkami než on.
- Když budete hru učit ostatní, přepni na záložku Výklad.


---

# Záložka: Pro hráče

# Pro hráče

## Česká pomocná karta

Přehled bez vysvětlování. Název a termíny viz slovníček níže.

**Průběh kola** (všichni naráz)

1. **Návrh:** přilož přes sebe tři děrné karty, modrou, žlutou a fialovou. Zapiš návrh na list.
2. **Otázky:** nejvýš 3 ověřovače za kolo, stejný návrh celé kolo. Kartu ověření pod děrné karty. Odpověď ✓ nebo ✗ zapiš (V nebo X). Kartu vrať před správný ověřovač.
3. **Odvození:** děrné karty zpět do podstavce, zapiš si, co víš, škrtej čísla.
4. **Konec kola:** odpočet do tří, palec nahoru (znám kód) nebo dolů.

**Odpověď ověřovače**

- ✓ = návrh splnil pravidlo ověřovače. ✗ = nesplnil.
- Odpověď se týká jen pravidla ověřovače, ne konkrétní číslice kódu.

**Konec hry**

- Palec nahoru: napiš kód tajně na list a ověř ho v tabulce řešení nebo v aplikaci.
- Vyhrává správný kód s nejméně otázkami. Při shodě všichni se shodou.
- Nikdo nemá správně: chybující vypadávají, ostatní hrají dál. Zbude jeden: vyhrává.

**Pozor na**

- ✓ neznamená, že číslice je přesně ta, kterou jsi dal.
- Návrh se v kole nemění. Na víc než tři ověřovače se v kole ptát nelze.
- Zapisuj každou odpověď: počet otázek rozhoduje, když kód najde víc hráčů.
- Ověřovač, jehož pravidlo už znáš, nepřinese nic nového.
- Návrh a ověřovače, na které se ptáš, vidí všichni. Odpovědi a poznámky ne.

## Připomenutí na 2 minuty

🗣️ „Hledáme tajný kód ze tří číslic 1 až 5, každá má barvu: modrá, žlutá, fialová. Hrajeme všichni naráz a každý sám.“

🗣️ „V kole složíš návrh ze tří děrných karet. Zeptáš se až tří ověřovačů, jestli návrh splňuje jejich pravidlo. Dostaneš ✓ nebo ✗ a zapíšeš si to.“

🗣️ „Z odpovědí odvozuješ, jaké pravidlo který ověřovač hlídá, a z pravidel kód. Na konci kola palec nahoru, kdo kód zná.“

🗣️ „Kdo má správný kód a zeptal se na nejméně otázek, vyhrává.“

🔴 Nejčastěji se zapomíná: ✓ neříká, že číslice je ta, kterou jsi dal. A návrh se v průběhu kola nemění.

🔴 Odpovědi musíš zapisovat vždy, rozhodují o vítězi při shodě.

## Slovníček pojmů

České vydání: názvy jsou pracovní překlad z pravidel, protože text českých pravidel nebyl při přípravě dostupný. ❓ \[ověřit podle české krabice\] Anglický název je tu jen jako vodítko.

| Pojem (pracovní překlad) | Anglicky | Co to je |
| --- | --- | --- |
| Ověřovač ❓ | Verifier | Postava Stroje (A až F), která hlídá jedno pravidlo. Není to hráč. |
| Karta kritérií ❓ | Criteria card | Leží před ověřovačem. Má ikonu, popis a seznam možných pravidel. |
| Karta ověření ❓ | Verification card | Vkládá se pod děrné karty, v otvoru je odpověď. |
| Děrná karta ❓ | Punch card | Karta s číslem 1 až 5 v jedné ze tří barev. |
| Deska Stroje ❓ | Machine tile | Deska uprostřed stolu s ověřovači. |
| Podstavec na děrné karty ❓ | Punch card support | Sestavuje se jednou a po hře se nerozebírá. |
| Pomůcka hráče ❓ | Player Aid | Slouží i jako zástěna. |
| Záznamový list ❓ | Note sheet | Sem zapisuješ návrhy, odpovědi (V, X) a vyřazené číslice. |
| Návrh ❓ | Proposal | Tři přeložené děrné karty, jimiž se ptáš. |
| Úloha ❓ | Problem | Sada karet kritérií a jeden správný kód. |
| Klasický, Extrémní, Noční můra ❓ | Classic, Extreme, Nightmare | Režimy her. |

## Přehled typů karet kritérií

Podle oficiálních pravidel (karty 1 až 48). Přesná čísla karet a znění ❓ \[ověřit podle české krabice\]. Ověřovač zná jen to, co karta uvádí, tedy třeba jen barvu a číslo.

| Karty | Co ověřovač kontroluje |
| --- | --- |
| 1 | Číslice jedné barvy je rovna 1, nebo větší než 1. |
| 2 až 4, 39 až 41 | Číslice jedné barvy je menší, rovna, nebo větší než určité číslo. |
| 5 až 7, 33 | Číslice jedné barvy je sudá, nebo lichá. |
| 8 až 10, 45 až 47 | Kolik je v kódu jedniček (nebo u 45 až 47 jedniček či trojek). |
| 11 až 13, 43 až 44, 48 | Porovnání dvou číslic kódu (jedna je menší, rovna, nebo větší než druhá). |
| 14 až 15, 34 až 35, 42 | Která barva má nejmenší číslo, nebo je číslice menší, případně větší než obě ostatní. |
| 16 až 17 | Víc sudých, nebo lichých číslic. Přesný počet sudých (0 až 3). |
| 18, 19, 23, 36, 37 až 38 | Součty: součet sudý či lichý, porovnání se 6, násobek 3, 4 nebo 5, součet dvou určitých barev je 4. |
| 20 až 21 | Opakování číslic: kolik jich je, nebo jestli je jedna dvojice. Ověřovač neví, která barva ani číslo. |
| 22, 24, 25 | Pořadí číslic: vzestupně, sestupně, nebo bez pořadí; po sobě jdoucí číslice. |
| 26 až 32 | Číslo je menší než 3 (26 a 27), rovno 1 (28 až 30), nebo větší než 1 (31 a 32). Hledáte, které barvy se pravidlo týká. |

Pozor: u karet jako „modrá je menší než 3“ platí, že ostatní barvy mohou být také menší než 3. Ověřovač to jen nehlídá.


---

# Záložka: Příprava

# Příprava

## Vydání a zdroje

- **Vydání:** české, MINDOK. Originál vydává Le Scorpion Masqué, autoři Yoann Levet a Fabien Gridel (podle pravidel). Jen základní hra, žádná rozšíření.
- **Obsah krabice** (podle popisu českého prodejce): deska Stroje s podstavcem na děrné karty, 45 děrných karet, 48 karet kritérií, 95 karet ověření, 50 záznamových listů, 4 pomůcky hráče a stírací fix.
- **Pravidla:** oficiální pravidla jsem přečetl celá v anglické verzi (5 stran, příručka s 20 úlohami). Česká pravidla MINDOKu (soubor TuringMachine\_pravidla\_web.pdf) existují, ale jejich text se nepodařilo otevřít, a proto jsou české pojmy v tomto výkladu pracovní překlad ❓ \[ověřit podle české krabice\].
- **Diskuse na BoardGameGeek:** web vrátil 403, proto „Pozor na“ níže vychází jen z pravidel ❓ \[ověřit na BGG\].

## Rozbor hry a zvolený styl výkladu

- **Těžiště:** ve hře nejsou body ani suroviny. Těžištěm je čtení odpovědí a karet kritérií: z ✓ a ✗ odvodit pravidlo ověřovače a z pravidel kód. Pravidla jsou krátká a velkou část zabírají vysvětlení karet a příklad hry.
- **Struktura:** jedno opakující se kolo ze čtyř kroků, nic se mezi koly nemění. Hráči hrají naráz a každý za sebe, takže je málo interakce a málo výjimek.
- **Otázka hry:** kolik otázek si dovolím. Limit tří ověřovačů za kolo a rozhodování o vítězi podle počtu otázek nutí hráče ptát se chytře.

**Zvolený styl výkladu:** celý výklad najednou a hned ukázkové kolo. Kolo je krátké a má jen pár pojmů (ověřovač, karta kritérií, karta ověření, děrná karta, návrh), takže se pravidla vejdou do pár minut. Nejvíc času patří ukázce, jak z ✓ a ✗ odvodit pravidlo. Mapu předem ani dělení na bloky hra nepotřebuje. Bloky v Taháku jsou jen orientace. Odhad: 5 až 8 minut výkladu plus první úloha.

## Pozor na

Vychází z oficiálních pravidel, kde jsou tyto body zdůrazněné (BGG nebylo dostupné, viz výše).

1. ✓ neznamená, že číslice je přesně ta z návrhu. Pravidla na to upozorňují u více karet. → Tahák, Blok 3.
2. Návrh se během kola nemění a ptají se nejvýše tři ověřovači. → Tahák, Blok 2.
3. Odpověď každé otázky se zapisuje povinně (V nebo X). Počet otázek rozhoduje, když kód najde víc hráčů. → Tahák, Blok 2.
4. Kartu ověření vraťte ihned před správný ověřovač. Pomáhá zaškrtnutí písmene na rubu karty.
5. U karet na opakování čísel (20 a 21) ověřovač neví, která barva se opakuje ani jaké je to číslo.
6. U karet typu „číslo je menší než 3“ nevylučuje ověřovač, že jiné barvy také mohou být menší než 3.
7. Kdo ukazuje palec nahoru a spletl se, vypadává, pokud nikdo nemá správně. → Tahák, Blok 4.

## Jádro hry

1. **O čem to je:** každý sám za sebe se ptáme Stroje, který zná tajný trojmístný kód.
2. **Jak se vyhrává:** najdu správný kód a zeptám se na nejméně otázek než ostatní se správným kódem.
3. **Kostra:** opakují se kola: návrh, otázky, odvození, konec kola. Hraje se naráz.
4. **Co dělám v tahu:** skládám návrh, ptám se až tří ověřovačů a z odpovědí odvozuji pravidla.
5. **Dilema:** každá otázka mi dává informaci, ale každá se mi počítá a při shodě rozhoduje méně otázek. Hledám otázky, které vyřadí co nejvíc možností.
6. **Konec:** kdo řekne, že zná kód, jde na ověření. Vyhrává správný kód s nejméně otázkami.
7. **Výjimky:** chybí-li vám děrná karta, počkejte, až ji soused vrátí. Handicap pro nováčky, režimy Extrémní a Noční můra.

## První hra a příprava

- **Tipy pro první hru (mé doporučení, ne z pravidel):** pro začátek vyberte úlohu se čtyřmi ověřovači, vysvětlete všechny karty kritérií nahlas a první kolo odehrajte společně nad jedním listem. Pravidla sama radí při startu číst a probrat všechny karty kritérií.
- **Co koučovat:** „✓ říká jen o pravidle, ne o číslici.“ A: „Neptáš se znovu na pravidlo, které už znáš.“
- **Handicap:** má-li někdo vyšší zkušenost, použijte jej podle pravidel.
- **Příprava vysvětlovatele:** přečtěte pravidla dvakrát, zahrajte první úlohu sám a vyzkoušejte ukázkové kolo ze záložky Učíme se hrát. Podívejte se na video Turing Machine – How To Play od Watch It Played (odkaz ve Zdrojích).
- **NotebookLM:** nahrajte česká i anglická pravidla (viz Zdroje) a po napsání výkladu položte dotaz „Je v tomto výkladu něco v rozporu s pravidly?“

## Zdroje

- [Oficiální pravidla, anglicky (PDF)](https://cdn.1j1ju.com/medias/a6/12/e4-turing-machine-rulebook.pdf), přečteno celé (stránka [1jour-1jeu](https://en.1jour-1jeu.com/riddle-game/2022-turing-machine))
- [Pravidla MINDOK, česky (PDF)](https://img.4kids.cz/Files/mindok-turing-machine/3889/31a259771c3753b4fcab30bf1c36c1.pdf), nalezeno, ale neotevřeno (při kontrole 6. 11. 2026 server img.4kids.cz neodpovídal a mindok.cz vrátil 403) ❓
- [Karta hry u prodejce 4kids](https://www.4kids.cz/mindok-turing-machine): vydání MINDOK, obsah krabice
- [Zatrolené hry](https://www.zatrolene-hry.cz/spolecenska-hra/turing-machine-13616/): vydání 2022, MINDOK a Le Scorpion Masqué
- [Video Watch It Played, Turing Machine – How To Play](https://www.youtube.com/watch?v=Aoj0RuZYXvI): video existuje (YouTube, kanál Watch It Played), obsah nebyl zhlédnut
- [turingmachine.info](https://turingmachine.info), online úlohy a Stroj
- BoardGameGeek (stránka hry) vrátilo 403, nepoužito.


---

# Záložka: Výklad

# Výklad: Turing Machine

Nov 6, 2026 · @Promens

**Značky:** 🗣️ říkáš nahlas · 🔴 častá chyba · 💡 napovídej · 🔧 jen pro tebe · ⏸️ pauza na otázky · ❓ ověřit v krabici

## Tahák na stůl

**Vydání:** české, MINDOK (originál Le Scorpion Masqué). Logická dedukce pro 1–4 hráče, asi 20 minut, od 14 let. Výklad je podle oficiálních pravidel; české pojmy jsou pracovní překlad ❓ \[ověřit podle české krabice\]. Všichni hrají současně a každý za sebe, takže vysvětlení je krátké a stačí ho říct najednou.

🔧 **Příprava stolu:** Deska Stroje doprostřed stolu. Podstavec na děrné karty (sestavený, po hře se nerozebírá) s děrnými kartami seřazenými podle barev a čísel. Vyberte úlohu z knížky, na první hru některou z úvodních. Karty kritérií položte před jejich ověřovače, karty ověření lícem dolů vedle nich a na rub každé karty ověření zaškrtněte její písmeno. Každý hráč dostane pomůcku hráče (zároveň slouží jako zástěna) a záznamový list. Na listu přeškrtněte sloupce ověřovačů, které úloha nepoužívá (E a F u úlohy se čtyřmi ověřovači).

### Blok 1 · O čem to je a jak se vyhrává

🗣️ „Hledáme tajný kód ze tří číslic. Každá číslice je od 1 do 5 a má svou barvu: modrá, žlutá a fialová. Kód nikdo z nás nezná. Zná ho Stroj, který má čtyři až šest ověřovačů. Každý ověřovač hlídá jedno jediné pravidlo, třeba ‚modré číslo je liché‘. A existuje právě jeden kód, který splní pravidla všech ověřovačů.“

🗣️ „Hrajeme všichni naráz, každý sám za sebe. Ptáte se Stroje, jestli váš návrh kódu splňuje pravidlo ověřovače. Odpověď je jen ✓ nebo ✗. Z odpovědí pak poznáte, jaká pravidla Stroj hlídá, a z pravidel dopočítáte kód. Vyhrává ten, kdo kód najde a zeptal se přitom na nejméně otázek.“

⏸️ Pauza na otázky.

### Blok 2 · Kolo: čtyři kroky

🗣️ „Každé kolo je stejné a hrajeme ho všichni současně.“

1. **Složíš návrh.** Vezmeš tři děrné karty různých barev, modrou, žlutou a fialovou, a přiložíš je přes sebe. Tím máš návrh kódu, třeba modrá 3, žlutá 4, fialová 1. Návrh zapíšeš na záznamový list.
2. **Ptáš se.** Za kolo se smíš zeptat nejvýše tří ověřovačů a celé kolo máš stejný návrh. Kartu ověření ověřovače vložíš pod děrné karty a zarovnáš ji podle značek v rozích. Děrné karty se přes sebe překryjí tak, že zbude jediný otvor, a v něm vidíš odpověď: ✓ (návrh pravidlo splnil), nebo ✗ (nesplnil). Odpověď hned zapíšeš na list (V nebo X) a kartu ověření vrátíš před správný ověřovač.
3. **Odvozuješ.** Děrné karty vrátíš do podstavce, projdeš odpovědi a zapíšeš si, co už víš. Škrtáš číslice, které nemohou být v kódu, a zkoušíš, jestli už kód znáš.
4. **Konec kola.** Až všichni dokončí otázky i úvahy, každý natáhne zavřenou pěst a společně počítáte do tří. Na tři ukážete palec: nahoru, když si myslíte, že kód znáte, jinak dolů. Nikdo nahoru? Začne další kolo. Někdo nahoru? Jde se na ověření kódu.

🔴 **Častá chyba:** měnit návrh uprostřed kola. Návrh platí celé kolo.

🔴 **Častá chyba:** nezapsat odpověď. Zápis V nebo X je povinný, protože podle počtu otázek se rozhoduje, kdo vyhrál.

💡 Napovídej: „Neptej se vždy na všechny tři. Ptej se jen na to, co ti pomůže vyřadit víc možností.“

⏸️ Pauza na otázky.

### Blok 3 · Jak číst odpověď

🗣️ „Ověřovač nemluví o kódu, mluví jen o svém pravidle. Na každé kartě kritérií je nahoře ikona, co ověřovač ví, pod ní popis, co kontroluje, a dole seznam možných pravidel. Jedno z nich platí. Vaším úkolem je zjistit které.“

🗣️ „Příklad. Ověřovač A kontroluje modré číslo a na kartě má dvě možnosti: ‚modré je rovno 1‘ a ‚modré je větší než 1‘. Dám návrh s modrou 3 a dostanu ✓. Víme tedy, že platí ‚větší než 1‘. A pozor: neznamená to, že modrá je 3! Znamená to jen, že je větší než 1.“

🔴 **Častá chyba:** brát ✓ jako potvrzení konkrétní číslice. ✓ říká jen, že návrh splnil pravidlo ověřovače, a pravidlo ověřovač zná, číslici ne.

🗣️ „Každý ověřovač je ve hře potřeba a žádný nezopakuje informaci jiného. Když tedy poznáte pravidlo A, nemá smysl se na A ptát znovu.“

### Blok 4 · Konec hry a ověření

- Kdo ukázal palec nahoru, napíše svůj kód tajně a čitelně na list.
- Každý z nich ho po jednom ověří v tabulce řešení v knížce, nebo v aplikaci.
- Je-li správně víc hráčů, vyhrává ten, kdo se ptal na **nejméně otázek**. Při shodě vyhrají všichni, kdo se shodli.
- Nemá-li správně nikdo, ti, kdo se spletli, vypadávají a ostatní hrají dál. Zůstane-li jediný hráč, vyhrává automaticky.
- Správnost kódu lze dokázat tak, že ho složíte z děrných karet a ověříte u všech ověřovačů.
- Po hře smažte zaškrtnutí (V) z rubu karet ověření.

🗣️ Shrnutí za 15 s: „Skládáš návrh ze tří barevných číslic, ptáš se až tří ověřovačů, z ✓ a ✗ odvozuješ jejich pravidla a z pravidel kód. Kdo ho najde s nejméně otázkami, vyhrál.“

### Co vysvětlit až během hry

- Veřejné a tajné: návrh i to, na které ověřovače se ptáte, vidí všichni. Odpovědi a poznámky jsou tajné.
- Chybí vám děrná karta, protože ji má soused? Počkejte, až ji vrátí.
- Ověřovač je vymyšlená postava, ne hráč.
- Při velkém rozdílu zkušeností doporučují pravidla handicap (viz níže).
- Rozbor významu jednotlivých karet kritérií najdete v Pro hráče a v pravidlech v části s vysvětlením karet.

## Varianty z pravidel

Základní hra je podle pravidel režim Klasický. Další způsoby hraní jsou jen krátce tady, pro první hru je nepotřebujete ❓ \[názvy režimů ověřit podle české krabice\].

- **Extrémní:** před každým ověřovačem leží dvě karty kritérií, ale platné je jen jedno z kritérií uvedených na těchto dvou kartách. Úloh pro tento režim je mnoho online na turingmachine.info.
- **Noční můra:** nevíte, který ověřovač patří ke které kartě ověření.
- **Handicap:** zkušený hráč proti nováčkům vyplní v prvním kole (a jen v něm) jedno políčko odpovědi, je-li rozdíl malý, nebo dvě, je-li větší. Políčka se počítají jako otázky, které už položil, takže se v prvním kole zeptá méně.
- **Sólo a družstevní hra:** vyberte úlohu na turingmachine.info a vyřešte ji sami nebo společně na jeden záznamový list, s co nejmenším počtem kol a otázek. Platí limit tří otázek za kolo. Po nalezení kódu kliknete na MACHINE, kde uvidíte, kolik kol a otázek potřebovala umělá inteligence. Vyhráváte, když jste stejně dobrý nebo lepší než Stroj.

## Kolo v jednom obrázku

[[obrázek turing-machine-2: kolo hry · 4 kroky, 1 rozhodnutí]]

Kolo se hraje naráz a bez změny návrhu. Hra končí, až někdo ukáže palec nahoru a následuje ověření kódu.
