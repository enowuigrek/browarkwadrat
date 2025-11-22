import React from 'react';
import { FaFacebook, FaEnvelope } from 'react-icons/fa';
import styles from './Footer.module.scss';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.patternOverlay}></div>
            <div className={styles.footerContent}>
                <div className={styles.socialLinks}>
                    <a
                        href="https://www.facebook.com/browarkwadrat/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <span className={styles.iconCircle}>
                            <FaFacebook />
                        </span>
                        <span className={styles.linkText}>Kwadrat</span>
                    </a>
                    <a
                        href="https://www.facebook.com/bractwopiwneczestochowa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <span className={styles.iconCircle}>
                            <FaFacebook />
                        </span>
                        <span className={styles.linkText}>Bractwo Piwne</span>
                    </a>
                    <a
                        href="mailto:enowuigrek@gmail.com"
                        className={styles.socialLink}
                    >
                        <span className={styles.iconCircle}>
                            <FaEnvelope />
                        </span>
                        <span className={styles.linkText}>enowuigrek@gmail.com</span>
                    </a>
                </div>
                <div className={styles.copyright}>
                    <span>&copy; 2025 Browar Kwadrat</span>
                </div>
            </div>
        </footer>
    );
}
