// Znak Kwadratu — ten sam kształt co public/kwadrat-znak.svg, wklejony inline,
// żeby brał currentColor (SVG w <img> koloru nie dziedziczy).
export function Znak({ className }) {
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
        </svg>
    );
}
