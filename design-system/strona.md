# Strona

Trzy powierzchnie, jedna konstrukcja. Wspólne są: czarny szyld, metka ze znakiem,
typografia, włosowe kreski i zerowe promienie. Różni je tło.

| powierzchnia | tło | metka |
| --- | --- | --- |
| landing / lista piw | jasne (`surface-000`) | z boku, odstęp od lewej = jej szerokość |
| podstrona piwa pod QR | **kolor tego piwa** | na środku, jak na etykiecie |
| narzędzie piwowarskie | jasne, neutralne | z boku |

Podstrona piwa bierze kolor swojej etykiety, bo jest jej przedłużeniem: ktoś skanuje kod
z butelki i dostaje to samo dalej. Narzędzie zostaje neutralne, bo służy wszystkim warkom
naraz, nie ma „swojego" koloru, a kolor jest tam potrzebny danym (stany, skala słodowa).

## Pasy

Długą stronę dzielimy na **pasy na pełną szerokość**, każdy na innym gruncie. Na
podstronie piwa kolejność to: kolor piwa (nazwa, parametry, opis) → biel (skład) → czerń
(formularz) → czarna stopka. Rytm koloru, bieli i czerni robi podział bez dokładania ramek
i linii.

Pas zmienia grunt, a nie zasady: kreski, odstępy i typografia zostają te same.

## Przyciski

Przycisk to prostokąt bez promienia z **nadrukiem nie trafionym w rejestr**, tym samym,
co pod nazwą piwa.

Cały ten nadruk siedzi w jednym tokenie: **`shadow-print`**. Jego wariant jasny to
`2px 2px 0 <biel>, 6px 6px 0 <ink>`, ciemny `2px 2px 0 <ink>, 6px 6px 0 <brand-strong>`.
Czerń na czerni jest niewidoczna, więc na ciemnym gruncie dolna warstwa musi być
ciepła. Tło `brand`, tekst `brand-ink`, w obu przypadkach.

Na kolorowych podstronach przycisk drugorzędny bierze `contrast` z tekstem w kolorze tła.
Złoty przycisk na złotym tle znika.

## Najechanie i kliknięcie

Wszystko, co ma nadrukowany cień (kafel, przycisk, link-kafel), reaguje tak samo:

- element przesuwa się o **3 px w stronę cienia** (w dół i w prawo)
- **biała warstwa znika**
- czarna warstwa kurczy się z 6 do 2 px

Stan po najechaniu to token **`shadow-print-hover`**, przesunięcie to `press-shift`
(3 px), czas `motion-press` (90 ms) z krzywą `motion-ease`. Żadna z tych liczb nie jest
wpisywana w komponencie. Pod `prefers-reduced-motion` zostaje sama zmiana cienia, bez
przesunięcia.

Czyta się to jak dociśnięcie do papieru. Jeden ruch dla wszystkich elementów z cieniem,
żaden inny efekt najechania w systemie.

Konsekwencja dla siatki: cień ma 6 px, więc odstępy między kaflami nie mogą być mniejsze
niż 20 px, inaczej cień jednego wchodzi na sąsiada.

## Szerokości i kreski

Pasy tła idą przez całą szerokość okna, treść w pasie trzyma się kolumny `col-page`
(960 px), a akapit `col-text` (640 px). Jedyny breakpoint to `bp-phone` (640 px).
Kreska w UI ma `rule-hair` (1 px) w kolorze `line`; `rule-thin` (1,5 px) należy do
wiersza parametrów na etykiecie i na stronie nie występuje.

Przygaszony tekst na czarnym pasie bierze `contrast-ink-muted`, nie `opacity`, bo `opacity`
przygasza też obramowanie i ikonę, a `ink-faint` na czerni nie wyrabia kontrastu.

## Formularz opinii

Na podstronie piwa, na czarnym pasie. Pyta **o cechy, nie o ocenę**. Gwiazdki od
znajomych nic nie znaczą, bo wszyscy dają piątkę.

Pytania są te same co na panelu porównawczym, żeby odpowiedzi z obu źródeł dało się
zestawić w danych tej samej warki:

1. Goryczka po przełknięciu: znika / zostaje chwilę / zalega
2. Co prowadzi: słód / równo / chmiel
3. Aromat: za słaby / w sam raz / za mocny
4. Drugie pod rząd? tak / nie

Ostatnie mierzy pijalność bez pytania o nią wprost i **nie ma środkowej odpowiedzi**:
albo sięgasz po kolejne, albo nie.

Pole na jedno zdanie i **nieobowiązkowy podpis**. Kto chce się podpisać, podpisuje się.

