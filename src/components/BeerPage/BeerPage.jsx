import { Szyld } from '../Szyld/Szyld.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { OpinionForm } from '../OpinionForm/OpinionForm.jsx';
import { formatNumber } from '../../utils/format.js';
import styles from './BeerPage.module.scss';

const nav = [{ label: 'Piwa', to: '/' }];

// Podstrona piwa pod kodem QR: kolor piwa → biel (skład) → czerń (opinia) → stopka.
export function BeerPage({ beer }) {
    const {
        batchNumber, name, styleName, color, accent, intro, description,
        malts, hops, yeast, adjuncts, extract, alcohol, ibu, brewFatherLink,
    } = beer;

    const params = [
        `${formatNumber(extract)} °Blg`,
        `${formatNumber(alcohol)}% alc.`,
        `${ibu} IBU`,
    ];

    const composition = [
        { label: 'Słody', items: malts },
        { label: 'Chmiele', items: hops },
        { label: 'Drożdże', items: [yeast] },
        ...(adjuncts?.length ? [{ label: 'Dodatki', items: adjuncts }] : []),
    ];

    return (
        <>
            <Szyld position="center" nav={nav} />

            <main>
                <section
                    className={styles.beer}
                    data-ground="beer"
                    style={{ '--beer-color': color, '--akcent': accent }}
                >
                    <header className={styles.nameBlock}>
                        <p className={styles.style}>{styleName}</p>
                        <h1 className={styles.name}>{name}</h1>
                        <p className={styles.batch}>warka #{batchNumber}</p>
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
                            {composition.map(({ label, items }) => (
                                <div key={label} className={styles.row}>
                                    <dt>{label}</dt>
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
