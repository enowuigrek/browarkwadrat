# Logo i znaki

Dwie różne zasady: logo własne wolno przebarwiać tokenem, znak partnera prawie nie.
W repo pliki leżą w `public/`: `kwadrat-znak.svg`, `logo-cale.svg`, `bractwo-piwne.svg`.

## Znak Kwadratu

Znak Browaru Kwadrat: **kwadratowy pierścień**. Ramka ma dokładnie **1/7 boku**
(na 112 px to 16 px), a otwór 5/7. Ta proporcja jest z oryginalnego logo i nie wolno
jej zmieniać „na oko" — to jedyna rzecz, która czyni ten kwadrat rozpoznawalnym.

| plik | co to |
| --- | --- |
| `kwadrat-znak.svg` | sam znak, 177 bajtów. Favicon, ikona aplikacji, sygnet w nagłówku. |
| `kwadrat-logo.svg` | pełne logo: znak + „KWADRAT" + „DOMOWY KRAFT" z kreskami po bokach. |

**Tusz: `ink`** (`#16130f`). Oba pliki mają tę wartość wpisaną na sztywno, bo SVG
wstawiony przez `<img>` nie dziedziczy `currentColor` ze strony. Żeby przebarwić znak
(np. na `contrast-ink` w ciemnym pasie albo na `brand`), wklej SVG inline do dokumentu
albo użyj go jako `mask-image` z `background-color` z tokenu.

## Skąd się wzięły

Odzyskane z `public/logo-cale.svg` w repo strony. Oryginał waży 496 KB, bo kształty są
tam wypełnione pięcioma wklejonymi bitmapami z czarną teksturą, a litery dodatkowo
zdublowane żywymi elementami `<text>` w krojach Thonburi i Heiti SC — na maszynie bez
tych fontów renderują się jako duchy pod napisem. Wektory siedziały w `clipPath`,
więc wystarczyło wypełnić same ścieżki i wyrzucić resztę. Efekt: 9 KB zamiast 496 KB,
bez bitmap, bez duchów, skaluje się bezstratnie.

**Nie wracaj do `logo-cale.svg`.** Jeśli kiedyś trzeba będzie ruszyć kształty, źródłem
jest ten folder, nie tamten plik.

## Czego tu nie ma

Wersji jednokolorowej na ciemnym tle jako osobnego pliku — robi się ją inline albo maską.
Nie ma też wariantu pionowego ani sygnetu z napisem w jednej linii; jak będą potrzebne,
budujemy je ze znaku i tekstu, a nie przez skalowanie pełnego logo.

## Znaki partnerów

Znaki, które **nie należą do Kwadratu**. Obowiązuje je inna zasada niż logo własne:
używa się ich w takiej formie, w jakiej są, i nie modyfikuje.

| plik | co to |
| --- | --- |
| `bractwo-piwne.svg` | Bractwo Piwne — Towarzystwo Promocji Kultury Piwa. Nowy jest członkiem. |

## Zasady użycia

- **Nie przebarwiać — ale wersja jednobarwna odwrócona jest w porządku.** „Nie
  przebarwiać" znaczy: żaden odcień. Dozwolona jest dokładnie jedna para: `ink` na
  jasnym tle i `contrast-ink` na ciemnym, czyli ten sam znak w kontrze. Żadnego złota,
  żadnych barw słodowych, żadnej barwy piwa. Technicznie robi się to `mask-image`
  z `background-color` z tokenu, tak samo jak znak Kwadratu — i dzięki temu w ciemnym
  motywie, gdzie pas stopki jest jasny, znak sam wraca do ciemnego.
- **Jeśli Bractwo tego zabrania, znak idzie na biały kafel.** Alternatywa dla kontry to
  biały prostokąt w czarnym pasie z logo w `ink` — forma oryginalna, własne światło
  wokół. Wariant awaryjny: na razie trzymamy kontrę, bo w pasie bez kafla jest czyściej.
- **Nie rozciągać i nie obcinać.** Kadr jest częścią znaku: napis „BRACTWO PIWNE"
  przecina kapsel i to jest zamierzone.
- **Nie łączyć z logo Kwadratu w jeden zlepek.** Jeśli oba mają być na etykiecie
  albo na stronie, stoją osobno, z własnym światłem wokół.
- **Minimalna szerokość `logo-partner-min` (120 px).** Niżej napis w okręgu
  („Towarzystwo Promocji Kultury Piwa") przestaje być czytelny i lepiej dać sam kapsel
  albo nic. Wartość jest tokenem w sekcji `layout`, nie liczbą w komponencie.
- To znak cudzej organizacji, więc używamy go tam, gdzie faktycznie coś znaczy
  (przynależność, wydarzenie Bractwa), a nie jako dekoracji.

## Pochodzenie

Zwektoryzowany z PNG 3471×2084, który dał Nowy. Obraz był czysto czarno-biały, więc
obrys jest wierny, nie przerysowany „na oko". 42 KB, 64 ścieżki, skaluje się bezstratnie.
Jeśli Bractwo kiedyś udostępni oficjalny wektor, podmieniamy ten plik na tamten.
