import { Facebook } from '../Ikony/Facebook.jsx';
import { FACEBOOK_URL } from '../../data/kontakt.js';
import styles from './Footer.module.scss';

// Stopka w trzech piętrach: kto to zrobił (logo + Facebook), gdzie browar należy
// (Bractwo), drobny druk (kolofon na osi strony, pod kreską). Czysta czerń, bez faktury:
// fakturę niesie pas z treścią nad nią, a stopka ma działać jak cisza po akapicie.
export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer} data-ground="contrast" id="kontakt">
            <div className={styles.column}>
                <div className={styles.marks}>
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
                    </div>
                    <a
                        href="https://www.facebook.com/bractwopiwneczestochowa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.bractwo}
                        aria-label="Bractwo Piwne Częstochowa"
                    />
                </div>
                <p className={styles.colophon}>
                    {year} · <a href="https://lukasznowak.dev" target="_blank" rel="noopener noreferrer">lukasznowak.dev</a>
                </p>
            </div>
        </footer>
    );
}
