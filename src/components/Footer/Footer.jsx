import { Znak } from '../Znak/Znak.jsx';
import styles from './Footer.module.scss';

// Czarna stopka, ta sama na każdej powierzchni.
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
