import { Facebook } from '../Ikony/Facebook.jsx';
import { FACEBOOK_URL } from '../../data/kontakt.js';
import { useTeksty } from '../../i18n/teksty.js';
import styles from './Footer.module.scss';

// Stopka w dwóch piętrach o malejącej wadze (strona.md → Stopka):
// 1. marka i kontakt: logo po lewej, Facebook jako podpisany link po prawej;
// 2. pod kreską przynależność i drobny druk: Bractwo z podpisem po lewej, kolofon po prawej.
// Czysta czerń, bez faktury: stopka ma działać jak cisza po akapicie.
export function Footer() {
    const year = new Date().getFullYear();
    const t = useTeksty();

    return (
        <footer className={styles.footer} data-ground="contrast" id="kontakt">
            <div className={styles.column}>
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
                            <span>Facebook</span>
                        </a>
                    )}
                </div>

                <div className={styles.fine}>
                    <a
                        href="https://www.facebook.com/bractwopiwneczestochowa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.partner}
                    >
                        <span className={styles.partnerLabel}>{t.stopka.nalezy}</span>
                        <span className={styles.bractwo} role="img" aria-label="Bractwo Piwne Częstochowa" />
                    </a>
                    <p className={styles.colophon}>
                        {year} · <a href="https://lukasznowak.dev" target="_blank" rel="noopener noreferrer">lukasznowak.dev</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
