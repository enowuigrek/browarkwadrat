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
(formularz) → czarna stopka. Rytm kolor–biel–czerń robi podział bez dokładania ramek
i linii.

Pas zmienia grunt, a nie zasady: kreski, odstępy i typografia zostają te same.

## Przyciski

Przycisk to prostokąt bez promienia z **nadrukiem nie trafionym w rejestr**, tym samym,
co pod nazwą piwa.

Cały ten nadruk siedzi w jednym tokenie: **`shadow-print`**. Jego wariant jasny to
`2px 2px 0 <biel>, 6px 6px 0 <ink>`, ciemny `2px 2px 0 <ink>, 6px 6px 0 <brand-strong>`
— czerń na czerni jest niewidoczna, więc na ciemnym gruncie dolna warstwa musi być
ciepła. Tło `brand`, tekst `brand-ink`, w obu przypadkach.

Na kolorowych podstronach przycisk drugorzędny bierze `contrast` z tekstem w kolorze tła.
Złoty przycisk na złotym tle znika.

## Najechanie i kliknięcie

Wszystko, co ma nadrukowany cień (kafel, przycisk, link-kafel), reaguje tak samo:

- element przesuwa się o **3 px w stronę cienia** (w dół i w prawo)
- **biała warstwa znika**
- czarna warstwa kurczy się z 6 do 2 px

Stan po najechaniu to token **`shadow-print-hover`**, przesunięcie to `press-shift`
(3 px), czas `motion-press` (90 ms) z krzywą `motion-ease` — żadna z tych liczb nie jest
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

Przygaszony tekst na czarnym pasie bierze `contrast-ink-muted`, nie `opacity` — `opacity`
przygasza też obramowanie i ikonę, a `ink-faint` na czerni nie wyrabia kontrastu.

## Formularz opinii

Na podstronie piwa, na czarnym pasie. Pyta **o cechy, nie o ocenę** — gwiazdki od
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

1. **Pełne logo** w `contrast-ink`, maksymalnie **132 px** szerokości (120 px na
   telefonie). Bez nazwy browaru pisanej tekstem i bez miasta — logo niesie nazwę samo.
2. **Ikona Facebooka**, 28 px, w `contrast-ink`; przy najechaniu i fokusie zapala się
   na niebiesko (`#1877f2`). To gotowy, kwadratowy znak serwisu i nie przerabiamy go —
   zaokrąglenie narożników należy do cudzej marki, nie do naszego systemu.
3. **Linijka kolofonu**: rok i `lukasznowak.dev`, styl `small` w `contrast-ink-muted`,
   bez podkreśleń (podkreślenie dopiero przy `:hover`/`:focus`). Rok z zegara, nie wpisany.

Po prawej **znak Bractwa** jako link, dokładnie `logo-partner-min` (120 px) — to jego
dolna granica czytelności i jednocześnie górna granica rozsądku w stopce. Wyrównany do
góry, żeby obie kolumny startowały z tej samej linii.

Otwarta sprawa: napis „KWADRAT" w logo pochodzi z oryginalnego pliku. Docelowo może go
zastąpić ten sam napis złożony krojem `display` (Alfa Slab One) — wtedy stopka i etykieta
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
minimum 10:1 (tu 10,4–12,5), akcent względem gruntu minimum 3:1 (tu 4,3–5,6), żeby
nadruk nie trafiony w rejestr był widoczny, ale nie czytał się jak druga litera.
Zieleń chmielowa przy 95 to świadomy sygnał „chmiel", a nie wyjątek od zasady barwy —
gdyby kiedyś przeszkadzała, wraca w złoto bez ruszania reszty.

## Metka na podstronie piwa

Na landingu metka stoi z lewej. Na podstronie piwa **hero jest wyśrodkowane jak
etykieta**, więc metka startuje na środku — to ta sama kompozycja, co na butelce w ręku.
Po przewinięciu, w tym samym progu, w którym chowa się szyld, metka **zjeżdża na swoją
pozycję z lewej**: strona przechodzi z trybu „etykieta" w tryb „czytanie".

Mechanika: pionowy `translateY(-48px)` siedzi na wspólnym opakowaniu (razem z szyldem),
ale **poziome przesunięcie należy wyłącznie do metki** — opakowanie zawiera też szyld,
który jest pasem na całą szerokość i nie może jechać w bok. W CSS metka ma docelową
pozycję z lewej, a w stanie spoczynku dostaje `translateX` do środka. Wspólny
`drop-shadow` dalej działa, bo filtr liczy się po transformacjach dzieci.

Oba ruchy w `motion-metka` z `motion-ease`, jeden próg, jedno zdarzenie. Na telefonie
metka od razu stoi z lewej — przy tej szerokości droga jest za krótka, żeby ruch coś
znaczył, a wyśrodkowana metka wchodzi pod nawigację.

## Ocena za przyciskiem

Formularz nie stoi otwarty. W czarnym pasie jest jeden przycisk (`Oceń to piwo`),
a formularz rozwija się dopiero po kliknięciu, w tym samym miejscu, bez modala
i bez przeskoku strony. Powód jest prosty: otwarty formularz na dole każdej podstrony
czyta się jak prośba o ocenę, a zamknięty jak oferta. Kto chce ocenić, kliknie.

Przycisk znika po rozwinięciu, fokus idzie na pierwsze pole, `aria-expanded` opisuje
stan. Pytania bez zmian — atrybuty, nie gwiazdki.

## Opis piwa