## Stopka

Stopka jest **oddzielona od góry włosową kreską** (`rule-hair` w `contrast-ink-muted`).
Bez niej skleja się z pasem nad nią, bo formularz oceny i pas o narzędziu też są czarne
i powstaje jedna czarna płachta bez końca.

**Dwie kolumny, także na telefonie.** Jedna pod drugą znaki ustawiają się w kolumnę totemów
i stopka robi się wyższa niż treść, którą zamyka.

Po lewej, jedno pod drugim:

1. **Pełne logo** w `contrast-ink`, **160 px** szerokości (140 px na telefonie). To
   najważniejszy znak w stopce i ma być największy. Bez nazwy browaru pisanej tekstem
   i bez miasta, bo logo niesie nazwę samo.
2. **Ikona Facebooka**, **20 px**, w `contrast-ink-muted`; przy najechaniu i fokusie
   zapala się na niebiesko (`#1877f2`). Ma być **delikatna**, bo to odnośnik, nie drugi
   znak marki, i nigdy nie może być większa ani mocniejsza od logo. To gotowy, kwadratowy
   znak serwisu i nie przerabiamy go: zaokrąglenie narożników należy do cudzej marki.
3. **Linijka kolofonu**: rok i `lukasznowak.dev`, styl `small` w `contrast-ink-muted`,
   bez podkreśleń (podkreślenie dopiero przy `:hover`/`:focus`). Rok z zegara, nie wpisany.

Po prawej **znak Bractwa** jako link, dokładnie `logo-partner-min` (120 px). To jego
dolna granica czytelności i jednocześnie górna granica rozsądku w stopce. Wyrównany do
góry, żeby obie kolumny startowały z tej samej linii.

Otwarta sprawa: napis „KWADRAT" w logo pochodzi z oryginalnego pliku. Docelowo może go
zastąpić ten sam napis złożony krojem `display` (Alfa Slab One). Wtedy stopka i etykieta
mówią jednym krojem. Na teraz zostaje pełne logo i możliwe, że tak już zostanie.

## Barwy piw

Barwa gruntu idzie za barwą piwa, ale **w pełnym nasyceniu, nie w dosłownej jasności**.
Cztery jasne piwa dosłownie oddane dają cztery kremy i półka przestaje się różnicować.
Dlatego rodzina zostaje (złoto, słoma, chmiel, pszenica), a chroma idzie w górę; piwa
rozróżnia odcień w obrębie tej rodziny, nie jasność.

| warka | piwo | styl | grunt | akcent |
| --- | --- | --- | --- | --- |
| 93 | Domówka | Old School Pale Ale | `#f5b82e` | `#8a3c06` |
| 94 | Wolnosypane | Polish Pale Ale | `#e8d64f` | `#6d5a0a` |
| 95 | 50 metrów dalej jest taniej | Polish Pale Ale | `#d6d33a` | `#4f5a12` |
| 96 | Kolejna (ukryta) | Experimental Ale | `#ff3d8a` | `#ffffff` |
| 97 | Nowa Stara Szkoła | Modern Grodziskie | `#dcbd76` | `#6b4e22` |

Dwa progi, które trzeba trzymać przy każdej nowej barwie: czarny tekst na gruncie
minimum 10:1 (tu od 10,4 do 12,5), akcent względem gruntu minimum 3:1 (tu od 4,3 do 5,6), żeby
nadruk nie trafiony w rejestr był widoczny, ale nie czytał się jak druga litera.
Zieleń chmielowa przy 95 to świadomy sygnał „chmiel", a nie wyjątek od zasady barwy.
Gdyby kiedyś przeszkadzała, wraca w złoto bez ruszania reszty.

## Metka na podstronie piwa

Na landingu metka stoi z lewej. Na podstronie piwa **hero jest wyśrodkowane jak
etykieta**, więc metka startuje na środku. To ta sama kompozycja, co na butelce w ręku.
Po przewinięciu, w tym samym progu, w którym chowa się szyld, metka **zjeżdża na swoją
pozycję z lewej**: strona przechodzi z trybu „etykieta" w tryb „czytanie".

Mechanika: pionowy `translateY(-48px)` siedzi na wspólnym opakowaniu (razem z szyldem),
ale **poziome przesunięcie należy wyłącznie do metki**, bo opakowanie zawiera też szyld,
który jest pasem na całą szerokość i nie może jechać w bok. W CSS metka ma docelową
pozycję z lewej, a w stanie spoczynku dostaje `translateX` do środka. Wspólny
`drop-shadow` dalej działa, bo filtr liczy się po transformacjach dzieci.

