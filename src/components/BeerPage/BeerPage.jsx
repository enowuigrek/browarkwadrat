import { Link } from 'react-router-dom';
import { Szyld } from '../Szyld/Szyld.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { OpinionForm } from '../OpinionForm/OpinionForm.jsx';
import { formatNumber } from '../../utils/format.js';
import { Slod, Chmiel, Kolba, Dodatki } from '../Ikony/Ikony.jsx';
import { Szew } from '../Szew/Szew.jsx';
import { Faktura } from '../Faktura/Faktura.jsx';
import { Powrot } from '../Znak/Powrot.jsx';
import styles from './BeerPage.module.scss';

const nav = [{ label: 'Piwa', to: '/' }];

// Podstrona piwa pod kodem QR: kolor piwa → biel (skład) → czerń (receptura i ocena) → stopka.
export function BeerPage({ beer }) {
    const {
        batchNumber, name, styleName, color, accent, fabric, intro, description,
        malts, hops, yeast, adjuncts, extract, alcohol, ibu, recipeUrl,
    } = beer;

    // Wiersz parametrów ma trzy kolumny; numer warki stoi osobno pod nazwą.
    const params = [
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

            <main style={{ '--beer-color': color, '--akcent': accent }}>
                <section className={styles.beer} data-ground="beer" data-textured>
                    <Faktura ground="beer" fabric={fabric} />
                    {/* Wchodzi się tu z kodu QR, więc przeglądarka nie ma dokąd wrócić — własny powrót. */}
                    <div className={styles.backRow}>
                        <Link to="/" className={styles.back}>
                            <Powrot className={styles.backZnak} />
                            <span>Piwa</span>
                        </Link>
                    </div>
                    <header className={styles.nameBlock}>
                        <p className={styles.style}>{styleName}</p>
                        <h1 className={styles.name}>{name}</h1>
                        <p className={styles.batch}>#{batchNumber}</p>
                    </header>

                    <ul className={styles.params} aria-label="Parametry">
                        {params.map(param => <li key={param}>{param}</li>)}
                    </ul>

                    <div className={styles.description}>
                        <p className={styles.intro}>{intro}</p>
                        {description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                </section>

                <Szew from="var(--beer-color)" to="var(--surface-100)" />

                <section className={styles.composition} aria-labelledby="sklad">
                    <div className={styles.inner}>
                        <h2 className={styles.title} id="sklad">Skład</h2>
                        <dl className={styles.rows}>
                            {composition.map(({ label, items, Ikona }) => (
                                <div key={label} className={styles.row}>
                                    <dt>
                                        <Ikona className={styles.ikona} />
                                        <span>{label}</span>
                                    </dt>
                                    <dd>
                                        {items.map(item => <span key={item}>{item}</span>)}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                <Szew from="var(--surface-100)" to="var(--contrast)" />

                {/* Jeden pas: najpierw dajemy (receptura), potem prosimy (ocena). */}
                <section className={styles.opinion} data-ground="contrast" data-textured aria-label="Receptura i ocena">
                    <Faktura ground="contrast" />
                    <div className={styles.inner}>
                        <div className={styles.recipe}>
                            <h2 className={`${styles.title} ${styles.printed}`}>Uwarz sobie</h2>
                            <p className={styles.recipeText}>
                                Pełna receptura z krokami, czasami i temperaturami. Otworzy się w narzędziu.
                            </p>
                            {recipeUrl ? (
                                <a href={recipeUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
                                    Zobacz recepturę
                                </a>
                            ) : (
                                <span className={styles.buttonEmpty} role="link" aria-disabled="true">
                                    Receptura wkrótce
                                </span>
                            )}
                            <p className={styles.note}>Przycisk zapala się, kiedy piwo ma recepturę w narzędziu.</p>
                        </div>

                        <h2 className={styles.ask} id="opinia">Jak ci smakowało?</h2>
                        <p className={styles.opinionLead}>
                            Pytam o cechy, nie o ocenę. Odpowiedzi trafią do danych warki #{batchNumber}.
                        </p>
                        <OpinionForm batchNumber={batchNumber} />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
