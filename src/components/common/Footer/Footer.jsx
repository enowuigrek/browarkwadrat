import React from 'react';
import { FaFacebook, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.scss';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.socialLinks}>
                    <a
                        href="https://www.facebook.com/bractwopiwneczestochowa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        title="Bractwo Piwne Częstochowa"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="https://www.facebook.com/browarkwadrat/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        title="Browar Kwadrat"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="mailto:enowuigrek@gmail.com"
                        className={styles.socialLink}
                        title="Email"
                    >
                        <FaEnvelope />
                    </a>
                </div>
                <div className={styles.copyright}>
                    <span>&copy; 2025 Browar Kwadrat</span>
                </div>
            </div>
        </footer>
    );
}
