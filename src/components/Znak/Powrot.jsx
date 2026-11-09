// Znak powrotu: „<” z kreski o grubości ścianki znaku (bok ÷ 7), ostry narożnik bez
// zaokrągleń, tak jak w kwadracie. Zamiast obcej strzałki z zestawu ikon.
export function Powrot({ className }) {
    return (
        <svg className={className} viewBox="0 0 112 112" fill="none" stroke="currentColor" strokeWidth="16" strokeLinejoin="miter" strokeLinecap="butt" aria-hidden="true" focusable="false">
            <path d="M84 12L40 56L84 100" />
        </svg>
    );
}
