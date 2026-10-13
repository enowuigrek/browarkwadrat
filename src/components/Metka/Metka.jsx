import { Znak } from '../Znak/Znak.jsx';
import styles from './Metka.module.scss';

// Szyld + zwisająca z niego metka. Jedna czarna sylwetka, jeden wspólny cień.
// Treść szyldu i logikę chowania dostarcza rodzic (Metka.md → Czego komponent nie dostarcza).
export function Metka({ position = 'side', hidden = false, children }) {
    return (
        <div className={styles.wrapper} data-hidden={hidden || undefined}>
            <div className={styles.szyld}>
                <div className={styles.column} data-position={position}>
                    <div className={styles.metka}>
                        <Znak className={styles.znak} />
                    </div>
                    <div className={styles.content}>{children}</div>
                </div>
            </div>
        </div>
    );
}
