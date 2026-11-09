// Teksty interfejsu w dwóch językach. Treść piw (intro, opis) siedzi w beersData,
// w polu `en`; tu jest tylko to, co wspólne dla wszystkich stron.
import { createContext, useContext } from 'react';

export const JEZYKI = ['pl', 'en'];

export const JezykContext = createContext({ lang: 'pl', setLang: () => {} });

export const useJezyk = () => useContext(JezykContext);

export const useTeksty = () => teksty[useJezyk().lang];

// Pierwsza wizyta: język telefonu. Potem wybór z przełącznika, zapamiętany w przeglądarce.
export function jezykStartowy() {
    try {
        const zapisany = localStorage.getItem('lang');
        if (JEZYKI.includes(zapisany)) return zapisany;
    } catch {
        // prywatne okno albo zablokowana pamięć: zostaje język przeglądarki
    }
    return navigator.language?.toLowerCase().startsWith('pl') ? 'pl' : 'en';
}

// Nazwy składników po polsku, które w angielskiej wersji mają odpowiednik.
// Nazwy własne (Pale Ale, Cookie, Książęcy) zostają bez zmian.
const SKLADNIKI_EN = {
    Pszeniczny: 'Wheat',
    Aromatyczny: 'Aromatic',
    'Owoce cytrusowe': 'Citrus fruit',
};

export const skladnik = (nazwa, lang) => (lang === 'en' ? SKLADNIKI_EN[nazwa] ?? nazwa : nazwa);

// Intro i opis piwa w wybranym języku; brak tłumaczenia = wersja polska.
export function opisPiwa(beer, lang) {
    const en = lang === 'en' ? beer.en : null;
    return {
        intro: en?.intro ?? beer.intro,
        description: en?.description ?? beer.description,
    };
}

const teksty = {
    pl: {
        jezyk: { nazwa: 'Język', zmien: 'Switch to English', inny: 'EN' },
        nav: { piwa: 'Piwa', narzedzie: 'Narzędzie' },
        menu: { otworz: 'Otwórz menu', zamknij: 'Zamknij menu', menu: 'Menu', glowna: 'Główna' },
        facebook: 'Browar Kwadrat na Facebooku',
        stopka: { nalezy: 'Należy do' },
        home: {
            label: 'Domowy browar · Częstochowa',
            lead: 'To miejsce, w którym opisuję swoje piwa, żeby każdy, kto dostanie butelkę, wiedział co pije.',
            polka: 'Na półce',
            kulisy: 'Za kulisami',
            narzedzieTytul: 'Narzędzie piwowarskie',
            narzedzieTekst:
                'Piwowarstwo to liczby: temperatura co dwie godziny, Brix, litry, dawki w ml/l. Każda warka ma swój zeszyt w prywatnym narzędziu. Stamtąd pochodzą parametry na etykietach i na tej stronie.',
            narzedzieOtworz: 'Otwórz narzędzie',
        },
        piwo: {
            parametry: 'Parametry',
            sklad: 'Skład',
            slody: 'Słody',
            chmiele: 'Chmiele',
            drozdze: 'Drożdże',
            dodatki: 'Dodatki',
            recepturaIOcena: 'Receptura i ocena',
            uwarz: 'Uwarz sobie',
            recepturaTekst: 'Pełna receptura z krokami, czasami i temperaturami. Otworzy się w narzędziu.',
            recepturaZobacz: 'Zobacz recepturę',
            recepturaWkrotce: 'Receptura wkrótce',
            recepturaNota: 'Przycisk zapala się, kiedy piwo ma recepturę w narzędziu.',
            smakowalo: 'Jak ci smakowało?',
            ocenaLead: nr => `Pytam o cechy, nie o ocenę. Odpowiedzi trafią do danych warki #${nr}.`,
        },
        ocena: {
            otworz: 'Oceń to piwo',
            pytania: {
                goryczka: { label: 'Goryczka po przełknięciu', opcje: ['znika', 'zostaje chwilę', 'zalega'] },
                prowadzi: { label: 'Co prowadzi', opcje: ['słód', 'równo', 'chmiel'] },
                aromat: { label: 'Aromat', opcje: ['za słaby', 'w sam raz', 'za mocny'] },
            },
            zdanie: 'Jedno zdanie',
            podpis: 'Podpis',
            nieobowiazkowy: '(nieobowiązkowy)',
            wyslij: 'Wyślij opinię',
            zwin: 'Zwiń',
            podglad: 'Wysyłka jeszcze nie działa. Formularz jest na razie tylko podglądem.',
        },
        brak: {
            tytul: 'Nie znaleziono piwa',
            tekst: 'Ta warka jeszcze nie istnieje. Może już została wypita?',
            wroc: 'Wróć do browaru',
        },
    },
    en: {
        jezyk: { nazwa: 'Language', zmien: 'Przełącz na polski', inny: 'PL' },
        nav: { piwa: 'Beers', narzedzie: 'Tool' },
        menu: { otworz: 'Open menu', zamknij: 'Close menu', menu: 'Menu', glowna: 'Main' },
        facebook: 'Browar Kwadrat on Facebook',
        stopka: { nalezy: 'Part of' },
        home: {
            label: 'Home brewery · Częstochowa',
            lead: 'This is where I describe my beers, so that anyone who gets a bottle knows what they are drinking.',
            polka: 'On the shelf',
            kulisy: 'Behind the scenes',
            narzedzieTytul: 'Brewing tool',
            narzedzieTekst:
                'Brewing is numbers: temperature every two hours, Brix, litres, doses in ml/l. Every batch has its own notebook in a private tool. That is where the numbers on the labels and on this site come from.',
            narzedzieOtworz: 'Open the tool',
        },
        piwo: {
            parametry: 'Specs',
            sklad: 'Ingredients',
            slody: 'Malts',
            chmiele: 'Hops',
            drozdze: 'Yeast',
            dodatki: 'Adjuncts',
            recepturaIOcena: 'Recipe and rating',
            uwarz: 'Brew it yourself',
            recepturaTekst: 'The full recipe with steps, times and temperatures. It opens in the tool.',
            recepturaZobacz: 'See the recipe',
            recepturaWkrotce: 'Recipe coming soon',
            recepturaNota: 'The button lights up once the beer has a recipe in the tool.',
            smakowalo: 'How did you like it?',
            ocenaLead: nr => `I ask about traits, not a score. Answers go into the data for batch #${nr}.`,
        },
        ocena: {
            otworz: 'Rate this beer',
            pytania: {
                goryczka: { label: 'Bitterness after swallowing', opcje: ['fades', 'lingers a bit', 'stays'] },
                prowadzi: { label: 'What leads', opcje: ['malt', 'balanced', 'hops'] },
                aromat: { label: 'Aroma', opcje: ['too weak', 'just right', 'too strong'] },
            },
            zdanie: 'One sentence',
            podpis: 'Name',
            nieobowiazkowy: '(optional)',
            wyslij: 'Send feedback',
            zwin: 'Collapse',
            podglad: 'Sending does not work yet. For now the form is only a preview.',
        },
        brak: {
            tytul: 'Beer not found',
            tekst: 'This batch does not exist yet. Or maybe it has already been drunk?',
            wroc: 'Back to the brewery',
        },
    },
};
