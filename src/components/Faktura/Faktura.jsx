import styles from './Faktura.module.scss';

// Warstwy faktury pasa (strona.md → Faktura, Tkanina piwa). Rodzic ma data-textured.
// ground="contrast": ziarno + zdarcia przy prawej krawędzi.
// ground="beer": tkanina piwa (fabric z danych) + słabsze ziarno. Biel nie dostaje nic.
export function Faktura({ ground, fabric }) {
    return (
        <>
            {ground === 'beer' && fabric && (
                <span data-faktura aria-hidden="true" className={`${styles.tkanina} ${styles[fabric]}`} />
            )}
            <span data-faktura aria-hidden="true" className={ground === 'beer' ? styles.ziarnoBeer : styles.ziarno} />
            {ground === 'contrast' && <span data-faktura aria-hidden="true" className={styles.zdarcie} />}
        </>
    );
}
