import { useTeksty } from '../../i18n/teksty.js';
import styles from './MenuButton.module.scss';

// Przycisk menu z geometrii znaku Kwadratu (viewBox 112, ściana = bok ÷ 7 = 16):
// górna ściana, kreska w osi i dolna ściana, czyli znak bez bocznych ścian.
// Otwieranie w dwóch krokach po pół motion-menu: górna i dolna kreska zjeżdżają do osi
// (środkowa znika), potem obracają się o ±45° w X. Zamykanie tą samą drogą wstecz.
export function MenuButton({ open, away, inverted, controls, onClick }) {
    const t = useTeksty();

    return (
        <button
            type="button"
            className={styles.button}
            data-open={open || undefined}
            data-away={away || undefined}
            data-inverted={inverted || undefined}
            aria-expanded={open}
            aria-controls={controls}
            aria-label={open ? t.menu.zamknij : t.menu.otworz}
            onClick={onClick}
        >
            <svg className={styles.icon} data-menu-icon viewBox="0 0 112 112" aria-hidden="true" focusable="false">
                <rect className={styles.top} x="0" y="0" width="112" height="16" />
                <rect className={styles.middle} x="0" y="48" width="112" height="16" />
                <rect className={styles.bottom} x="0" y="96" width="112" height="16" />
            </svg>
        </button>
    );
}
