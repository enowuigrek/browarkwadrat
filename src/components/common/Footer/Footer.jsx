import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
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
                        >
                        <FaFacebookSquare />
                        <span>Bractwo Piwne Częstochowa</span>
                    </a>
                    <a
                        href="https://www.facebook.com/browarkwadrat/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                    <FaFacebookSquare />
                    <span>Browar Kwadrat</span>
                    </a>
                </div>
                <div className={styles.copyright}>
                    <a href="mailto:enowuigrek@gmail.com">
                        <span>&copy; enowuigrek 2025</span>
                    </a>
                </div>
            </div>
        </footer>
    );
}