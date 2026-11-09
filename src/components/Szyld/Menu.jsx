import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Znak } from '../Znak/Znak.jsx';
import { Facebook } from '../Ikony/Facebook.jsx';
import { FACEBOOK_URL } from '../../data/kontakt.js';
import { useTeksty } from '../../i18n/teksty.js';
import styles from './Menu.module.scss';

// Nakładka menu na telefonie: pełny ekran w contrast, pierścień w lewym rogu
// (X w prawym to przycisk menu), pozycje stylem title, na dole loga i Facebook.
// Wjeżdża z góry jak rozwijany szyld, pozycje wchodzą po kolei; zamykanie tą samą drogą.
export function Menu({ id, nav, closing, onClose, onClosed }) {
    const listRef = useRef(null);
    const t = useTeksty();

    // Bez ruchu (prefers-reduced-motion) animacja się nie odpala, więc nie ma na co czekać.
    useEffect(() => {
        if (closing && window.matchMedia('(prefers-reduced-motion: reduce)').matches) onClosed();
    }, [closing, onClosed]);

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
        <div
            id={id}
            className={styles.menu}
            data-closing={closing || undefined}
            role="dialog"
            aria-modal="true"
            aria-label={t.menu.menu}
            onAnimationEnd={event => {
                if (closing && event.target === event.currentTarget) onClosed();
            }}
        >
            <div className={styles.bar}>
                <Znak className={styles.znak} />
            </div>

            <ul className={styles.list} ref={listRef}>
                {nav.map(({ label, to, active }, i) => (
                    <li key={label} style={{ '--i': i }}>
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

            {/* Dół nakładki powtarza stopkę w skrócie: marka z kontaktem, pod kreską Bractwo. */}
            <div className={styles.marks} style={{ '--i': nav.length }}>
                <div className={styles.brand}>
                    <span className={styles.logo} role="img" aria-label="Browar Kwadrat" />
                    {FACEBOOK_URL && (
                        <a
                            href={FACEBOOK_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.facebook}
                            aria-label={t.facebook}
                        >
                            <Facebook className={styles.facebookIkona} />
                        </a>
                    )}
                </div>
                <a
                    href="https://www.facebook.com/bractwopiwneczestochowa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.partner}
                >
                    <span className={styles.partnerLabel}>{t.stopka.nalezy}</span>
                    <span className={styles.bractwo} role="img" aria-label="Bractwo Piwne Częstochowa" />
                </a>
            </div>
        </div>
    );
}
