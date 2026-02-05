import React from 'react';
import { Link } from 'react-router-dom';
import beersData from '../data/beersData.js';
import styles from './Home.module.scss';

export function Home() {
    return (
        <div className={styles.homeContainer}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Witaj w Browarze Kwadrat</h1>
                    <p>Domowe piwa, które łączą tradycję z eksperymentem. Poznaj nasze smaki!</p>
                    <a href="#beers" className={styles.ctaButton}>
                        Zobacz nasze piwa
                    </a>
                </div>
            </section>

            {/* Beers Grid Section */}
            <section id="beers" className={styles.beersSection}>
                <h2>Nasze Piwa</h2>
                <div className={styles.beersGrid}>
                    {beersData.map(beer => {
                        const slug = beer.name.toLowerCase().replace(/\s+/g, '');
                        return (
                            <div key={beer.id} className={styles.beerCard}>
                                <Link to={`/${slug}`}>
                                    <h3>{beer.name}</h3>
                                    <p className={styles.styleName}>{beer.styleName}</p>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* About CTA Section */}
            <section className={styles.aboutCTA}>
                <h2>O Browarze Kwadrat</h2>
                <p>Jesteśmy domowym browarem pełnym pasji. Warsztaty, eksperymenty i najlepsze składniki.</p>
                <Link to="/o-browarze" className={styles.ctaLink}>
                    Dowiedz się więcej
                </Link>
            </section>
        </div>
    );
}