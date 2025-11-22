import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer.jsx';
import styles from './NotFound.module.scss';

export function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.errorCode}>404</div>
                <h1 className={styles.title}>Nie znaleziono piwa</h1>
                <p className={styles.message}>
                    Ta warka jeszcze nie istnieje. Może już została wypita?
                </p>
                <Link to="/" className={styles.homeLink}>
                    Wróć do browaru
                </Link>
            </div>
            <Footer />
        </div>
    );
}
