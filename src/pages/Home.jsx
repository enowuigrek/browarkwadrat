import React from 'react';
import { GiBeerBottle } from 'react-icons/gi';
import styles from './Home.module.scss';

export function Home() {
    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    {/* Logo placeholder - kwadrat */}
                    <div className={styles.logoSquare}>
                        <GiBeerBottle className={styles.logoIcon} />
                    </div>

                    <h1 className={styles.title}>Browar Kwadrat</h1>
                    <p className={styles.subtitle}>Domowe piwa rzemieślnicze z Częstochowy</p>

                    <div className={styles.divider}></div>

                    <div className={styles.description}>
                        <p>
                            Browar Kwadrat to domowy projekt, w którym eksperymentujemy z różnymi
                            stylami i składnikami, tworząc unikalne piwa rzemieślnicze.
                        </p>
                        <p>
                            Każde piwo ma swój QR kod - zeskanuj z etykiety,
                            aby poznać pełną historię i szczegóły danej warki.
                        </p>
                    </div>

                    {/* Placeholder section - do rozbudowy */}
                    <div className={styles.infoSection}>
                        <div className={styles.infoCard}>
                            <h3>O nas</h3>
                            <p>
                                Pasjonaci dobrego piwa. Warzymy z sercem i dbałością o szczegóły.
                                Każda warka to nowa przygoda i eksperyment smakowy.
                            </p>
                        </div>

                        <div className={styles.infoCard}>
                            <h3>Nasz proces</h3>
                            <p>
                                Używamy wysokiej jakości słodów, chmielu i drożdży.
                                Precyzyjnie kontrolujemy każdy etap warzenia i fermentacji.
                            </p>
                        </div>

                        <div className={styles.infoCard}>
                            <h3>QR na etykietach</h3>
                            <p>
                                Każda butelka zawiera kod QR prowadzący do pełnego opisu piwa:
                                składniki, parametry, historia warki.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}