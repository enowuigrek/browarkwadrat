import styles from './BeerDescription.module.scss';
import {FaFacebookSquare} from "react-icons/fa";

export function BeerDescription({ beer }) {
    const {
        batchNumber,
        name,
        description,
        malts,
        hops,
        yeast,
        adjuncts,
        extract,
        alcohol,
        ibu,
        brewFatherLink
    } = beer;

    return (
        <div className="container">
            <h2>#{batchNumber} {name}</h2>
            <div className={styles.parameters}>
                <div className={styles.parameter}>
                    <span>~{extract} BLG</span>
                    <label>ekstrakt</label>
                </div>
                <div className={styles.parameter}>
                    <span>~{alcohol}%</span>
                    <label>alkohol</label>
                </div>
                <div className={styles.parameter}>
                    <span>~{ibu} IBU</span>
                    <label>Goryczka</label>
                </div>
            </div>
            <p>{description}</p>
            <div className={styles.ingredientsSection}>
                <h3>Surowce</h3>
                <ul className={styles.list}>
                    <li>Słody: {malts.join(', ')}</li>
                    <li>Chmiele: {hops.join(', ')}</li>
                    <li>Drożdże: {yeast}</li>
                    {adjuncts?.length > 0 && (
                        <li>Dodatki: {adjuncts.join(', ')}</li>
                    )}
                </ul>
            </div>
            <p className={styles.summary}>
                Jeśli wygrałeś to piwo w losowaniu cegiełek – gratulacje!
            </p>

            <div className={styles.recipeLink}>
                <a
                    href={brewFatherLink}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Pełna receptura w Brewfather
                </a>
            </div>

            <footer className={styles.footer}>
                <div className={styles.links}>
                    <a
                        href="https://www.facebook.com/bractwopiwneczestochowa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                    >
                        <FaFacebookSquare className={styles.icon}/>
                        Bractwo Piwne Częstochowa
                    </a>
                    <a
                        href="https://www.facebook.com/browarkwadrat/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.iconLink}
                    >
                        <FaFacebookSquare className={styles.icon}/>
                        Browar Kwadrat
                    </a>
                </div>
                <span>
                    <a href="mailto:enowuigrek@gmail.com" target="_blank" rel="noopener noreferrer">enowuigrek@gmail.com</a>
                </span>

            </footer>
        </div>
    );
}