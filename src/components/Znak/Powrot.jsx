// Znak powrotu: logo Kwadratu bez prawej ściany (ścianka = bok ÷ 7), otwarte w stronę,
// z której przyszedł czytelnik. Zamiast obcej strzałki.
export function Powrot({ className }) {
    return (
        <svg className={className} viewBox="0 0 112 112" fill="currentColor" fillRule="evenodd" aria-hidden="true" focusable="false">
            <path d="M0 0H112V16H16V96H112V112H0Z" />
        </svg>
    );
}
