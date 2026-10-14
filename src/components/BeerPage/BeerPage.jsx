import { Szyld } from '../Szyld/Szyld.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { OpinionForm } from '../OpinionForm/OpinionForm.jsx';
import { formatNumber } from '../../utils/format.js';
import { Slod, Chmiel, Kolba, Dodatki } from '../Ikony/Ikony.jsx';
import styles from './BeerPage.module.scss';

const nav = [{ label: 'Piwa', to: '/' }];

// Podstrona piwa pod kodem QR: kolor piwa → biel (skład) → czerń (opinia) → stopka.
export function BeerPage({ beer }) {
    const {
        batchNumber, name, styleName, color, accent, intro, description,
        malts, hops, yeast, adjuncts, extract, alcohol, ibu, brewFatherLink,
    } = beer;

    // Numer warki otwiera wiersz liczb — bez słowa „warka”.
    const params = [
        `#${batchNumber}`,
        `${formatNumber(extract)} °Blg`,
        `${formatNumber(alcohol)}% alc.`,
        `${ibu} IBU`,
    ];

    const composition = [
        { label: 'Słody', items: malts, Ikona: Slod },
        { label: 'Chmiele', items: hops, Ikona: Chmiel },
        { label: 'Drożdże', items: [yeast], Ikona: Kolba },
        ...(adjuncts?.length ? [{ label: 'Dodatki', items: adjuncts, Ikona: Dodatki }] : []),
    ];

    return (
        <>
            <Szyld position="center" column="text" nav={nav} />

            <main>
                <section
                    className={styles.beer}
                    data-ground="beer"
                    style={{ '--beer-color': color, '--akcent': accent }}
                >
                    <header className={styles.nameBlock}>
                        <p className={styles.style}>{styleName}</p>
                        <h1 className={styles.name}>{name}</h1>
                    </header>

                    <ul className={styles.params} aria-label="Parametry">
                        {params.map(param => <li key={param}>{param}</li>)}
                    </ul>

                    <div className={styles.description}>
                        <p className={styles.intro}>{intro}</p>
                        {description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                </section>

                <section className={styles.composition} aria-labelledby="sklad">
                    <div className={styles.inner}>
                        <h2 className={styles.title} id="sklad">Skład</h2>
                        <dl className={styles.rows}>
                            {composition.map(({ label, items, Ikona }) => (
                                <div key={label} className={styles.row}>
                                    <dt>
                                        <Ikona className={styles.ikona} />
                                        {label}
                                    </dt>
                                    <dd>
                                        {items.map(item => <span key={item}>{item}</span>)}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        {brewFatherLink && (
                            <a
                                href={brewFatherLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.button}
                            >
                                Pełna receptura w Brewfather
                            </a>
                        )}
                    </div>
                </section>

                <section className={styles.opinion} data-ground="contrast" aria-labelledby="opinia">
                    <div className={styles.inner}>
                        <h2 className={styles.title} id="opinia">Jak ci smakowało?</h2>
                        <p className={styles.opinionLead}>
                            Pytam o cechy, nie o ocenę — odpowiedzi trafią do danych warki #{batchNumber}.
                        </p>
                        <OpinionForm batchNumber={batchNumber} />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
