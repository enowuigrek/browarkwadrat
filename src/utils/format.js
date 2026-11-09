// Liczby: po polsku przecinek dziesiętny, po angielsku kropka; stała liczba miejsc.
export const formatNumber = (value, digits = 1, lang = 'pl') =>
    value.toLocaleString(lang === 'en' ? 'en-GB' : 'pl-PL', { minimumFractionDigits: digits, maximumFractionDigits: digits });
