# Metka

Czarny **szyld** przyklejony do górnej krawędzi i **metka** zwisająca z niego ze znakiem
Kwadratu w środku na biało. Razem tworzą jedną czarną sylwetkę, główny element
rozpoznawczy marki, ten sam na stronie i na etykiecie, żeby butelka w ręku i strona pod
kodem QR wyglądały jak jedna rzecz.

## Anatomia

| | strona | etykieta |
| --- | --- | --- |
| wysokość szyldu | 48 px | 20 px |
| szerokość metki | 100 px | 60 px |
| wysokość metki | 180 px | 108 px |
| znak | 70 px | 42 px |
| luz po bokach i pod znakiem | 15 px | 9 px |
| odstęp metki od lewej | 100 px (= własna szerokość) | 60 px (= własna szerokość) |

Tło szyldu i metki: `contrast`. Znak i tekst na szyldzie: `contrast-ink`. Przygaszona
pozycja nawigacji: `contrast-ink-muted`. Cień: `shadow-metka`. Promień: `radius`, czyli
zero.

**W ciemnym motywie metka się odwraca** (jasna płyta, ciemny znak), bo `contrast` jest
tokenem pełnego odwrócenia względem tła, a nie nazwą czerni. Czarna metka na stronie
`#121110` byłaby niewidoczna, czyli przestałaby być metką. Niezmienne jest to, że metka
jest jedynym elementem w pełnym kontraście do strony, a nie konkretny hex. Na etykiecie
pytanie nie istnieje: etykieta zawsze liczy się z jasnego motywu, więc tam szyld i metka
są czarne ze znakiem na biało i nigdy inaczej.

**Geometria wynika ze znaku, nie z metki.** Ścianka pierścienia ma `bok ÷ 7`. Luz po
lewej, po prawej i pod znakiem to **półtorej ścianki**, czyli `bok × 3 ÷ 14`. Stąd:

- szerokość metki = `znak × 10 ÷ 7`
- wysokość metki = `szerokość × 1,8`
- pusty pas nad znakiem = reszta; jego górna część chowa się w szyldzie

Przy znaku 70 px: ścianka 10, luz 15, metka 100 × 180. Przy znaku 42 px: ścianka 6,
luz 9, metka 60 × 108. Metka jest **wyraźnie wyższa niż szeroka** (1,8), to nie kafel
z logo, tylko pasek, który zwisa.

## Jeden cień na całość

Szyld i metka są tego samego koloru i stykają się, więc to **jedna sylwetka, nie dwa
elementy**. Cień siedzi na wspólnym opakowaniu jako `filter: drop-shadow(...)`, nie jako
`box-shadow` na każdym z osobna. Dwa osobne cienie dublują się w złączu i robią tam
ciemniejszą plamę, której w prawdziwym cieniu by nie było.

Dzięki temu dolna krawędź szyldu dostaje dokładnie ten sam cień co metka i całość czyta
się jako jeden przedmiot leżący na stronie.

**Szyld musi wychodzić poza obie krawędzie o tyle, ile wynosi przesunięcie cienia**
(12 px na stronie, 8 px na etykiecie). Cień jest przesunięty w prawo, więc bez tego pod
samą lewą krawędzią zostaje pasek bez cienia. Odstęp metki od lewej liczy się od krawędzi
kolumny treści, więc przy wysuniętym szyldzie jest to 112 px, nie 100.

## Chowanie przy przewijaniu

Szyld chowa się i wraca, a metka jedzie razem z nim. To **czysty `translateY(-48px)` na
całym opakowaniu**, bez zmiany wysokości czegokolwiek. Czas: `motion-metka` (200 ms)
z krzywą `motion-ease`, pod `prefers-reduced-motion` bez animacji.

| stan | co widać |
| --- | --- |
| szyld widoczny | szyld 48 px + metka zwisająca 132 px pod nim |
| szyld schowany | sama metka, 132 px |

Dwa powody, żeby nie animować wysokości. Po pierwsze ścianka i luz są wyliczone z boku
znaku, więc przy pośrednich wartościach proporcje `1/7` i `1,5` przestają wychodzić na
pełnych pikselach i krawędzie zaczynają się rozmywać. Po drugie `transform` nie
przelicza układu, a zmiana wysokości tak, i to przy każdej klatce przewijania.

**Metka nie znika przy przewijaniu.** Nawet przy schowanym szyldzie zostaje na ekranie
ze znakiem, bo to ona jest znakiem marki, a nie nawigacja.

Są dokładnie dwa wyjątki, oba opisane w `strona.md`: **nad pasem `contrast` metka się
odwraca** (inaczej czarna płyta znika i zostaje sam biały pierścień w powietrzu),
a **w trybie zadania (otwarty formularz oceny, otwarte menu na telefonie) chowa się
w górę** i wraca po zamknięciu. Trzeciego wyjątku nie dokładamy.

## Zasady

1. **Zawsze przyklejona do górnej krawędzi.** Metka nie pływa w środku i nie jest kartą.
   Wygląda jak wszyta, a nie jak położona.
2. **Lewa krawędź metki równa się lewej krawędzi kolumny treści.** Metka ma ten sam
   margines co tekst pod nią, więc strona ma jedną linię startu, a nie dwie. Wcześniej
   odstęp był równy własnej szerokości metki; w realnym układzie, z przyciskiem menu
   zwisającym przy prawym marginesie, wersja wyrównana do tekstu trzyma się lepiej.
   Wartość bierze się z marginesu kolumny, nie z procentów, bo procent sprawiał, że na
   monitorze metka odpływała na środek, a na telefonie kleiła się do krawędzi.
