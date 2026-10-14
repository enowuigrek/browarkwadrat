# Etykiety

Ustalenia z projektowania etykiety piwa. Układ jest stały, kolor jest zmienną.

## Układ

Wszystko wyśrodkowane w poziomie, w kolejności od góry:

1. **Czarny szyld** przy górnej krawędzi, bez tekstu, czysty element graficzny
2. **Metka** zwisająca z szyldu, wyśrodkowana, ze znakiem kwadratu (patrz komponent Metka)
3. **Blok nazwy** wyśrodkowany w pionie na całej etykiecie: styl pisany nad nazwą
4. **Wiersz parametrów** nad stopką: `13,0 °Blg · 5,2% alc. · 23 IBU`
5. **Czarna stopka** przy dolnej krawędzi: numer warki po lewej, pojemność po prawej

Blok nazwy jest **wyśrodkowany w pionie w tym, co zostaje między metką a wierszem
parametrów**, a nie w całej etykiecie liczonej od krawędzi. Metka zajmuje górę, więc
centrowanie „od krawędzi do krawędzi" wypycha nazwę za nisko. Wiersz parametrów ma mieć
nad stopką **oddech co najmniej `space-6`**; dociśnięty do czarnego paska wygląda, jakby
się po nim zsunął.

Szyld i stopka idą na całą szerokość. Wiersz parametrów jest cofnięty na margines
treści, nie wychodzi na krawędzie, bo dzieli **ten blok**, a nie całą etykietę
(etykieta będzie szersza, z kodem QR, logo i opisem w dalszej części).

## Wiersz parametrów

Dwie poziome kreski `rule-thin` (1,5 px), pionowe separatory **tej samej grubości**, wyraźnie krótsze
od odstępu między kreskami i nigdy ich nie dotykające. Dotknięcie zamienia to w ramkę
tabeli i zabija lekkość.

Bez podpisów („Ekstrakt", „Alkohol"), bo jednostka jest podpisem. Bez ikon: przy 10 lub 11 px
kłos i szyszka chmielu zamieniają się w plamki, a przy okazji dokładają do systemu
kształty organiczne, których nigdzie indziej nie ma.

Barwa (SRM) **nie trafia na etykietę**, bo to informacja dla piwowara, nie dla pijącego.

## Typografia

| element | krój | uwagi |
| --- | --- | --- |
| styl piwa | `script-style` (Lobster 30 px) | mały i lekki względem nazwy, to dopisek, nie drugi nagłówek |
| nazwa | Alfa Slab One, ok. 37 do 42 px | jedna linia, jeśli nazwa na to pozwala |
| parametry | Archivo 500, 10 lub 11 px | `tabular-nums` |
| numer warki | mono, 10 lub 11 px | w stopce |
| pojemność | Archivo 500, wersaliki, światło 0,18 em | w stopce; inny krój niż numer, żeby dwie liczby w jednym pasku nie wyglądały tak samo |

**Lobster w nazwie nie działa**, bo ma tę samą grubość kreski co Alfa Slab One i zamiast
przełamania powstają dwa wiersze tej samej masy. W roli podpisu działa świetnie właśnie
dlatego, że jest mały.

## Cień nazwy

Nadruk nie trafiony w rejestr: token `shadow-print-name`, czyli
`1px 1px 0 <biel>, 4px 4px 0 <akcent>`, gdzie akcent bierze się z tabeli barw danego
piwa, nie z tokenów systemowych. W dół i w prawo,
czyli **ten sam kierunek światła co cień metki**. Dzięki temu oba czytają się jako jedna
decyzja, a nie dwa osobne triki.

Biała warstwa pośrodku nie jest ozdobą: przy nasyconym tle to ona odcina czerń od koloru.
Bez niej obie warstwy zlewają się w plamę.

Na ciemnym tle, gdzie nazwa sama jest jasna, cień jest **tylko ciemny**, bez bieli.

Obwódka (`-webkit-text-stroke`) jest mocniejszym narzędziem niż cień, bo uniezależnia
napis od tła. Ale musiałaby wtedy być **regułą na wszystkich etykietach**, także tam,
gdzie jest zbędna, bo inaczej jasne i ciemne przestaną być jedną serią. Na razie: bez
obwódki.

## Kolor

**Tło i akcent zawsze z jednej rodziny.** Czerń i biel są stałe: metka, szyld, stopka
i kreski nie zmieniają koloru nigdy.

**Kolor idzie za barwą piwa, nie za nastrojem.** Jasne piwa dostają słomę i musztardę,
bursztynowe terakotę, ciemne rdzę i brąz, mocno chmielowe zieleń. Dzięki temu półka
układa się w skalę barw, a kolor niesie informację zamiast być dekoracją. Mięta, malina
i lawenda wyglądają ładnie, ale kłamią o zawartości i ustawiają złe oczekiwanie przed
pierwszym łykiem.

**Wyjątek: style wydziwnione.** Piwo, które samo jest eksperymentem i nie da się
przypisać do klasycznej rodziny, może dostać kolor spoza skali, ostry róż, cokolwiek.
Wtedy dziwny kolor **też niesie informację**: mówi „to nie jest klasyk". Dopóki jest
wyjątkiem, działa. Jeśli dziwnych kolorów zrobi się kilka, przestają cokolwiek znaczyć
i cała reguła się rozpada.

## Granica dla ciemnych teł