Oba ruchy w `motion-metka` z `motion-ease`, jeden próg, jedno zdarzenie. Na telefonie
metka od razu stoi z lewej, bo przy tej szerokości droga jest za krótka, żeby ruch coś
znaczył, a wyśrodkowana metka wchodzi pod nawigację.

## Ocena za przyciskiem

Formularz nie stoi otwarty. W czarnym pasie jest jeden przycisk (`Oceń to piwo`),
a formularz rozwija się dopiero po kliknięciu, w tym samym miejscu, bez modala
i bez przeskoku strony. Powód jest prosty: otwarty formularz na dole każdej podstrony
czyta się jak prośba o ocenę, a zamknięty jak oferta. Kto chce ocenić, kliknie.

Przycisk znika po rozwinięciu, fokus idzie na pierwsze pole, `aria-expanded` opisuje
stan. Pytania bez zmian, czyli atrybuty, nie gwiazdki.

## Opis piwa

**Opis piwa ma jedną wielkość tekstu.** Wszystkie akapity w `body`, łącznie z pierwszym.
Styl `lead` należy wyłącznie do hero landingu i w opisie piwa się nie pojawia: większy
stopień w ścianie tekstu czyta się jak nagłówek nawet przy wadze 400, a tu nie ma czego
zapowiadać, bo nad tekstem stoi już nazwa piwa i wiersz parametrów.

Pierwszy akapit wyróżnia **pozycja, nie stopień**. Jeśli ma oddychać mocniej, dostaje
większy odstęp pod spodem, a nie większą czcionkę.

Nagłówki w opisie piwa nie występują w ogóle: jest nazwa piwa (`display`), styl
(`script-style`) i tekst. Jeśli opis wymaga nagłówka, znaczy, że jest za długi na tę
stronę. I tak czyta go ktoś z butelką w ręku.

## Metka a ciemne pasy

Metka jest przyklejona do góry okna, więc przy przewijaniu przejeżdża nad pasami
o różnym tle. Nad czarnym pasem czarna płyta znika i zostaje sam biały pierścień
wiszący w powietrzu. Wygląda jak błąd, bo nim jest.

Dwie zasady i obie są potrzebne:

1. **Nad pasem `contrast` metka się odwraca.** Jasna płyta, ciemny znak. To ta sama
   reguła, co w ciemnym motywie: metka ma być jedynym elementem w pełnym kontraście do
   tego, co pod nią. Pasy i tak deklarują już swój grunt (`data-ground`), więc wystarczy
   obserwator sprawdzający, który pas jest pod paskiem metki.
2. **W trybie zadania metka znika.** Otwarty formularz oceny i otwarte menu na telefonie
   przejmują ekran. Wtedy użytkownik coś robi, a nie ogląda markę. Metka chowa się
   w górę tym samym `translateY`, co przy chowaniu szyldu, i wraca po zamknięciu.
   W menu rolę znaku przejmuje sam pierścień w rogu nakładki.

To jedyne dwa wyjątki od „metka nigdy nie znika". Nie dokładaj trzeciego. Jeśli metka
przeszkadza gdzieś jeszcze, to znaczy, że przeszkadza coś pod nią.

## Nawigacja

Podpisy w szyldzie idą stylem **`label`**: 12 px, waga 600, światło 0,08 em, wersaliki.
Nie `body`. Szyld to listwa, nie zdanie. Zwykły tekst o wadze 400 wygląda na nim
surowo, jakby ktoś zapomniał go złożyć. Wersaliki z literowaniem czytają się jak
oznakowanie, a nie jak akapit, który przypadkiem trafił na czarne tło.

Pozycja aktywna w `contrast-ink` pełną siłą, reszta w `contrast-ink-muted`.

## Menu na telefonie

Poniżej `bp-phone` nawigacja chowa się pod przycisk. Nakładka po otwarciu to **pełny
ekran w `contrast`**, pozycje w `contrast-ink` stylem `title`, jedna pod drugą, przy
lewym marginesie. U góry nakładki: **pierścień Kwadratu w lewym rogu, X w prawym**,
czyli znak i wyjście na przeciwnych końcach tej samej listwy. Na dole ikona Facebooka.

### Na telefonie nagłówek stoi w miejscu

Poniżej `bp-phone` nic się nie chowa i nic nie jeżdżi. Nie ma po co: ekran jest krótki,
nawigacja ma dwie pozycje, a ruchomy nagłówek na telefonie kradnie uwagę przy każdym
przewinięciu. Metka i przycisk menu stoją nieruchomo przez cały czas.

