# Kwadrat

System wizualny Browaru Kwadrat. Obsługuje dwie powierzchnie: **narzędzie piwowarskie**
(prywatne — warki, pomiary, fermentacja, receptury) i **strony piw pod kodem QR** na
browarkwadrat.pl (publiczne — jedno piwo, jedna strona, link z etykiety). Jeden zestaw
tokenów na obie, bo to ten sam browar.

## Z czego to wynika

Nazwa to figura geometryczna, więc system jest kanciasty dosłownie: `radius` = 0 i to
jedyny token promienia, jaki istnieje. Nic się nie zaokrągla — karta, przycisk, input,
chip, kafel, komórka wykresu.

System jest **jasny**: słomkowa biel jako tło, ciepła prawie-czerń jako tekst, a czerń
wraca jako **przełamanie** (`contrast`) — ciemny pas, stopka, kafel z głównym odczytem
i znak kwadratu z logo. Kolory akcji są piwne i **złote**: `brand` to `#e8b130`, kolor
jasnego piwa pod światło, a nie brąz. Browar robi piwa prowadzone słodem, z chmielem
jako dodatkiem rześkim, i paleta mówi to samo. Zieleń została jedna, wyłącznie jako
status. I najważniejsze:
piwowarstwo to liczby. Temperatura co dwie godziny, Brix, litry, dawki w ml/l. Dlatego
liczby mają własną rodzinę (mono, `tabular-nums`) i własną skalę — nie są „tekstem,
tylko że cyframi”.

## Zasady

1. **Liczba jest bohaterem.** Odczyt zapisujesz stylem z grupy *Liczby*, nigdy stylem
   tekstowym. Jednostka obok wartości idzie w `small` + `ink-muted`, w odstępie `space-1`.
   Wszędzie `font-variant-numeric: tabular-nums`, żeby kolumny w tabeli nie tańczyły.
2. **Kreski, nie blur.** Karty i tabele oddzielasz `line` na `surface-100`; jeśli coś
   musi się odkleić od tła, dostaje `surface-200`. Rozmyty cień jest w systemie dokładnie
   jeden — `shadow-metka` — i należy wyłącznie do metki, bo ona jedna ma naprawdę leżeć
   NA stronie, a nie być jej częścią. Osobna rzecz to **cień drukarski**
   (`shadow-print`, `shadow-print-hover`, `shadow-print-name`): przesunięta kopia bez
   rozmycia, imitująca niedobitą pasówkę w druku. To nie blur, więc nie kasuje metki,
   ale należy tylko do przycisków i do nazwy piwa. Karta, tabela i input nie mają cienia
   żadnego.
3. **Jeden akcent.** `brand` oznacza „aktywne” albo „w normie”. Nie używaj go
   dekoracyjnie: jeśli na ekranie jest pięć zielonych rzeczy, żadna nie jest ważna.
4. **Paleta słodowa to dane, nie UI.** `malt-pale` / `malt-amber` / `malt-dark` służą do
   pokazywania barwy piwa i serii na wykresie. Nigdy jako tło przycisku ani kolor tekstu —
   kontrast nie wystarcza.
5. **Stan czytasz bez koloru.** `brand-strong` w roli ostrzeżenia i `danger` zawsze
   razem ze słowem lub ikoną.
   Sam kolor to nie komunikat, a różnicę często widać na telefonie w kuchni, przy złym
   świetle i w rękawicy.
6. **Odstęp bierzesz ze skali.** Każda wartość to wielokrotność `space-1` (4 px).
   Dowolna liczba px w CSS oznacza brakujący token — dodaj token albo użyj istniejącego.
7. **Zero zaokrągleń.** `border-radius` w kodzie to błąd, nawet 2 px, nawet na avatarze.
   Jeśli coś musi się odciąć od tła, robi to kreską albo `surface-200`, nie krzywizną.
8. **Oba motywy albo żaden.** Ciemny jest pierwszy (warzy się wieczorem, telefon leży
   obok fermentora), ale każdy komponent musi działać w jasnym. Wartość tylko dla jednego
   motywu to błąd.

## Kolor

Trzy plany tła (`surface-000` → `100` → `200`) i trzy poziomy tekstu
(`ink` → `ink-muted` → `ink-faint`). Niżej niż `ink-faint` nie ma nic — to już jest
granica 4.5:1 w obu motywach. Tło strony to **ciepła biel**, nie `#ffffff`: czysta biel
pod ciemnym tekstem męczy, a czystą biel zostawiamy kartom, żeby miały się od czego
odciąć. Tekst to ciepła prawie-czerń, nigdy `#000`.

| zastosowanie | token |
| --- | --- |
| tło ekranu | `surface-000` |
| karta, tabela, panel | `surface-100` |
| nagłówek tabeli, input, hover | `surface-200` |
| obramowania i separatory | `line` |
| treść | `ink` |
| etykiety, jednostki, daty | `ink-muted` |
| placeholder, nieaktywne | `ink-faint` |
| wypełnienie akcji: przycisk, aktywna zakładka | `brand` + tekst `brand-ink` (ciemny!) |
| tekst akcentu: link, nazwa piwa | `brand-strong` |
| ciemny pas, stopka, kafel z głównym odczytem | `contrast` + `contrast-ink` |
| przygaszony tekst na tym pasie | `contrast-ink-muted` |
| zaznaczony wiersz | `brand-soft` + tekst `ink` |
| w normie, fermentacja zdrowa | `ok` |
| barwa piwa, serie wykresu | `malt-pale`, `malt-amber`, `malt-dark` |
| odstępstwo od planu | `brand-strong` |
| błąd, strata | `danger` |

Skala słodowa jest uporządkowana jasnością, nie odcieniem, więc czyta się ją także
w odcieniach szarości i przy daltonizmie.

## Typografia

Cztery rodziny i każda ma jedną robotę:

- `display` — **Alfa Slab One**. Nazwa piwa i tytuł ekranu. Ma jedną wagę, więc
  hierarchię robi rozmiar, nigdy grubość.
- `sans` — **Archivo**. Interfejs i cały tekst ciągły. Wagi 400, 500 i 600.
- `script` — **Lobster**. Nazwa stylu piwa i pojedynczy podpis. Działa, bo jest mały
  i stoi obok display; nazwy piwa nim nie zapisujesz nigdy.
- `mono` — stos systemowy. **Wszystkie liczby**, bez wyjątku, zawsze `tabular-nums`.

Trzy pierwsze to webfonty i to jedyne pliki, jakie system ściąga. Mono zostaje
systemowe celowo: cyfry w stosie systemowym są tabularne i nie ma po co czekać na
pobranie, żeby zobaczyć temperaturę fermentacji.

Grupa *Tekst* ma pięć styli, *Naglowki* dwa, *Liczby* trzy, *Podpis* dwa. Nowy rozmiar
dodajesz jako styl w `tokens.json`, nie jako `font-size` w komponencie.

## Czego tu nie ma

Zaokrągleń, gradientów, kolorowych tł kart i ikon emoji. Rozmytych cieni jest jeden
(`shadow-metka`) i nie przybędzie ich więcej; twardych drukarskich trzy i wszystkie
są wypisane w `tokens.json`. Jeśli projekt potrzebuje czegoś z tej listy, to znak, że
problem jest w hierarchii, nie w ozdobach.

Nie ma też wartości wpisywanych z palca. Każdy kolor, odstęp, rozmiar, grubość kreski
i szerokość kolumny ma token — grubości i szerokości, które nie są odstępem, siedzą
w sekcji `layout`, bo nie mieszczą się w skali 4 px. Brak tokenu zgłaszasz, nie
obchodzisz.