**Opis piwa ma jedną wielkość tekstu.** Wszystkie akapity w `body`, łącznie z pierwszym.
Styl `lead` należy wyłącznie do hero landingu i w opisie piwa się nie pojawia: większy
stopień w ścianie tekstu czyta się jak nagłówek nawet przy wadze 400, a tu nie ma czego
zapowiadać — nad tekstem stoi już nazwa piwa i wiersz parametrów.

Pierwszy akapit wyróżnia **pozycja, nie stopień**. Jeśli ma oddychać mocniej, dostaje
większy odstęp pod spodem, a nie większą czcionkę.

Nagłówki w opisie piwa nie występują w ogóle: jest nazwa piwa (`display`), styl
(`script-style`) i tekst. Jeśli opis wymaga nagłówka, znaczy, że jest za długi na tę
stronę — i tak czyta go ktoś z butelką w ręku.

## Metka a ciemne pasy

Metka jest przyklejona do góry okna, więc przy przewijaniu przejeżdża nad pasami
o różnym tle. Nad czarnym pasem czarna płyta znika i zostaje sam biały pierścień
wiszący w powietrzu — wygląda jak błąd, bo nim jest.

Dwie zasady i obie są potrzebne:

1. **Nad pasem `contrast` metka się odwraca.** Jasna płyta, ciemny znak. To ta sama
   reguła, co w ciemnym motywie: metka ma być jedynym elementem w pełnym kontraście do
   tego, co pod nią. Pasy i tak deklarują już swój grunt (`data-ground`), więc wystarczy
   obserwator sprawdzający, który pas jest pod paskiem metki.
2. **W trybie zadania metka znika.** Otwarty formularz oceny i otwarte menu na telefonie
   przejmują ekran — wtedy użytkownik coś robi, a nie ogląda markę. Metka chowa się
   w górę tym samym `translateY`, co przy chowaniu szyldu, i wraca po zamknięciu.
   W menu rolę znaku przejmuje sam pierścień w rogu nakładki.

To jedyne dwa wyjątki od „metka nigdy nie znika". Nie dokładaj trzeciego — jeśli metka
przeszkadza gdzieś jeszcze, to znaczy, że przeszkadza coś pod nią.

## Nawigacja

Podpisy w szyldzie idą stylem **`label`**: 12 px, waga 600, światło 0,08 em, wersaliki.
Nie `body`. Szyld to listwa, nie zdanie — zwykły tekst o wadze 400 wygląda na nim
surowo, jakby ktoś zapomniał go złożyć. Wersaliki z literowaniem czytają się jak
oznakowanie, a nie jak akapit, który przypadkiem trafił na czarne tło.

Pozycja aktywna w `contrast-ink` pełną siłą, reszta w `contrast-ink-muted`.

## Menu na telefonie

Poniżej `bp-phone` nawigacja chowa się pod przycisk. Nakładka po otwarciu to **pełny
ekran w `contrast`**, pozycje w `contrast-ink` stylem `title`, jedna pod drugą, przy
lewym marginesie. U góry nakładki: **pierścień Kwadratu w lewym rogu, X w prawym** —
czyli znak i wyjście na przeciwnych końcach tej samej listwy. Na dole ikona Facebooka.

### Gdzie stoi przycisk

**Pod szyldem, nie w nim.** Trzy kreski wciśnięte w 32-pikselową listwę wyglądają jak
wepchnięte na siłę i nie mają własnego światła. Przycisk zwisa spod szyldu przy prawym
marginesie kolumny treści — czyli symetrycznie do metki, która zwisa przy lewym. Razem
czytają się jak dwa zaczepy tej samej listwy, a nie jak ikonka doklejona do paska.

Kolor: `contrast`, czyli to samo prawo co metka — **nad ciemnym pasem się odwraca**,
inaczej czarne kreski znikną na czarnym tle. Pole dotyku minimum 44 × 44 px, same kreski
28 px szerokości.

### Hamburger, który zamienia się w znak, a potem w X

Przycisk jest zbudowany jak **niedokończony znak Kwadratu**: górna krawędź, dolna
krawędź i kreska w środku. Boczne krawędzie istnieją, ale mają zerową wysokość.
Stąd animacja w dwóch krokach, każdy po `motion-press` (90 ms), razem 180 ms:

1. **Hamburger → znak.** Boki wyrastają do pełnej wysokości, a środkowa kreska kurczy
   się do zera. Zostaje kwadratowy pierścień — dokładnie logo.
2. **Znak → X.** Pierścień znika, a ze środka wychodzą dwie przekątne.

Zamykanie to ta sama droga w odwrotną stronę: X → znak → hamburger. Sens jest taki, że
menu nie dostaje cudzej ikony „zamknij" — przechodzi przez znak marki w obie strony.

Pod `prefers-reduced-motion` nie ma kroków: hamburger od razu staje się X.

## Ikony składu

Sekcja „Skład" dostaje ikony przy wierszach: słód, chmiel, kolba (drożdże), krzyż
(dodatki). Bierzemy je **gotowe z lucide** (ISC), bo własne rysowanie dwa razy skończyło
się gorzej niż zestaw z półki. 40 px, kolor z `currentColor`, wklejane inline — przez
`<img>` kolor nie zadziała. Zasady i budowa: `assets/Ikony/README.md`.

Na etykiecie ikon nie ma i nie będzie: tam przy parametrach sprawdziliśmy, że szkodzą.
Na stronie jest miejsce, bo ikona stoi przy wierszu listy, a nie wciska się między
liczby.
