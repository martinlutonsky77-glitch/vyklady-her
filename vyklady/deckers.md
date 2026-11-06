<!-- Převzato z Claude Docs (https://claude.ai/artifact/SF7txUQz8SxcrYyBUUSd1M), export 6. 11. 2026 -->


---

# Záložka: Pro hráče

# Pro hráče

## Česká pomocná karta

| Akce | Barva | Cena a podmínka |
| --- | --- | --- |
| Vylepšit | libovolná | cena karty, obětuj zahranou kartu |
| Nahrát | stejná ×3 | 1 program; pole bez jisker a strážce |
| Instalovat | 1 + 3 programy | 1 instalace; pole bez kusů SMC |
| Pohyb | modrá | 1 příkaz = 1 krok; modré cesty zdarma |
| Posun | zelená | 1 příkaz = posuň 1 kus |
| Úprava | žlutá + 1 | víc programů než jisker; program + jiskra → program |
| Infekce | červená | červená vs. černá kostka |

- **Cyklus:** Průzkum → 3 tahy → Fáze SMC (útok, cíl, pohyb jisker) → Obnova.
- **Tah:** začátek → jiskry → akce → konec (1 kartu nech) → dober 5 → doplň vylepšení.
- **3 příkazy = 1 fialový** (libovolná barva).
- **Jiskry:** 3 na poli = strážce; jiskra na strážce = exploze.
- **Limity pole:** 3 programy barvy, 1 fialový, 1 instalace.
- **Výhra:** zlatý cíl. **Prohra:** chybí jiskra nebo strážce v zásobě.
- 🔴 **Častá chyba:** přeplacené příkazy propadají; jiskry vždy po jedné.

## Připomenutí na 2 minuty

1. Vyhraješ splněním zlatého cíle v posledním cyklu.
2. Každý cyklus máš tři tahy, pak tě napadne superpočítač.
3. Na začátku tahu se rodí jiskry, pak platíš akce symboly z karet.
4. Barvy jsou akce: modrá pohyb, zelená posun, žlutá úprava, červená infekce.
5. Tři jiskry na poli dělají strážce, ten všechno smaže.
6. Když v zásobě dojdou jiskry nebo strážci, prohráváš.

🔴 **Nejčastěji se zapomíná:**

- Jiskry se pokládají po jedné – každá může spustit strážce nebo explozi.
- Na pole s kusem SMC nelze nahrávat ani instalovat.
- Na konci tahu si jednu kartu nech (ne v posledním tahu cyklu).


---

# Záložka: Příprava

# Příprava

## Vydání a zdroje

- **Hra:** Deckers, autor Richard Wilkins, ilustrace Lukas Siegmon. České vydání Fox in the Box (originál Deep Print Games).
- **Hráči:** 1–4 kooperativně, zde sólo. Hra 60–90 minut, náročnost 3,8 z 5.
- **Krabice:** 5 serverů, 9 karet SMC, 5 profilů deckerů, 129 karet příkazů, 40 karet cílů, 7 karet paketů, 5 karet rozložení serverů, žetony programů, jisker a instalací, 11 figurek, 3 kostky.
- **Rozšíření:** nemáš. Existuje Duplicity (2026) – mutantní SMC, deckeři Aki a River, 2 mise.
- **NotebookLM:** nemáš – návrh obsahu je v části První hra a příprava.
- **Zdroj pravidel:** shrnutí anglických pravidel (RulesPal) a recenze. ❓ České názvy jsou překlad, porovnej s českými pravidly **\[ověřit\]**.

## Rozbor a styl

**Zvolený styl: cíl a prohra, cyklus ve čtyřech fázích, tah deckera, akce jako menu podle barev, superpočítač nakonec. Čtyři bloky.**

- Hra je těžká a má hodně drobných pravidel. Kostra cyklu a tahu je pevná opora.
- Akce jsou přirozené menu: barva příkazu = druh akce. Stačí tabulka.
- Superpočítač (jiskry, strážce, exploze) je hlavní zdroj prohry, proto má vlastní blok.
- Instalace, duch, fialové programy a varianty nech na „Až během hry“.
- Odhad: výklad 10–12 minut, první hra s Alpha-Moby 90–120 minut.

## Časté chyby a nejasnosti

1. **Jiskry po jedné:** každá položená jiskra může hned vytvořit strážce nebo spustit explozi ([RulesPal](https://rulespal.com/deckers/rulebook)).
2. **Nahrát a Instalovat** nejdou na pole s kusem SMC (výjimkou je nahrávání vylepšené červenou nebo žlutou instalací) ([RulesPal](https://rulespal.com/deckers/rulebook)).
3. **Příkazy se nešetří** mezi akcemi. Přeplatek propadne ([RulesPal](https://rulespal.com/deckers/rulebook)).
4. **Oblast vylepšení** se doplňuje jen v kroku Doplnění a v Obnově, ne hned po nákupu ([RulesPal](https://rulespal.com/deckers/rulebook)).
5. **Limity pole:** 3 programy každé základní barvy, 1 fialový, 1 instalace; přebytek do zásoby ([RulesPal](https://rulespal.com/deckers/rulebook)).
6. **První tah hry** prvního aktivního deckera přeskakuje zrození jisker ([RulesPal](https://rulespal.com/deckers/rulebook)).
7. **Měděné a stříbrné cíle** nejsou povinné, ale výsledek se vždy vyhodnotí. Vol cesty, kde stříbro pomůže ke zlatu ([Opinionated Gamers](https://opinionatedgamers.com/2026/03/27/dale-yu-review-of-deckers/)).
8. **Duch:** „tvé pole“ je pole ducha, „tvůj avatar“ je pořád figurka ([RulesPal](https://rulespal.com/deckers/rulebook)).

## Jádro hry

1. **O čem to je:** kooperativní kyberpunková hra. Decker nahrává programy do sítě a bojuje s obranou superpočítače.
2. **Jak se vyhrává a prohrává:** výhra = zlatý cíl; prohra = chybějící jiskra nebo strážce v zásobě, nebo nesplněný zlatý cíl.
3. **Kostra:** cykly; v každém průzkum, 3 tahy, fáze SMC, obnova.
4. **Tvůj tah:** jiskry se zrodí, pak platíš akce symboly z karet, na konci si jednu kartu necháš.
5. **Dilema:** naplno čistit síť od jisker, nebo budovat programy a instalace pro cíl? A kupovat vylepšení, když tím vypadneš z tempa?
6. **Konec:** vyhodnocení zlatého cíle v posledním cyklu.
7. **Až přijde řada:** instalace a jejich vylepšení akcí, duch, fialové programy, klíčová slova karet, varianty.

## První hra a příprava

**Tipy pro první hru**

- Superpočítač Alpha-Moby, bez variant.
- 💡 Napovídej: „Než zahraješ kartu, podívej se, kam půjdou jiskry ve fázi SMC – šipky jsou na kartě cíle.“
- 💡 Napovídej: „Hlídej pole se dvěma jiskrami. Třetí z nich udělá strážce.“
- 💡 Napovídej: „Vylepšení kupuj, abys doplnil chybějící barvy, i když balíček trochu rozházíš.“
- 💡 Napovídej: „Nech si kartu barvy, kterou příště potřebuješ nejvíc.“

🔧 **Příprava vysvětlovače**

- Přečti kapitoly: příprava, cyklus, tah, akce, kusy SMC, fáze SMC, varianty jen zběžně.
- Odehraj nanečisto jeden cyklus, až po první vyhodnocení cíle.
- ❓ Video: anglické „how to play“ Deckers **\[ověřit\]**.
- Návrh sešitu NotebookLM: česká pravidla, anglická pravidla, recenze Opinionated Gamers.

## Zdroje

- [RulesPal: Deckers – pravidla](https://rulespal.com/deckers/rulebook)
- [Opinionated Gamers: Dale Yu, recenze Deckers](https://opinionatedgamers.com/2026/03/27/dale-yu-review-of-deckers/)
- [Two Average Gamers: Deckers](https://savepoint.twoaveragegamers.com/tabletop/tt-deckers)
- [Hras.cz: Deckers (CZ)](https://www.hras.cz/en/strategicke-hry/deckers--cz/)
- [Frogames: Deckers Duplicity](https://frogames.it/en/collections/preordine/products/scheda-deckers-duplicity)


---

# Záložka: Učíme se hrát

# Učíme se hrát

## Než začneš

Tahle záložka tě provede prvním cyklem a začátkem druhého. Všechno ostatní je v záložce Výklad.

- Postav stůl podle bodu **0. Příprava stolu** v záložce Výklad. Superpočítač Alpha-Moby.
- Před sebou máš: síť z 5 serverů (pole 1–6), svou figurku na poli 6 domovského serveru s jedním programem, 5 karet v ruce, 4 karty v oblasti vylepšení.
- Prohlédni si kartu: symboly příkazů v barvách a klíčové slovo. Buď využiješ symboly, nebo slovo.
- Prohlédni si kartu SMC: kolik jisker se rodí na úrovni Měď, Stříbro a Zlato.
- ❓ Poznámka pro sólo: počet deckerů si ověř v českých pravidlech **\[ověřit\]**. Návod níže počítá s jedním.

## Obrázkový průvodce tahem

[[obrázek deckers-1: tah deckera: karta, jiskry, nahrát, infekce, strážce, konec tahu]]

Prohlédni si ho před prvním tahem. Obrázky 2 a 5 jsou hrozba, 3 a 4 tvoje odpověď.

## Cyklus 1 krok za krokem

1. **Průzkum.** Přečti kartu SMC a vrchní (měděnou) kartu cíle. Co chce cíl? Kam ukazují šipky pohybu jisker?
2. **Tah 1 – začátek a jiskry.** V prvním tahu hry se jiskry nerodí. Rovnou na akce.
3. **Tah 1 – akce.** Najdi v ruce tři symboly stejné barvy a **Nahraj** program na své pole. Zbylé modré symboly použij na **Pohyb** směrem k cíli.
4. **Tah 1 – konec.** Jednu kartu si nech, zbytek odhoď. Dober 5. Doplň oblast vylepšení.
5. **Tah 2 – jiskry.** Podle karty SMC hoď kostkou serveru a černou kostkou a polož jiskru. Po jedné! Kde jsou tři, vznikne strážce.
6. **Tah 2 – akce.** Stojíš u jiskry? Zkus **Infekci** červenou kartou: hoď červenou proti černé. Nebo ji **Posuň** zeleným symbolem pryč ze svého pole.
7. **Tah 2 – vylepšení.** Máš dost symbolů? Kup kartu z oblasti vylepšení a obětuj jednu zahranou kartu.
8. **Tah 3.** Pracuj na cíli. V posledním tahu cyklu si žádnou kartu nenecháváš.
9. **Fáze SMC.** Útok (červené programy u jisker svedou infekci, jiskry mažou programy na svém poli), vyhodnocení cíle, pohyb jisker podle šipek.
10. **Obnova.** Odhoď cíl, zamíchej odhazovací balíček, dober 5.

Kontrola po cyklu 1: kolik jisker je v zásobě? Pokud méně než polovina, v cyklu 2 čisti víc.

## Cyklus 2: co je nového

- Stříbrný cíl. Před prvním tahem si ujasni, jestli pomůže ke zlatému.
- Zkus **Instalovat**: 3 programy stejné barvy na jednom poli bez jisker + 1 příkaz = instalace. Instalace vylepší akci své barvy.
- Modré programy tvoří cesty: pohyb po nich je zdarma.
- Hlídej pole se strážcem: jiskra, která na něj vstoupí, vybuchne do všech sousedních polí.

Kontrola po cyklu 2: máš aspoň jednu instalaci a víš, kde budeš plnit zlatý cíl? Jsi v dobrém tempu.

## Co dál

- Hraj dál podle české pomocné karty v záložce Pro hráče.
- Duch, fialové programy a klíčová slova dohledej, až se objeví (Výklad, Až během hry).
- Po výhře nad Alpha-Moby zkus další SMC, pak varianty (pakety, rozdělené servery).
- Nezapomeň: jiskry po jedné, přeplacené příkazy propadají, jednu kartu si na konci tahu nech.


---

# Záložka: Výklad

# Výklad: Deckers

Oct 21, 2026 · @Promens

## Tahák na stůl

Výklad na 10–12 minut pro sólo hru. Styl: nejdřív cíl a prohra, pak cyklus ve čtyřech fázích, tah deckera a akce jako menu podle barev. Čtyři bloky, oslovuješ sám sebe (ty). Hra je těžká (3,8 z 5), počítej s pomalou první hrou. ❓ České názvy porovnej s krabicí **\[ověřit\]**.

**Značky:** 🗣️ říkáš nahlas · 🔴 častá chyba · 💡 napovídej · 🔧 jen pro tebe · ⏸️ pauza na otázky · ❓ ověřit v krabici

🔧 **0. Příprava stolu**

- Superpočítač (SMC): na první hru Alpha-Moby. Vedle něj karta Pořadí hry (Sequence of Play).
- Balíček cílů (objective) podle karty SMC: nahoře Měď (Copper), uprostřed Stříbro (Silver), dole Zlato (Gold).
- Síť: zamíchej 5 serverů a pokládej je postupně. Každý nový se musí dotýkat aspoň dvou polí položených serverů.
- Decker: profil, 15 karet příkazů své barvy (zamíchat), figurka na vstupní pole (pole 6 domovského serveru) s jedním programem své startovní barvy, pomocná karta Příkazy a akce.
- Příprava podle karty SMC. Modré programy na každý server bez figurky. Oblast vylepšení: 4 odkryté pokročilé karty. Dober 5 karet.

**1. Úvod**

🗣️ „Jsi decker, hacker v síti, kterou hlídá superpočítač. Nahráváš své programy, stavíš z nich instalace a čistíš síť od jisker – obranných programů superpočítače. Každý cyklus ti superpočítač zadá cíl. Splň ten poslední, zlatý, a vyhraješ.“

**2. Cíl a kostra (blok 1)**

- **Výhra:** splníš cíl poslední, zlaté karty cíle. Měděné a stříbrné cíle jsou nepovinné, pokud SMC neříká jinak, ale jejich úspěch nebo neúspěch má následky.
- **Prohra:** máš položit jiskru nebo strážce a v zásobě žádný není. Nebo nesplníš zlatý cíl.
- Hra trvá několik **cyklů** (obvykle 3–5). Cyklus: **Průzkum (Intel) → Příkazy (Command) → Fáze SMC → Obnova (Refresh).**
- V příkazové fázi máš **3 tahy**.

⏸️ *Pauza na otázky.*

**3. Tah deckera (blok 2)**

- **a. Začátek tahu:** efekty „Na začátku tahu“.
- **b. Zrození jisker (Spawn):** podle úrovně zabezpečení na kartě SMC pokládej jiskry **po jedné**. Server určí kostka serveru, pole černá kostka. Bílá postavička = server, kde stojíš. V úplně prvním tahu hry se zrození přeskakuje.
- **c. Akce:** hraješ karty jako sady symbolů a platíš jimi akce. Jednu akci po druhé, kartu nejde rozdělit mezi dvě akce.
- **d. Konec tahu:** odhoď ruku, **jednu kartu si smíš nechat** (ne v posledním tahu cyklu).
- **e. Dobrání:** dober 5 karet. Prázdný balíček = v tomto cyklu už nehraješ.
- **f. Doplnění:** doplň prázdná místa v oblasti vylepšení.
- Karta se hraje buď za symboly příkazů, nebo za své klíčové slovo: **Provést (Execute)** – odhoď ji pro efekt; **Odhalit (Reveal)** – ukaž, použij, vrať do ruky (jednou za tah); **Přerušit (Interrupt)** – hraje se ve vlastní chvíli.
- 3 příkazy libovolné barvy = 1 fialový příkaz, který platí jako kterákoli barva.
- 🔴 **Častá chyba:** přeplacené příkazy na konci akce propadají. Nešetří se.

⏸️ *Pauza na otázky.*

**4. Akce jako menu (blok 3)**

- **Vylepšit (Upgrade):** zaplať cenu karty z oblasti vylepšení, vezmi ji do ruky a obětuj jednu zahranou kartu.
- **Nahrát (Upload):** 3 příkazy stejné barvy = 1 program té barvy na tvé pole. Na poli nesmí být jiskra ani strážce.
- **Instalovat (Install):** 1 příkaz a 3 programy stejné barvy z tvého pole → 1 instalace. Na poli nesmí být kus SMC.
- **Pohyb (Move, modrá):** každý modrý příkaz = 1 krok. Cesty z modrých programů jsou zdarma. Neseš s sebou až 3 programy jedné barvy.
- **Posun (Shift, zelená):** každý zelený příkaz posune jeden program nebo jiskru z tvého pole na sousední.
- **Úprava (Modify, žlutá):** podmínka: na poli je víc programů než jisker. Za 1 žlutý + 1 libovolný odstraň program a jiskru a polož program zaplacené barvy.
- **Infekce (Infect, červená):** podmínka: na poli je jiskra nebo strážce. Hoď červenou (útok) a černou (odpor) kostkou, uprav podle pravidel. Vyšší útok smaže všechny kusy SMC z pole, jinak jen jednu jiskru.
- Instalace své barvy akci vylepšují (např. modrá umožní teleport, zelená „ducha“ na jiném poli serveru).

⏸️ *Pauza na otázky.*

**5. Superpočítač (blok 4)**

- **Jiskry (Sparks)** blokují nahrávání a instalaci a útočí. Bílé navíc zajmou program.
- **Třetí jiskra na poli se promění ve strážce (Guardian)** a smaže z pole všechno ostatní.
- **Jiskra vstoupí na pole strážce → exploze:** zmizí a na každé sousední pole se položí jiskra stejné barvy. Řetězí se.
- **Fáze SMC:** 1) útok SMC – na poli s červeným programem a kusem SMC proběhne automatická infekce, pak strážci smažou programy i instalace, jiskry programy; 2) vyhodnocení cíle – otoč na ÚSPĚCH nebo NEÚSPĚCH; 3) pohyb jisker podle šipek na kartě cíle.
- **Obnova:** odhoď cíl, smíš obnovit oblast vylepšení, zamíchej odhazovací balíček (15 karet) a dober 5.

⏸️ *Pauza na otázky.*

**Ukázkový tah:**

🗣️ „Zrození: hodíš server 3, pole 4 – jiskra tam. Akce: dvě modré karty – Pohyb o 2 pole na server 3. Červená karta – Infekce: hodíš 4 proti 2, jiskra zmizí. Tři žluté symboly – Nahrát žlutý program. Konec tahu: necháš si jednu kartu, zbytek odhodíš a dobereš 5.“

**Konec hry**

- Po vyhodnocení posledního (zlatého) cíle hra končí podle rubu karty.
- Kdykoli chybí jiskra nebo strážce v zásobě = okamžitá prohra.

**Shrnutí (20 s)**

🗣️ „Splň zlatý cíl. Cyklus: průzkum, tři tahy, fáze SMC, obnova. V tahu nejdřív jiskry, pak akce za karty. Tři jiskry dělají strážce, jiskra do strážce dělá explozi. Nezapomeň: jiskry pokládej po jedné, přeplacené příkazy propadají a jednu kartu si na konci tahu smíš nechat. Otázky?“

**Až během hry**

- Limity pole: 3 programy každé základní barvy, 1 fialový, 1 instalace. Přebytek jde do zásoby.
- Fialové programy do hry dává jen Rupert Stanz.
- Bílý strážce nepustí na pole figurku (ducha ano).
- „Tvé pole“ při duchovi znamená pole ducha, „tvůj avatar“ pořád figurku.
- Oblast vylepšení se doplňuje jen v kroku Doplnění a v Obnově.
- Varianty: Rozdělené servery, Vylepšený SMC (Matčin duch), Pakety – až po několika hrách.

**Sólo**

Hraješ podle běžných pravidel – tři tahy za cyklus, jeden profil deckera. ❓ Zda sólo pravidla doporučují ovládat dva deckery, ověř v českých pravidlech **\[ověřit\]**. Začni s Alpha-Moby a bez variant.

**Malý slovníček:**

- Decker = decker (hacker), SMC = superpočítač
- Cycle = cyklus, Objective = cíl (Měď, Stříbro, Zlato)
- Command card = karta příkazů, Command = příkaz
- Program = program, Installation = instalace
- Spark = jiskra, Guardian = strážce
- Upgrade area = oblast vylepšení
- Ghost = duch, Packet = paket

## Obrázek kola a ekonomiky

[[obrázek deckers-2: cyklus ve 4 fázích, tah deckera a jiskry]]

Karty jsou platidlo: symboly za akce, přeplatek propadá. Jiskry jsou časomíra: čím víc jich je v síti, tím blíž je prohra.
