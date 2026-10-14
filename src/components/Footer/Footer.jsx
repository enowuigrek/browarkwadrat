import { FACEBOOK_URL } from '../../data/kontakt.js';
import styles from './Footer.module.scss';

// Stopka: kreska od góry, pełne logo po lewej, znak Bractwa po prawej,
// jedna linijka kolofonu. Logo niesie nazwę samo — bez powtarzania jej tekstem.
export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer} data-ground="contrast" id="kontakt">
            <div className={styles.column}>
                <div className={styles.marks}>
                    <span className={styles.logo} role="img" aria-label="Browar Kwadrat" />
                    <a
                        href="https://www.facebook.com/bractwopiwneczestochowa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.bractwo}
                        aria-label="Bractwo Piwne Częstochowa"
                    />
                </div>
                <p className={styles.colophon}>
                    <span>{year}</span>
                    <a href="https://lukasznowak.dev" target="_blank" rel="noopener noreferrer">lukasznowak.dev</a>
                    {FACEBOOK_URL && (
                        <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">Facebook</a>
                    )}
                </p>
            </div>
        </footer>
    );
}
