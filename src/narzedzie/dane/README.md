# Dane warek

Pliki przeniesione z folderu `Kwadrat/warki/dane`. To są **jedyne** dane warek,
jakie istnieją. Nic poza nimi nie wolno dopisywać z pamięci ani wymyślać.

| plik | warka | stan |
| --- | --- | --- |
| `000-wolnosypane.json` | Wolnosypane 1.1v1 | **referencja kalibracyjna, nie warka**; bez numeru |
| `093-domowka.json` | #93 Domówka | wypita, dane szczątkowe |
| `098-szybciejsypane.json` | #98 Szybciejsypane | kondycjonowanie, pełny log fermentacji (27 wpisów) |
| `099-harlekin.json` | #99 Harlekin | gotowanie 02.11.2026, zadanie drożdży 03.11, status `warzenie` |

## Numeracja: rozstrzygnięte 31.10.2026

Źródłem prawdy dla numerów warek jest **Brewfather**, a za nim `src/data/beersData.js`.
Numery 93 do 97 na stronie są prawdziwe:

| numer | piwo |
| --- | --- |
| 93 | Domówka |
| 94 | Wolnosypane |
| 95 | 50 metrów dalej jest taniej |
| 96 | wolny, wpis `Kolejna Piwo` to szkic bez treści |
| 97 | Nowa Stara Szkoła |
| **98** | **Szybciejsypane** (uwarzone 06.10.2026, zabutelkowane 27.10.2026) |
| **99** | **Harlekin** (plan na 02.11.2026) |

Wcześniej dziennik warzenia nazywał Szybciejsypane warką 94, a Harlekina warką 95.
To był błąd: 94 i 95 były już zajęte. Pliki i treści zostały przenumerowane,
stare wersje leżą w `_stare/` oraz w `Kwadrat/_stare-numery/`.

**Następna warka po Harlekinie to #100.**

## Czego nie robić

Nie generuj plików `096-*.json` ani `097-*.json` z `beersData.js`. Opisy piw na stronie
to teksty marketingowe, nie dane warzenia. Piwa ze strony bez pliku tutaj nie mają
jeszcze danych warzenia i lista warek w narzędziu ma ich nie pokazywać.
Poprawny stan listy warek po fazie 0 to **trzy pozycje** (93, 98, 99). Czwarty plik,
Wolnosypane, to `rodzaj: referencja` i na liście warek się nie pokazuje.

## Pole źródła

Każda liczba, która nie jest zmierzona, ma obok siebie pole `*_zrodlo` albo wpis
w `uwagi_do_danych`. Wartości: `zmierzone`, `wyliczone`, `szacowane`, `nieznane`.

`093-domowka.json` i `000-wolnosypane.json` są w całości `nieznane`: ich liczby zostały
przepisane ze strony piwa i z Brewfathera, nie z dziennika warzenia. Widać to po tym,
że zasyp Domówki jest w procentach, nie w kilogramach, a jej ekstrakt, alkohol i IBU
zgadzają się co do cyfry z `src/data/beersData.js`. Nie wolno im wpisać `zmierzone`.
Plik `099-harlekin.json` jest w całości `wyliczone` i `szacowane`, bo warka jeszcze nie była.

Schemat wpisu fermentacji opisuje pole `schemat_fermentacji` w `098-szybciejsypane.json`.
To jest wzór dla formularza z fazy 1.
