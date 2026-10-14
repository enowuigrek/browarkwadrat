import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Metka } from '../Metka/Metka.jsx';
import { MenuButton } from './MenuButton.jsx';
import { Menu } from './Menu.jsx';
import { useHideOnScroll } from '../../hooks/useHideOnScroll.js';
import { useGroundUnderMetka } from '../../hooks/useGroundUnderMetka.js';
import { useTask, useTaskMode } from '../../hooks/useTaskMode.js';
import styles from './Szyld.module.scss';

const PHONE = '(max-width: 640px)'; // layout.bp-phone

// Szyld niesie wyłącznie nawigację: pozycja aktywna pełną siłą, reszta przygaszona.
// Na telefonie nawigacja chowa się pod przycisk menu.
export function Szyld({ position = 'side', column = 'page', nav = [] }) {
    const { hidden, past } = useHideOnScroll();
    const inverted = useGroundUnderMetka();
    const buttonInverted = useGroundUnderMetka('[data-menu-icon]');
    const [menuOpen, setMenuOpen] = useState(false);
    const menuId = useId();
    const buttonRef = useRef(null);

    // Otwarte menu to tryb zadania, tak jak rozwinięty formularz oceny.
    useTask(menuOpen);
    const away = useTaskMode();

    const closeMenu = useCallback(() => setMenuOpen(false), []);

    // Po zamknięciu fokus wraca na przycisk; powyżej bp-phone menu nie istnieje.
    useEffect(() => {
        if (!menuOpen) return;
        const query = window.matchMedia(PHONE);
        const onChange = () => !query.matches && closeMenu();
        query.addEventListener('change', onChange);
        const button = buttonRef.current;
        return () => {
            query.removeEventListener('change', onChange);
            button?.querySelector('button')?.focus();
        };
    }, [menuOpen, closeMenu]);

    return (
        <>
            <Metka position={position} column={column} hidden={hidden} docked={past} inverted={inverted} away={away}>
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

            <div ref={buttonRef}>
                <MenuButton
                    open={menuOpen}
                    away={away && !menuOpen}
                    inverted={buttonInverted}
                    controls={menuId}
                    onClick={() => setMenuOpen(open => !open)}
                />
            </div>
            {menuOpen && <Menu id={menuId} nav={nav} onClose={closeMenu} />}
        </>
    );
}
