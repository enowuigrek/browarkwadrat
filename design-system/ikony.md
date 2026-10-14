# Ikony

Cztery ikony składu: słód, chmiel, kolba (drożdże) i dodatki. Nie ma ich więcej i nie
powinno przybyć, bo ikona w tym systemie jest etykietą wiersza, nie ozdobą.

## Skąd są

Z **lucide** (wersja 1.57.0, licencja ISC), gotowy, utrzymywany zestaw o jednej
grubości linii. Użyte nazwy oryginalne: `wheat`, `hop`, `flask-conical`, `plus`.
Tekst licencji leży obok, w `LICENSE`, i ma tam zostać: ISC wymaga, żeby nota
o prawach autorskich szła razem z plikami.

Nie rysujemy ikon sami. Dwa podejścia własne (budowane z kwadratów i rysowane konturem)
poszły do kosza: pierwsze wyglądało jak piksel-art, drugie jak ikony, które ktoś zrobił
raz i nigdy nie dokończył. Gotowy zestaw jest spójny i nie zżera czasu, który należy się
etykietom.

| plik | lucide | wiersz |
| --- | --- | --- |
| `slod.svg` | `wheat` | Słody |
| `chmiel.svg` | `hop` | Chmiele |
| `kolba.svg` | `flask-conical` | Drożdże |
| `dodatki.svg` | `plus` | Dodatki (przy `null` wiersz się nie renderuje) |

Osobno, nie z lucide: **`facebook.svg`** to `square-facebook` z Font Awesome Free
(licencja CC BY 4.0, nota w `LICENSE-fontawesome.txt`, a atrybucja siedzi też
w komentarzu w samym pliku i ma tam zostać). Kwadratowy znak serwisu, bierzemy gotowy
i **nie przerabiamy go**, bo zaokrąglenie narożników należy do cudzej marki. W stopce
28 px w `contrast-ink`, przy najechaniu `#1877f2`.

Pliki są tylko zminifikowane i dostały `aria-label`; kształtów nie ruszamy. Jeśli kiedyś
dojdzie piąta ikona, bierzemy ją **z lucide**, nie dorysowujemy własnej, bo inaczej jedna
obca kreska psuje cały wiersz.

## Zasady użycia

- **Kolor przez `currentColor`.** W React wklejaj inline jako komponenty, tak jak znak
  Kwadratu, bo przez `<img>` kolor nie zadziała.
- **40 px w wierszu składu, 24 px to dolna granica.** Niżej łuski chmielu się zlewają.
- **Tylko w składzie.** Nie wchodzą do wiersza parametrów (tam ustaliliśmy: bez ikon),
  nie wchodzą na etykietę i nie zastępują nagłówków sekcji.
- Rysunki na etykietach to osobna sprawa i osobna ręka. Te ikony nie są dla nich
  wzorem i nie mają z nimi konkurować.
