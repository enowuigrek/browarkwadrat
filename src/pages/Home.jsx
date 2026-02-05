import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaGithub, FaEnvelope } from 'react-icons/fa';
import { GiWheat, GiHops, GiBeerBottle } from 'react-icons/gi';
import beersData from '../data/beersData.js';
import styles from './Home.module.scss';

export function Home() {
    // Funkcja do generowania slug z nazwy piwa
    const generateSlug = (name) => {
        return name.toLowerCase()
            .replace(/\s+/g, '')
            .replace(/[^a-z0-9]/g, '');
    };

    // Stats dla hero section
    const totalBeers = beersData.length;
    const avgAlcohol = (beersData.reduce((sum, beer) => sum + beer.alcohol, 0) / totalBeers).toFixed(1);
    const latestBatch = Math.max(...beersData.map(beer => beer.batchNumber));

    return (
        <div className={styles.container}>
            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.heroHeader}>
                        <h1 className={styles.heroTitle}>Browar Kwadrat</h1>
                        <p className={styles.heroSubtitle}>Domowe piwa rzemieślnicze z pasją i tradycją</p>
                        <p className={styles.heroDescription}>
                            Każde piwo to historia. Każda butelka to podróż przez smaki i aromaty.
                            Zeskanuj QR kod z etykiety, aby poznać szczegóły każdego warunku.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statIcon}>
                                <GiBeerBottle />
                            </div>
                            <div className={styles.statContent}>
                                <div className={styles.statNumber}>{totalBeers}</div>
                                <div className={styles.statLabel}>Piwa</div>
                            </div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statIcon}>
                                <GiWheat />
                            </div>
                            <div className={styles.statContent}>
                                <div className={styles.statNumber}>#{latestBatch}</div>
                                <div className={styles.statLabel}>Ostatni batch</div>
                            </div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statIcon}>
                                <GiHops />
                            </div>
                            <div className={styles.statContent}>
                                <div className={styles.statNumber}>{avgAlcohol}%</div>
                                <div className={styles.statLabel}>Średnia moc</div>
                            </div>
                        </div>
                    </div>

                    <a href="#beers" className={styles.ctaButton}>
                        <span>Poznaj nasze piwa</span>
                    </a>
                </div>
            </div>

            {/* Beers Section */}
            <div className={styles.beersSection}>
                <div className={styles.sectionHeader}>
                    <h2>Nasze Piwa</h2>
                    <p>Każde piwo ma swoją historię i unikalny charakter</p>
                </div>

                <div className={styles.beersGrid} id="beers">
                    {beersData.map(beer => {
                        const slug = generateSlug(beer.name);
                        return (
                            <Link
                                key={beer.id}
                                to={`/${slug}`}
                                className={styles.beerCard}
                            >
                                <div className={styles.beerCardHeader}>
                                    <div className={styles.batchBadge}>
                                        <span>#{beer.batchNumber}</span>
                                    </div>
                                    <h3 className={styles.beerName}>{beer.name}</h3>
                                    {beer.styleName && (
                                        <p className={styles.beerStyle}>{beer.styleName}</p>
                                    )}
                                </div>

                                <div className={styles.beerCardContent}>
                                    <p className={styles.beerDescription}>
                                        {beer.description.length > 120
                                            ? `${beer.description.substring(0, 120)}...`
                                            : beer.description
                                        }
                                    </p>
                                </div>

                                <div className={styles.beerCardFooter}>
                                    <div className={styles.beerParams}>
                                        <span className={styles.param}>
                                            <GiWheat /> {beer.extract}° BLG
                                        </span>
                                        <span className={styles.param}>
                                            {beer.alcohol}% ABV
                                        </span>
                                        <span className={styles.param}>
                                            <GiHops /> {beer.ibu} IBU
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* About Section */}
            <div className={styles.aboutSection}>
                <div className={styles.aboutCard}>
                    <div className={styles.aboutContent}>
                        <h2>O Browarze Kwadrat</h2>
                        <p>
                            Browar Kwadrat to domowy projekt, w którym eksperymentujemy z różnymi
                            stylami i składnikami, by dostarczyć wyjątkowych wrażeń smakowych.
                            Wspólnie warzymy, degustujemy i doskonalimy nasze receptury.
                        </p>
                        <p>
                            Każde piwo to efekt pasji, eksperymentów i starań o jak najlepszy smak.
                            Używamy wysokiej jakości składników i sprawdzonych technik warzenia.
                        </p>
                        <Link to="/o-browarze" className={styles.aboutButton}>
                            <span>Dowiedz się więcej</span>
                        </Link>
                    </div>
                </div>
            </div>

{/*            /!* Footer *!/*/}
{/*            <footer className={styles.footer}>*/}
{/*                <div className={styles.footerContent}>*/}
{/*                    <div className={styles.socialLinks}>*/}

{/*                        href="https://www.facebook.com/bractwopiwneczestochowa"*/}
{/*                        target="_blank"*/}
{/*                        rel="noopener noreferrer"*/}
{/*                        className={styles.socialLink}*/}
{/*                        >*/}
{/*                        <FaFacebookSquare />*/}
{/*                        <span>Bractwo Piwne Częstochowa</span>*/}
{/*                    </a>*/}

{/*                    href="https://www.facebook.com/browarkwadrat/"*/}
{/*                    target="_blank"*/}
{/*                    rel="noopener noreferrer"*/}
{/*                    className={styles.socialLink}*/}
{/*                    >*/}
{/*                    <FaFacebookSquare />*/}
{/*                    <span>Browar Kwadrat</span>*/}
{/*                </a>*/}
{/*        </div>*/}
{/*    <div className={styles.copyright}>*/}
{/*        <a href="mailto:enowuigrek@gmail.com">*/}
{/*            <FaEnvelope />*/}
{/*            &copy; enowuigrek 2025*/}
{/*        </a>*/}
{/*    </div>*/}
{/*</div>*/}
{/*</footer>*/}
</div>
);
}