Tło może schodzić tylko tak nisko, żeby **czarny szyld i stopka nadal były widoczne jako
ciemniejsze od tła**. Poniżej tego progu rama znika i trzeba zmieniać trzy inne reguły
naraz. To już nie wariant kolorystyczny, tylko osobny system.

Metka radzi sobie sama nawet na ciemnym i **nie potrzebuje jasnej obwódki**, bo ta wygląda
jak błąd. Jeśli coś wymaga ratunku na ciemnym tle, to szyld i stopka, nie metka.

## Faktura

Ziarno papieru jako delikatna nakładka. **Im mocniejsze tło, tym bardziej jej potrzeba**.
Na kremowym jest ledwo widoczna, na nasyconym zbija plastikowość płaskiego koloru.

Siatka kwadratów ze strony jest motywem Kwadratu, ale pod nazwą piwa konkuruje z liniami
parametrów. Jej miejsce to tło sekcji na stronie albo wnętrze czarnej metki, nie etykieta.

Zdzieranie napisu odpuszczone: przy tym rozmiarze efekt jest niewidoczny, a mocny
gryzłby się z geometrią znaku. Prawdziwa faktura przyjdzie z papieru niepowlekanego.

## Do sprawdzenia na wydruku

Ocena ciemnych teł z ekranu jest niepewna. Na papierze niepowlekanym ciemne pola
**tracą kontrast bardziej niż na ekranie**, bo farba wsiąka, więc różnica między czernią
szyldu a ciemnym tłem zmniejszy się jeszcze bardziej. Przed wyborem palety serii warto
wydrukować arkusz próbny na docelowym papierze: po jednej etykiecie w każdym kolorze.
To ta sama zasada co przy warzeniu. Zmierzyć zamiast zakładać.

## Tkaniny

Skoro szew między pasami jest szyciem, to tło etykiety może być materiałem. **Każde piwo
dostaje jedną tkaninę** i to ona, obok barwy, odróżnia butelki na półce, kiedy stoją obok
siebie i mają ten sam układ.

Wszystkie są liczone w przeglądarce, bez żadnego pliku graficznego: splot robią dwa albo
trzy `repeating-linear-gradient` lub mały wzór SVG, a całość idzie przez filtr
`feDisplacementMap`, który lekko wykrzywia nitki. Bez tego wykrzywienia wzór wygląda jak
siatka z Excela, a nie jak tkanina.

**Splot ma być widoczny dopiero z bliska.** Pierwsza wersja była dwa razy grubsza
i czytała się jak wzór na tapecie. Teraz nitka ma 1 px, powtórzenie od 3 do 9 px, a krycie
od 0,05 do 0,13. Przy takich wartościach z odległości ręki widać fakturę, a z półki samą
barwę i nazwę. Wykrzywienie nitek: `feDisplacementMap` ze skalą 2, przy większej cienka
nitka się rwie.

| tkanina | jak zrobiona | charakter |
| --- | --- | --- |
| płótno | dwa prostopadłe gradienty, nitka 1 px co 3 px, 0,08 | spokojne, lniane, domowe |
| denim | gradient 60 stopni, nitka 1 px co 4 px, 0,09, plus poziome prążki 0,05 | robocze, skośny splot |
| sztruks | pionowy rowek 1 px co 9 px, 0,07, z jasną krawędzią 0,05 | retro, kierunkowe |
| jodełka | wzór SVG 12 na 12, kreska 0,8 px, 0,13 | tradycyjne, krawieckie |
| plecionka | szachownica 4 px, 0,06 | neutralne, drobne |
| dzianina | wzór SVG 10 na 8, kreska 0,8 px, 0,11 | miękkie, swetrowe |

Podgląd wszystkich sześciu na barwach piw leży w `design-system/tkaniny-podglad.html`,
razem z gotowym CSS do skopiowania.

Przypisanie na teraz, do zmiany w każdej chwili:

| warka | piwo | tkanina | dlaczego |
| --- | --- | --- | --- |
| 93 | Domówka | płótno | piwo codzienne, nic nie udaje |
| 94 | Wolnosypane | denim | robocze, bez ceregieli |
| 95 | 50 metrów dalej jest taniej | sztruks | żart z lat osiemdziesiątych |
| 97 | Nowa Stara Szkoła | jodełka | styl historyczny w nowym kroju |

## Zasady tkanin

1. **Jedna tkanina na piwo i nie zmienia się przy dodruku.** Tkanina jest częścią
   tożsamości warki, tak samo jak barwa i numer.
2. **Krycie splotu trzyma się nisko**, od 0,05 do 0,13. Wyżej wzór zaczyna konkurować
   z nazwą, a nazwa ma wygrywać zawsze.
3. **Nitki są ciemne, nie jasne.** Jasne prążki na barwie piwa robią wrażenie kurzu.
   Wyjątek to sztruks, gdzie cienka jasna krawędź daje wrażenie rowka.
4. **Tkanina leży pod wszystkim** i nie łapie kliknięć. Nad nią idzie ziarno
   (`grain-opacity` 0,12, tryb `multiply`), a dopiero potem treść.
5. **Nie mieszamy dwóch tkanin na jednej etykiecie** i nie obracamy wzoru pod nazwą.
6. **Do druku trzeba to zrobić od nowa.** Wzór liczony w przeglądarce ma rozdzielczość
   ekranu, a przy 300 dpi nitka 1 px znika. Przed drukiem każda tkanina musi zostać
   wygenerowana w rozdzielczości druku i wstawiona jako obraz.
