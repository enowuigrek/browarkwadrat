import { Znak } from '../Znak/Znak.jsx';
import { FacebookZnak } from '../Znak/FacebookZnak.jsx';
import { FACEBOOK_URL } from '../../data/kontakt.js';
import styles from './Footer.module.scss';

// Stopka: pas kontrastu i kontaktu, ta sama na każdej powierzchni.
// Ikona Facebooka i znak Bractwa stoją osobno, każdy z własnym światłem wokół.
export function Footer() {
    return (
        <footer className={styles.footer} id="kontakt">
            <div className={styles.column}>
                <div className={styles.brand}>
                    <Znak className={styles.znak} />
                    <div>
                        <p className={styles.name}>Browar Kwadrat</p>
                        <p className={styles.meta}>Częstochowa</p>
                    </div>
                </div>
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
                <a
                    href="https://www.facebook.com/bractwopiwneczestochowa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.bractwo}
                    aria-label="Bractwo Piwne Częstochowa"
                />
                <p className={styles.author}>
                    Strona: <a href="https://lukasznowak.dev" target="_blank" rel="noopener noreferrer">lukasznowak.dev</a>
                </p>
            </div>
        </footer>
    );
}
