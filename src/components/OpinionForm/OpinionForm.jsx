import { useEffect, useId, useRef, useState } from 'react';
import { useTask } from '../../hooks/useTaskMode.js';
import styles from './OpinionForm.module.scss';

// Te same pytania co na panelu porównawczym, żeby odpowiedzi dało się zestawić
// w danych warki.
const questions = [
    { id: 'goryczka', label: 'Goryczka po przełknięciu', options: ['znika', 'zostaje chwilę', 'zalega'] },
    { id: 'prowadzi', label: 'Co prowadzi', options: ['słód', 'równo', 'chmiel'] },
    { id: 'aromat', label: 'Aromat', options: ['za słaby', 'w sam raz', 'za mocny'] },
];

// Zamknięty czyta się jak oferta, otwarty jak prośba — więc rozwija się dopiero
// po kliknięciu, w tym samym miejscu. Na razie sam widok — bez wysyłki.
export function OpinionForm({ batchNumber }) {
    const [open, setOpen] = useState(false);
    const [sent, setSent] = useState(false);
    const formId = useId();
    const formRef = useRef(null);
    const toggleRef = useRef(null);
    const wasOpen = useRef(false);

    // Otwarty formularz to tryb zadania — metka chowa się na ten czas.
    useTask(open);

    // Fokus: po otwarciu na pierwsze pole, po zwinięciu z powrotem na przycisk.
    useEffect(() => {
        if (open) formRef.current?.querySelector('input, textarea')?.focus();
        else if (wasOpen.current) toggleRef.current?.focus();
        wasOpen.current = open;
    }, [open]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSent(true);
    };

    if (!open) {
        return (
            <button
                ref={toggleRef}
                type="button"
                className={styles.submit}
                aria-expanded="false"
                aria-controls={formId}
                onClick={() => setOpen(true)}
            >
                Oceń to piwo
            </button>
        );
    }

    return (
        <form id={formId} ref={formRef} className={styles.form} onSubmit={handleSubmit}>
            {questions.map(({ id, label, options }) => (
                <fieldset key={id} className={styles.question}>
                    <legend className={styles.legend}>{label}</legend>
                    <div className={styles.options}>
                        {options.map(option => (
                            <label key={option} className={styles.option}>
                                <input type="radio" name={`${id}-${batchNumber}`} value={option} />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>
            ))}

            <label className={styles.field}>
                <span className={styles.legend}>Jedno zdanie</span>
                <textarea name="zdanie" rows={2} className={styles.input} />
            </label>

            <label className={styles.field}>
                <span className={styles.legend}>Podpis <span className={styles.optional}>(nieobowiązkowy)</span></span>
                <input type="text" name="podpis" className={styles.input} />
            </label>

            <div className={styles.actions}>
                <button type="submit" className={styles.submit}>Wyślij opinię</button>
                <button
                    type="button"
                    className={styles.collapse}
                    aria-expanded="true"
                    aria-controls={formId}
                    onClick={() => setOpen(false)}
                >
                    Zwiń
                </button>
                {sent && (
                    <p className={styles.note} role="status">
                        Wysyłka jeszcze nie działa. Formularz jest na razie tylko podglądem.
                    </p>
                )}
            </div>
        </form>
    );
}
