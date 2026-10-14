import styles from './MenuButton.module.scss';

// Przycisk menu z geometrii znaku Kwadratu (viewBox 112, ściana = bok ÷ 7 = 16):
// górna ściana, kreska w osi i dolna ściana, czyli znak bez bocznych ścian.
// Otwieranie w dwóch krokach po motion-press: boczne ściany dorastają i powstaje znak
// (środek znika), potem pierścień zamienia się w X. Zamykanie tą samą drogą wstecz.
export function MenuButton({ open, away, inverted, controls, onClick }) {
    return (
        <button
            type="button"
            className={styles.button}
            data-open={open || undefined}
            data-away={away || undefined}
            data-inverted={inverted || undefined}
            aria-expanded={open}
            aria-controls={controls}
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
            onClick={onClick}
        >
            <svg className={styles.icon} data-menu-icon viewBox="0 0 112 112" aria-hidden="true" focusable="false">
                <g className={styles.ring}>
                    <rect x="0" y="0" width="112" height="16" />
                    <rect x="0" y="96" width="112" height="16" />
                    <rect className={styles.side} x="0" y="0" width="16" height="112" />
                    <rect className={styles.side} x="96" y="0" width="16" height="112" />
                </g>
                <rect className={styles.middle} x="0" y="48" width="112" height="16" />
                <g className={styles.cross}>
                    <line x1="16" y1="16" x2="96" y2="96" />
                    <line x1="96" y1="16" x2="16" y2="96" />
                </g>
            </svg>
        </button>
    );
}