**Przycisk to same kreski, bez płyty.** Metka ma płytę, bo zwisa i rzuca cień, a drugi
taki przedmiot na ekranie kasowałby znaczenie pierwszego. Przycisk jest więc trzema
czarnymi kreskami leżącymi wprost na tle, przy prawym marginesie kolumny treści,
w tej samej wysokości co znak w metce (osie obu równo).

Rysunek bierze się **z geometrii znaku**: pole takiej samej wielkości jak znak w metce,
w nim górna ściana, kreska w osi i dolna ściana, każda grubości `bok ÷ 7`, na pełną
szerokość pola. To ten sam znak, tylko bez bocznych ścian.

Stąd animacja wychodzi sama z siebie: boczne ściany dorastają i mamy znak, środkowa
kreska znika, a potem z pierścienia robi się X. Hamburger nie jest tu obcą ikoną, tylko
niedokończonym logo.

### Gdzie stoi przycisk na szerokim ekranie

**Pod szyldem, nie w nim.** Trzy kreski wciśnięte w 32-pikselową listwę wyglądają jak
wepchnięte na siłę i nie mają własnego światła. Przycisk zwisa spod szyldu przy prawym
marginesie kolumny treści, czyli symetrycznie do metki, która zwisa przy lewym. Razem
czytają się jak dwa zaczepy tej samej listwy, a nie jak ikonka doklejona do paska.

Kolor: `contrast`, czyli to samo prawo co metka. **Nad ciemnym pasem się odwraca**,
inaczej czarne kreski znikną na czarnym tle. Pole dotyku minimum 44 × 44 px, same kreski
28 px szerokości.

### Hamburger, który zamienia się w znak, a potem w X

Przycisk jest zbudowany jak **niedokończony znak Kwadratu**: górna krawędź, dolna
krawędź i kreska w środku. Boczne krawędzie istnieją, ale mają zerową wysokość.
Stąd animacja w dwóch krokach, każdy po `motion-press` (90 ms), razem 180 ms:

1. **Hamburger → znak.** Boki wyrastają do pełnej wysokości, a środkowa kreska kurczy
   się do zera. Zostaje kwadratowy pierścień, dokładnie logo.
2. **Znak → X.** Pierścień znika, a ze środka wychodzą dwie przekątne.

Zamykanie to ta sama droga w odwrotną stronę: X → znak → hamburger. Sens jest taki, że
menu nie dostaje cudzej ikony „zamknij", tylko przechodzi przez znak marki w obie strony.

Pod `prefers-reduced-motion` nie ma kroków: hamburger od razu staje się X.

## Ikony składu

Sekcja „Skład" dostaje ikony przy wierszach: słód, chmiel, kolba (drożdże), krzyż
(dodatki). Bierzemy je **gotowe z lucide** (ISC), bo własne rysowanie dwa razy skończyło
się gorzej niż zestaw z półki. 40 px, kolor z `currentColor`, wklejane inline, bo przez
`<img>` kolor nie zadziała. Zasady i budowa: `assets/Ikony/README.md`.

Na etykiecie ikon nie ma i nie będzie: tam przy parametrach sprawdziliśmy, że szkodzą.
Na stronie jest miejsce, bo ikona stoi przy wierszu listy, a nie wciska się między
liczby.

## Szew między pasami

Pasy nie stykają się na styk. Każdy pas **odbija się raz po tym, jak się skończył**,
oddzielony przerwą w kolorze pasa, który właśnie się zaczyna. Kolejność od góry:

```
pas pomarańczowy
przerwa biała       5 px   (seam)
echo pomarańczowe   3 px   (seam-echo), kreska 22 px, odstęp 12 px
pas biały
przerwa czarna      5 px   (seam)
echo białe          3 px   (seam-echo), kreska 22 px, odstęp 12 px
pas czarny
```

Echo jest **przerywane**, jak szew w materiale: kreska `seam-dash` (22 px), odstęp
`seam-dash-gap` (12 px). W CSS to `repeating-linear-gradient(90deg, kolor 0 22px,
transparent 22px 34px)` na pasku o wysokości `seam-echo`. Krótsza kreska zamienia szew
w perforację, czyli linię do oderwania, i zaczyna przyciągać wzrok mocniej niż treść obok.

Przerwa jest grubsza od echa i tak ma zostać. Echo to powtórka, nie drugi pas.

To ten sam pomysł, co nadruk nie trafiony w rejestr pod nazwą piwa, tylko w skali układu:
kolor nie znika, lecz powtarza się raz słabiej, a biel między warstwami jest tym, co je
rozdziela. Dzięki temu przejście kolor → biel → czerń czyta się jak jedna decyzja
drukarska, a nie trzy przypadkowe tła pod sobą.

