import React from 'react';
import styles from './About.module.scss';

export function About() {
    return (
        <div className={styles.aboutContainer}>
            <h1>O Browarze Kwadrat</h1>
            <p>
                Browar Kwadrat to domowy projekt, w którym eksperymentujemy z różnymi stylami i
                składnikami, by dostarczyć Wam wyjątkowych wrażeń smakowych. Wspólnie warzymy,
                degustujemy i doskonalimy nasze receptury.
            </p>
            <p>
                Kontakt: <a href="mailto:enowuigrek@gmail.com">enowuigrek@gmail.com</a>
            </p>
        </div>
    );
}