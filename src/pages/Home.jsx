import { Link } from 'react-router-dom';
import { Szyld } from '../components/Szyld/Szyld.jsx';
import { Footer } from '../components/Footer/Footer.jsx';
import { publishedBeers } from '../data/beersData.js';
import { formatNumber } from '../utils/format.js';
import styles from './Home.module.scss';

const nav = [
    { label: 'Piwa', to: '#piwa', active: true },
    { label: 'Narzędzie', to: '#narzedzie' },
];

export function Home() {
    return (
        <>
            <Szyld position="side" nav={nav} />

            <main>
                <section className={styles.hero}>
                    <p className={styles.label}>Domowy browar · Częstochowa</p>
                    <h1 className={styles.title}>Browar Kwadrat</h1>
                    <p className={styles.lead}>
                        To miejsce, w którym opisuję swoje piwa, żeby każdy, kto dostanie butelkę, wiedział
                        co pije.
                    </p>
                </section>

                <section className={styles.shelf} id="piwa" aria-labelledby="piwa-tytul">
                    <h2 className={styles.label} id="piwa-tytul">Na półce</h2>
                    <ul className={styles.tiles}>
                        {[...publishedBeers].reverse().map(beer => (
                            <li key={beer.batchNumber}>
                                <Link
                                    to={`/${beer.slug}`}
                                    className={styles.tile}
                                    data-ground="beer"
                                    style={{ '--beer-color': beer.color }}
                                >
                                    <span className={styles.batch}>#{beer.batchNumber}</span>
                                    <span className={styles.name}>{beer.name}</span>
                                    <span className={styles.style}>{beer.styleName}</span>
                                    <span className={styles.params}>
                                        {formatNumber(beer.extract)} °Blg · {formatNumber(beer.alcohol)}% alc. · {beer.ibu} IBU
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className={styles.band} data-ground="contrast" id="narzedzie" aria-labelledby="narzedzie-tytul">
                    <div className={styles.bandInner}>
                        <p className={styles.label}>Za kulisami</p>
                        <h2 className={styles.bandTitle} id="narzedzie-tytul">Narzędzie piwowarskie</h2>
                        <p className={styles.bandText}>
                            Piwowarstwo to liczby: temperatura co dwie godziny, Brix, litry, dawki w ml/l.
                            Każda warka ma swój zeszyt w prywatnym narzędziu — stamtąd pochodzą
                            parametry na etykietach i na tej stronie.
                        </p>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
