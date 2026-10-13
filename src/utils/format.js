// Liczby po polsku: przecinek dziesiętny, stała liczba miejsc.
export const formatNumber = (value, digits = 1) =>
    value.toLocaleString('pl-PL', { minimumFractionDigits: digits, maximumFractionDigits: digits });
