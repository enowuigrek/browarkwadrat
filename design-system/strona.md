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

Znak Kwadratu, nazwa browaru i miasto, pod spodem autor strony. Po prawej logo Bractwa
Piwnego jako link, bez adresu obok. Ikona Facebooka siedzi w szyldzie na końcu nawigacji,
nie w stopce, i jest **kwadratowa** — w tym systemie nie ma ani jednego zaokrąglenia.

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
