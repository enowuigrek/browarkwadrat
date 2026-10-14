import styles from './MenuButton.module.scss';

// Przycisk menu zbudowany jak niedokończony znak Kwadratu (ścianka = bok ÷ 7: znak 28, ścianka 4).
// Otwieranie w dwóch krokach po motion-press: hamburger → znak (boki rosną, środek znika),
// znak → X (pierścień znika, wychodzą przekątne). Zamykanie tą samą drogą wstecz.
export function MenuButton({ open, hidden, controls, onClick }) {
    return (
        <button
            type="button"
            className={styles.button}
            data-open={open || undefined}
            data-hidden={hidden || undefined}
            aria-expanded={open}
            aria-controls={controls}
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
            onClick={onClick}
        >
            <svg className={styles.icon} viewBox="0 0 28 28" aria-hidden="true" focusable="false">
                <g className={styles.ring}>
                    <rect x="0" y="0" width="28" height="4" />
                    <rect x="0" y="24" width="28" height="4" />
                    <rect className={styles.side} x="0" y="0" width="4" height="28" />
                    <rect className={styles.side} x="24" y="0" width="4" height="28" />
                </g>
                <rect className={styles.middle} x="0" y="12" width="28" height="4" />
                <g className={styles.cross}>
                    <line x1="4" y1="4" x2="24" y2="24" />
                    <line x1="24" y1="4" x2="4" y2="24" />
                </g>
            </svg>
        </button>
    );
}
