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
            <p>{description}</p>

            <h3>Surowce</h3>
            <ul className={styles.list}>
                <li>Słody: {malts.map((malt, index) =>
                    index === malts.length - 1 ? malt : malt + ', '
                )}</li>
                <li>Chmiele: {hops.map((hop, index) =>
                    index === hops.length - 1 ? hop : hop + ', '
                )}</li>
                <li>Drożdże: {yeast}</li>
                {adjuncts?.length > 0 && (
                    <li>Dodatki: {adjuncts.map((adjunct, index) =>
                        index === adjuncts.length - 1 ? adjunct : adjunct + ', '
                    )}</li>
                )}
            </ul>

            <h3>Parametry</h3>
            <ul className={styles.list}>
                <li>Ekstrakt: ~{extract} BLG</li>
                <li>Alkohol: ~{alcohol}%</li>
                <li>Goryczka: ~{ibu} IBU</li>
            </ul>
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
        </div>
    );
}