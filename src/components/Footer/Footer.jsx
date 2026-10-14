import { Facebook } from '../Ikony/Facebook.jsx';
import { FACEBOOK_URL } from '../../data/kontakt.js';
import styles from './Footer.module.scss';

// Stopka w dwóch kolumnach, także na telefonie.
// Lewa: pełne logo, ikona Facebooka, kolofon. Prawa: znak Bractwa.
export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer} data-ground="contrast" id="kontakt">
            <div className={styles.column}>
                <div className={styles.left}>
                    <span className={styles.logo} role="img" aria-label="Browar Kwadrat" />
                    {FACEBOOK_URL && (
                        <a
                            href={FACEBOOK_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.facebook}
                            aria-label="Browar Kwadrat na Facebooku"
                        >
                            <Facebook className={styles.facebookIkona} />
                        </a>
                    )}
                    <p className={styles.colophon}>
                        <span>{year}</span>
                        <a href="https://lukasznowak.dev" target="_blank" rel="noopener noreferrer">lukasznowak.dev</a>
                    </p>
                </div>
                <a
                    href="https://www.facebook.com/bractwopiwneczestochowa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.bractwo}
                    aria-label="Bractwo Piwne Częstochowa"
                />
            </div>
        </footer>
    );
}
