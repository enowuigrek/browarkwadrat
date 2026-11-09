import { useEffect, useId, useRef, useState } from 'react';
import { useTask } from '../../hooks/useTaskMode.js';
import { useTeksty } from '../../i18n/teksty.js';
import styles from './OpinionForm.module.scss';

// Te same pytania co na panelu porównawczym, żeby odpowiedzi dało się zestawić
// w danych warki. Wartość wysyłana jest zawsze polska, niezależnie od języka strony.
const questions = ['goryczka', 'prowadzi', 'aromat'];
const POLSKIE_OPCJE = {
    goryczka: ['znika', 'zostaje chwilę', 'zalega'],
    prowadzi: ['słód', 'równo', 'chmiel'],
    aromat: ['za słaby', 'w sam raz', 'za mocny'],
};

// Zamknięty czyta się jak oferta, otwarty jak prośba — więc rozwija się dopiero
// po kliknięciu, w tym samym miejscu. Na razie sam widok — bez wysyłki.
export function OpinionForm({ batchNumber }) {
    const [open, setOpen] = useState(false);
    const [sent, setSent] = useState(false);
    const formId = useId();
    const t = useTeksty().ocena;
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
                {t.otworz}
            </button>
        );
    }

    return (
        <form id={formId} ref={formRef} className={styles.form} onSubmit={handleSubmit}>
            {questions.map(id => (
                <fieldset key={id} className={styles.question}>
                    <legend className={styles.legend}>{t.pytania[id].label}</legend>
                    <div className={styles.options}>
                        {POLSKIE_OPCJE[id].map((value, i) => (
                            <label key={value} className={styles.option}>
                                <input type="radio" name={`${id}-${batchNumber}`} value={value} />
                                <span>{t.pytania[id].opcje[i]}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>
            ))}

            <label className={styles.field}>
                <span className={styles.legend}>{t.zdanie}</span>
                <textarea name="zdanie" rows={2} className={styles.input} />
            </label>

            <label className={styles.field}>
                <span className={styles.legend}>{t.podpis} <span className={styles.optional}>{t.nieobowiazkowy}</span></span>
                <input type="text" name="podpis" className={styles.input} />
            </label>

            <div className={styles.actions}>
                <button type="submit" className={styles.submit}>{t.wyslij}</button>
                <button
                    type="button"
                    className={styles.collapse}
                    aria-expanded="true"
                    aria-controls={formId}
                    onClick={() => setOpen(false)}
                >
                    {t.zwin}
                </button>
                {sent && (
                    <p className={styles.note} role="status">
                        {t.podglad}
                    </p>
                )}
            </div>
        </form>
    );
}
