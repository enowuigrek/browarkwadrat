import { Link } from 'react-router-dom';
import { Szyld } from '../components/Szyld/Szyld.jsx';
import { Footer } from '../components/Footer/Footer.jsx';
import { publishedBeers } from '../data/beersData.js';
import { NARZEDZIE_URL } from '../data/kontakt.js';
import { formatNumber } from '../utils/format.js';
import { Szew } from '../components/Szew/Szew.jsx';
import { Faktura } from '../components/Faktura/Faktura.jsx';
import { useJezyk, useTeksty } from '../i18n/teksty.js';
import styles from './Home.module.scss';

export function Home() {
    const { lang } = useJezyk();
    const t = useTeksty();
    const nav = [
        { label: t.nav.piwa, to: '#piwa', active: true },
        { label: t.nav.narzedzie, to: '#narzedzie' },
    ];

    return (
        <>
            <Szyld position="side" nav={nav} />

            <main>
                <section className={styles.hero}>
                    <p className={styles.label}>{t.home.label}</p>
                    <h1 className={styles.title}>Kwadrat</h1>
                    <p className={styles.lead}>{t.home.lead}</p>
                </section>

                <section className={styles.shelf} id="piwa" aria-labelledby="piwa-tytul">
                    <h2 className={styles.label} id="piwa-tytul">{t.home.polka}</h2>
                    <ul className={styles.tiles}>
                        {[...publishedBeers].reverse().map(beer => (
                            <li key={beer.batchNumber}>
                                <Link
                                    to={`/${beer.slug}`}
                                    className={styles.tile}
                                    data-ground="beer"
                                    data-textured
                                    style={{ '--beer-color': beer.color, '--akcent': beer.accent }}
                                >
                                    <Faktura ground="beer" fabric={beer.fabric} />
                                    <span className={styles.batch}>#{beer.batchNumber}</span>
                                    <span className={styles.style}>{beer.styleName}</span>
                                    <span className={styles.name}>{beer.name}</span>
                                    <span className={styles.params}>
                                        {formatNumber(beer.extract, 1, lang)} °Blg · {formatNumber(beer.alcohol, 1, lang)}% alc. · {beer.ibu} IBU
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <Szew from="var(--surface-000)" to="var(--contrast)" />

                <section className={styles.band} data-ground="contrast" data-textured id="narzedzie" aria-labelledby="narzedzie-tytul">
                    <Faktura ground="contrast" />
                    <div className={styles.bandInner}>
                        <p className={styles.label}>{t.home.kulisy}</p>
                        <h2 className={styles.bandTitle} id="narzedzie-tytul">{t.home.narzedzieTytul}</h2>
                        <p className={styles.bandText}>{t.home.narzedzieTekst}</p>
                        {NARZEDZIE_URL && (
                            <a href={NARZEDZIE_URL} className={styles.button}>
                                {t.home.narzedzieOtworz}
                            </a>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
