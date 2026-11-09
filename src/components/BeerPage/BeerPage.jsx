import { Link } from 'react-router-dom';
import { Szyld } from '../Szyld/Szyld.jsx';
import { Footer } from '../Footer/Footer.jsx';
import { OpinionForm } from '../OpinionForm/OpinionForm.jsx';
import { formatNumber } from '../../utils/format.js';
import { Slod, Chmiel, Kolba, Dodatki } from '../Ikony/Ikony.jsx';
import { Szew } from '../Szew/Szew.jsx';
import { Faktura } from '../Faktura/Faktura.jsx';
import { Powrot } from '../Znak/Powrot.jsx';
import { opisPiwa, skladnik, useJezyk, useTeksty } from '../../i18n/teksty.js';
import styles from './BeerPage.module.scss';

// Podstrona piwa pod kodem QR: kolor piwa → biel (skład) → czerń (receptura i ocena) → stopka.
export function BeerPage({ beer }) {
    const {
        batchNumber, name, styleName, color, accent, fabric,
        malts, hops, yeast, adjuncts, extract, alcohol, ibu, recipeUrl,
    } = beer;
    const { lang } = useJezyk();
    const t = useTeksty();
    const { intro, description } = opisPiwa(beer, lang);
    const nav = [{ label: t.nav.piwa, to: '/' }];

    // Wiersz parametrów ma trzy kolumny; numer warki stoi osobno pod nazwą.
    const params = [
        `${formatNumber(extract, 1, lang)} °Blg`,
        `${formatNumber(alcohol, 1, lang)}% alc.`,
        `${ibu} IBU`,
    ];

    const composition = [
        { label: t.piwo.slody, items: malts, Ikona: Slod },
        { label: t.piwo.chmiele, items: hops, Ikona: Chmiel },
        { label: t.piwo.drozdze, items: [yeast], Ikona: Kolba },
        ...(adjuncts?.length ? [{ label: t.piwo.dodatki, items: adjuncts, Ikona: Dodatki }] : []),
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
                            <span>{t.nav.piwa}</span>
                        </Link>
                    </div>
                    <header className={styles.nameBlock}>
                        <p className={styles.style}>{styleName}</p>
                        <h1 className={styles.name}>{name}</h1>
                        <p className={styles.batch}>#{batchNumber}</p>
                    </header>

                    <ul className={styles.params} aria-label={t.piwo.parametry}>
                        {params.map(param => <li key={param}>{param}</li>)}
                    </ul>

                    <div className={styles.description}>
                        {intro && <p className={styles.intro}>{intro}</p>}
                        {description.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                </section>

                <Szew from="var(--beer-color)" to="var(--surface-100)" />

                <section className={styles.composition} aria-labelledby="sklad">
                    <div className={styles.inner}>
                        <h2 className={styles.title} id="sklad">{t.piwo.sklad}</h2>
                        <dl className={styles.rows}>
                            {composition.map(({ label, items, Ikona }) => (
                                <div key={label} className={styles.row}>
                                    <dt>
                                        <Ikona className={styles.ikona} />
                                        <span>{label}</span>
                                    </dt>
                                    <dd>
                                        {items.map(item => <span key={item}>{skladnik(item, lang)}</span>)}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </section>

                <Szew from="var(--surface-100)" to="var(--contrast)" />

                {/* Jeden pas: najpierw dajemy (receptura), potem prosimy (ocena). */}
                <section className={styles.opinion} data-ground="contrast" data-textured aria-label={t.piwo.recepturaIOcena}>
                    <Faktura ground="contrast" />
                    <div className={styles.inner}>
                        <div className={styles.recipe}>
                            <h2 className={`${styles.title} ${styles.printed}`}>{t.piwo.uwarz}</h2>
                            <p className={styles.recipeText}>{t.piwo.recepturaTekst}</p>
                            {recipeUrl ? (
                                <a href={recipeUrl} target="_blank" rel="noopener noreferrer" className={styles.button}>
                                    {t.piwo.recepturaZobacz}
                                </a>
                            ) : (
                                <span className={styles.buttonEmpty} role="link" aria-disabled="true">
                                    {t.piwo.recepturaWkrotce}
                                </span>
                            )}
                            <p className={styles.note}>{t.piwo.recepturaNota}</p>
                        </div>

                        <h2 className={styles.ask} id="opinia">{t.piwo.smakowalo}</h2>
                        <p className={styles.opinionLead}>{t.piwo.ocenaLead(batchNumber)}</p>
                        <OpinionForm batchNumber={batchNumber} />
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
