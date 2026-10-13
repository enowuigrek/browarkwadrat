import { Link } from 'react-router-dom';
import { Szyld } from '../components/Szyld/Szyld.jsx';
import { Footer } from '../components/Footer/Footer.jsx';
import styles from './NotFound.module.scss';

const nav = [{ label: 'Piwa', to: '/' }];

export function NotFound() {
    return (
        <>
            <Szyld position="side" nav={nav} />
            <main className={styles.content}>
                <p className={styles.code}>404</p>
                <h1 className={styles.title}>Nie znaleziono piwa</h1>
                <p className={styles.message}>Ta warka jeszcze nie istnieje. Może już została wypita?</p>
                <Link to="/" className={styles.button}>Wróć do browaru</Link>
            </main>
            <Footer />
        </>
    );
}
