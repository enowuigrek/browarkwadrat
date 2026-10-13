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