Zasady: szew idzie przez całą szerokość okna, nigdy w kolumnie treści; jest dokładnie
jeden na granicę; nie dokładamy trzeciego paska ani gradientu; ostatnia granica przed
stopką go nie dostaje, bo tam pracuje włosowa kreska stopki.

Uwaga wdrożeniowa: **przerwę robi się `padding-top` na szwie, nie `margin-top` na pasku**.
Margines dziecka sklei się z rodzicem, wypchnie cały szew w dół i zamiast przerwy w kolorze
nowego pasa zobaczysz tło `body`. Przy przejściu w czerń wygląda to jak jasna szpara,
której nikt nie zaplanował.

## Nadruk w nazwach, nie tylko na etykiecie

Nazwy piw na kaflach landingu i w hero podstrony dostają **ten sam nadruk co na
etykiecie**: `shadow-print-name`, czyli biała warstwa 1 px i warstwa akcentu 4 px.
Kafel musi więc nieść `--akcent` swojego piwa, tak samo jak podstrona.

Nazwa browaru w hero landingu dostaje `shadow-print-title`. To samo, tylko dolna
warstwa bierze `brand-strong`, bo tam nie ma barwy piwa.

Bez tego barwy wyglądają na wyblakłe, nawet gdy są nasycone: to nie kolor jest za słaby,
tylko płaski. Nadruk daje mu drugą warstwę i dopiero wtedy kafel wygląda jak etykieta,
a nie jak kolorowe pole z tekstem.

## Pisownia

**Na stronie nie ma myślników.** Ani półpauzy, ani pauzy, ani dywizu w roli przestanku:
nie w nazwach piw, nie w opisach, nie w tekstach formularza, nie w stopce. Nowy tak nie
pisze, a tekst z pauzami od razu wygląda na pisany przez maszynę.

Zamiast myślnika: przecinek, kropka i nowe zdanie, albo nawias. Jeśli zdanie bez
myślnika się rozsypuje, znaczy, że ma dwie myśli naraz i trzeba je rozdzielić, a nie
skleić kreską.

Dywiz w wyrazach złożonych zostaje, bo to ortografia, nie interpunkcja (`Nowa Stara
Szkoła` nie ma takiego przypadku, ale `biało-czarny` już tak). Zakres liczb zapisujemy
słowem albo kropkami: `od 18 do 20 °C`, nie `18-20 °C`.

## Gdzie pracuje krój pisany

`script-style` nie jest ozdobą jednego ekranu. **Nazwa stylu piwa idzie nim wszędzie**,
gdzie piwo się pojawia: na etykiecie, w hero podstrony i na kaflu na landingu. Na kaflu
było wcześniej 12 px wersalikami w `ink-muted` i styl ginął, a to on mówi, co jest
w butelce.

Na kaflu `script-inline` (18 px) w `ink`, w hero `script-style` (30 px). Jedna rodzina
w jednej roli na trzech powierzchniach, dzięki temu krój czyta się jak decyzja, a nie
jak wstawka.

Druga rola, jedyna dopuszczona poza stylem piwa: **pytanie na czarnym pasie oceny**
(„Jak ci smakowało?"). To trzy słowa i prośba o przysługę, więc pisane działa tam lepiej
niż ciężki `display`. Jeśli i to okaże się za dużo, wracamy do `display` i krój pisany
zostaje wyłącznie przy stylach piw.

Czego nim nie składamy: zdań, akapitów, nazw piw, liczb, wersalików i nagłówków sekcji.

## Lista składu

Etykiety wierszy mają różną długość, więc bez stałej kolumny wartości rozjeżdżają się
w pionie i lista wygląda na złożoną przypadkiem. Kolumna etykiet ma `col-label` (88 px),
ikona 40 px na desktopie i 34 px na telefonie, wartości zaczynają się zawsze w tym samym
miejscu.

Pod ostatnim wierszem potrzeba **minimum `space-12` oddechu** przed szwem. Bez tego
tabela, szew i pytanie o ocenę sklejają się w jeden blok i strona kończy się nagle,
w pół zdania.

## Numer warki na stronie piwa

Numer **nie wchodzi do wiersza parametrów**. Wiersz ma trzy kolumny (ekstrakt, alkohol,
IBU) i czwarta wartość rozwala go na telefonie: `3,0% alc.` zawija się do drugiej linii
i tabela przestaje być tabelą. Numer idzie osobno, pod blokiem nazwy, w kroju mono
z `tabular-nums`, w `ink-muted`.
