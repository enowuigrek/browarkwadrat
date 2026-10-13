import { Link } from 'react-router-dom';
import { Metka } from '../Metka/Metka.jsx';
import { useHideOnScroll } from '../../hooks/useHideOnScroll.js';
import styles from './Szyld.module.scss';

// Szyld niesie wyłącznie nawigację: pozycja aktywna pełną siłą, reszta przygaszona.
// Ikony serwisów społecznościowych są w stopce, nie w znaku marki.
export function Szyld({ position = 'side', nav = [] }) {
    const hidden = useHideOnScroll();

    return (
        <Metka position={position} hidden={hidden}>
            <nav className={styles.nav} aria-label="Główna">
                {nav.map(({ label, to, active }) =>
                    to.startsWith('/') ? (
                        <Link key={label} to={to} className={styles.link} aria-current={active ? 'page' : undefined}>
                            {label}
                        </Link>
                    ) : (
                        <a key={label} href={to} className={styles.link} aria-current={active ? 'page' : undefined}>
                            {label}
                        </a>
                    )
                )}
            </nav>
        </Metka>
    );
}
