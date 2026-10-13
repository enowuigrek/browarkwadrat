// Ikona Facebooka zbudowana jak znak Kwadratu: ten sam pierścień (ścianka = bok ÷ 7)
// i w środku „f” z prostokątów o grubości ścianki. Bierze currentColor.
export function FacebookZnak({ className }) {
    return (
        <svg
            className={className}
            viewBox="0 0 112 112"
            fill="currentColor"
            fillRule="evenodd"
            aria-hidden="true"
            focusable="false"
        >
            <path d="M0 0H112V112H0Z M16 16V96H96V16Z" />
            <path d="M52 32H72V44H64V40H60V52H68V60H60V84H52V60H44V52H52Z" />
        </svg>
    );
}
