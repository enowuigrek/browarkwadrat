import { Znak } from '../Znak/Znak.jsx';
import styles from './Metka.module.scss';

// Szyld + zwisająca z niego metka. Jedna czarna sylwetka, jeden wspólny cień.
// Treść szyldu i logikę chowania dostarcza rodzic (Metka.md → Czego komponent nie dostarcza).
// position="center": metka startuje na środku, a gdy docked — zjeżdża na pozycję z lewej.
// Dwa wyjątki (Metka.md): inverted — nad pasem contrast płyta się odwraca;
// away — w trybie zadania cała sylwetka chowa się w górę.
// column="text": kolumna szyldu zwęża się do kolumny akapitu (podstrona piwa), żeby metka
// stała równo z tekstem pod nią.
export function Metka({ position = 'side', column = 'page', hidden = false, docked = false, inverted = false, away = false, children }) {
    return (
        <div
            className={styles.wrapper}
            data-hidden={hidden || undefined}
            data-away={away || undefined}
            data-inverted={inverted || undefined}
        >
            <div className={styles.szyld}>
                <div className={styles.column} data-position={position} data-column={column} data-docked={docked || undefined}>
                    <div className={styles.track}>
                        <div className={styles.metka} data-metka>
                            <Znak className={styles.znak} />
                        </div>
                    </div>
                    <div className={styles.content}>{children}</div>
                </div>
            </div>
        </div>
    );
}