3. **Metka musi wystawać poniżej szyldu.** Jeśli nie wystaje, to nie jest metka, tylko
   kafel w nagłówku.
4. **Jedna na powierzchnię.** Drugi taki element na tym samym ekranie zabija efekt.
5. **Znak bez napisu.** W metce jest sam kwadratowy pierścień, nigdy pełne logo
   z napisem „KWADRAT".
6. **Nie przebarwiać.** Tylko `contrast` i `contrast-ink`: w druku i w jasnym motywie
   czarna płyta z białym znakiem, w ciemnym odwrotnie. Złoto, barwy słodowe i barwa piwa
   nie wchodzą na metkę nigdy, bo barwa jest tłem, na którym metka leży.
7. **Rozmyty cień tylko tutaj.** `shadow-metka` to jedyny blur w systemie i jego sens
   polega na tym, że nic innego go nie ma. Cień drukarski przycisków (`shadow-print`) nie
   jest wyjątkiem od tej zasady, bo nie ma rozmycia, ale na metkę też nie wchodzi.
8. **Cień pada w dół i w prawo.** `12px 12px 12px`: rozmycie równe przesunięciu, więc nic
   nie wychodzi w lewo ani do góry. To rzut przedmiotu przy świetle z lewej u góry, a nie
   poświata dookoła.

## Wariant wyśrodkowany

Na podstronie piwa metka startuje **na środku**, bo hero jest tam złożone jak etykieta.
Po przewinięciu wraca na pozycję z lewej razem ze schowaniem szyldu, jeden próg, jedno
zdarzenie, czasy `motion-metka` i `motion-ease`.

Poziome przesunięcie siedzi **na samej metce**, nie na wspólnym opakowaniu: opakowanie
niesie też szyld, czyli pas na całą szerokość, który w bok jechać nie może. Wspólny
`drop-shadow` to przeżywa, bo filtr liczy się po transformacjach dzieci.

**Na telefonie nic się nie rusza.** Ani metka, ani szyld, ani przycisk menu. Ekran jest
krótki, nawigacja ma dwie pozycje, a nagłówek jeżdżący przy każdym przewinięciu kradnie
uwagę. Chowanie szyldu zostaje tylko na szerokim ekranie.

Po prawej stronie, w osi znaku z metki, stoi **przycisk menu zbudowany z tego samego
rysunku, ale bez płyty**: trzy czarne kreski wprost na tle, czyli górna ściana, kreska
w osi i dolna ściana, każda grubości `bok ÷ 7`. Płyta jest tylko jedna i należy do metki,
bo to ona ma leżeć NA stronie. Opis zachowania w `strona.md`.

**Wariantu wyśrodkowanego na telefonie nie ma w ogóle.** Droga jest za krótka, żeby ruch
coś znaczył, a metka na środku wchodzi pod nawigację. Tam metka stoi z lewej od początku
do końca, wyrównana do marginesu tekstu.

## Treść szyldu

Wyrównana **do prawej**, bo lewa strona należy do metki. Na stronie nawigacja w
`contrast-ink`, pozycja aktywna pełną siłą, reszta przygaszona.

**Na etykiecie szyld jest pusty.** Nic na nim nie piszemy: to czysty element graficzny,
z którego zwisa metka. Numer warki i pojemność idą na **czarną stopkę przy dolnej
krawędzi**, numer po lewej (mono, `tabular-nums`, 10 lub 11 px), pojemność po prawej.
Powód jest praktyczny: butelka stoi na półce etykietą do przodu, a wzrok schodzi
z nazwy w dół, więc dane techniczne mają być pod nią, nie nad nią. Szyld na etykiecie
jest wyraźnie niższy (20 px): niesie zero treści, więc ma być listwą, nie paskiem.

## Jak oceniać odstęp od lewej

Tylko przy realnej szerokości. Odstęp jest w pikselach, więc w zmniejszonej ramce
podglądu wygląda na większy, niż jest: 100 px w ramce 700 px to 14% szerokości, a na
stronie 1400 px to 7%. Dlatego ten podgląd składa się przy 1280 px i dopiero potem
jest skalowany, bo inaczej ocena „za bardzo w prawo" bierze się z ramki, nie z projektu.

Gdyby jednak metka miała iść w lewo, są dwa sensowne przystanki i żaden z nich nie jest
dowolną liczbą:

- **połowa szerokości metki** (50 px / 30 px), ta sama zasada, krótszy oddech
- **równo z kolumną treści** (`space-8`, 32 px), lewa krawędź metki w jednej linii
  z tekstem; najmocniejsza siatkowo, ale metka ląduje tam, gdzie u wszystkich siedzi
  logo, więc traci na odrębności

## Na wąskim ekranie

Proporcje zostają, zmniejsza się skala: metka schodzi do wymiarów etykiety, czyli
60 × 108 px ze znakiem 42 px i luzem 9 px, a szyld do 32 px. Odstęp od lewej nadal
równy szerokości metki.

## Czego komponent nie dostarcza

Treści szyldu i logiki chowania. Rodzic musi mieć `position: relative` (albo szyld jest
`fixed` względem okna), a treść strony własny zapas u góry. Metka zjada pionową
przestrzeń pod nagłówkiem, więc hero potrzebuje `padding-top` co najmniej tyle, ile
metka wystaje, plus jeden odstęp.
