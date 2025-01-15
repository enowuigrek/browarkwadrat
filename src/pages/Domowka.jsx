import { FaFacebookSquare } from 'react-icons/fa'
import styles from './Domowka.module.css'

function Domowka() {
    return (
        <div className={styles.container}>
            <h2>#93 Domówka</h2>
            <p>
                Domówka to lekkie, przyjemne piwo na amerykańskim oraz nowozelandzkim chmielu,
                ale w subtelnym wydaniu. Delikatna goryczka i wyważony profil słodowy
                sprawiają, że jest to piwo, imprezowo, serialowo, spotkaniowe.
                Tak zwane piwo "codzienne", do wypicia z przyjemnością, bez uniesień.
                Oczywiście nie polecam picia piwa codziennie. Tak się tylko mówi.
            </p>
            <p>
                W smaku wyczujesz połączenie łagodnej, zbożowej bazy słodowej, w zapachu lekkie nuty owoców tropikalnych uzyskanych z chmielu.
            </p>

            <h3>Surowce</h3>
            <ul className={styles.list}>
                <li>
                    <strong>Słody:</strong> Pale Ale, Abbey Malt
                </li>
                <li>
                    <strong>Chmiele:</strong> Simcoe (USA), Riwaka (NZ), Mosaic (USA), Centennial (USA), Ekuanot (USA)
                </li>
                <li>
                    <strong>Drożdże:</strong> US-05
                </li>
            </ul>

            <h3>Parametry</h3>
            <ul className={styles.list}>
                <li><strong>Ekstrakt:</strong> ~11,1 °P</li>
                <li><strong>Alkohol:</strong> ~4,4%</li>
                <li><strong>Goryczka:</strong> ~36 IBU</li>
            </ul>

            <p className={styles.summary}>
                Jeśli wygrałeś to piwo w losowaniu cegiełek – gratulacje!
            </p>

            <div className={styles.recipeLink}>
                <a
                    href="https://share.brewfather.app/2esywTrJXJ1xSw"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Pełna receptura w Brewfather
                </a>
            </div>

            <div className={styles.event}>
                <img
                    src="/images/event.png"
                    alt="Degustacja Portretów - Sobota"
                    className={styles.eventImage}
                />
                <a
                    href="https://browarkwadrat.pl/wydarzenie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.eventLink}
                >
                    Degustacja Portretów - Najbliższy Sobota
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
    )
}

export default Domowka