import styles from './Szew.module.scss';

// Szew między pasami (strona.md → Szew między pasami): przerwa w kolorze nowego pasa,
// pod nią przerywane echo pasa, który się skończył. Przez całą szerokość okna,
// jeden na granicę; granica przed stopką go nie dostaje.
// from / to: kolory starego i nowego pasa (wartości CSS, np. 'var(--beer-color)').
export function Szew({ from, to }) {
    return <div className={styles.szew} style={{ '--from': from, '--to': to }} aria-hidden="true" />;
}
