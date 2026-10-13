import { Link } from 'react-router-dom';
import { FacebookZnak } from '../Znak/FacebookZnak.jsx';
import { FACEBOOK_URL } from '../../data/kontakt.js';
import { Metka } from '../Metka/Metka.jsx';
import { useHideOnScroll } from '../../hooks/useHideOnScroll.js';
import styles from './Szyld.module.scss';

// Nawigacja w szyldzie: pozycja aktywna pełną siłą, reszta przygaszona,
// na końcu kwadratowa ikona Facebooka.
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
                {FACEBOOK_URL && (
                    <a
                        href={FACEBOOK_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.facebook}
                        aria-label="Browar Kwadrat na Facebooku"
                    >
                        <FacebookZnak className={styles.facebookZnak} />
                    </a>
                )}
            </nav>
        </Metka>
    );
}
