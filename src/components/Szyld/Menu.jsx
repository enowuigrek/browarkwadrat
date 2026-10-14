import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Znak } from '../Znak/Znak.jsx';
import { FacebookZnak } from '../Znak/FacebookZnak.jsx';
import { FACEBOOK_URL } from '../../data/kontakt.js';
import styles from './Menu.module.scss';

// Nakładka menu na telefonie: pełny ekran w contrast, pierścień w lewym rogu
// (X w prawym to przycisk menu), pozycje stylem title, na dole Facebook.
export function Menu({ id, nav, onClose }) {
    const listRef = useRef(null);

    useEffect(() => {
        listRef.current?.querySelector('a')?.focus();

        const onKey = (event) => {
            if (event.key === 'Escape') onClose();
        };
        const { overflow } = document.body.style;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = overflow;
            document.removeEventListener('keydown', onKey);
        };
    }, [onClose]);

    return (
        <div id={id} className={styles.menu} role="dialog" aria-modal="true" aria-label="Menu">
            <div className={styles.bar}>
                <Znak className={styles.znak} />
            </div>

            <ul className={styles.list} ref={listRef}>
                {nav.map(({ label, to, active }) => (
                    <li key={label}>
                        {to.startsWith('/') ? (
                            <Link to={to} className={styles.link} aria-current={active ? 'page' : undefined} onClick={onClose}>
                                {label}
                            </Link>
                        ) : (
                            <a href={to} className={styles.link} aria-current={active ? 'page' : undefined} onClick={onClose}>
                                {label}
                            </a>
                        )}
                    </li>
                ))}
            </ul>

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
        </div>
    );
}
