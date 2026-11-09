import { Link } from 'react-router-dom';
import { Szyld } from '../components/Szyld/Szyld.jsx';
import { Footer } from '../components/Footer/Footer.jsx';
import { useTeksty } from '../i18n/teksty.js';
import styles from './NotFound.module.scss';

export function NotFound() {
    const t = useTeksty();
    const nav = [{ label: t.nav.piwa, to: '/' }];

    return (
        <>
            <Szyld position="side" nav={nav} />
            <main className={styles.content}>
                <p className={styles.code}>404</p>
                <h1 className={styles.title}>{t.brak.tytul}</h1>
                <p className={styles.message}>{t.brak.tekst}</p>
                <Link to="/" className={styles.button}>{t.brak.wroc}</Link>
            </main>
            <Footer />
        </>
    );
}
