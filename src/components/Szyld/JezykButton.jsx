import { useJezyk, useTeksty } from '../../i18n/teksty.js';
import styles from './JezykButton.module.scss';

// Przełącznik języka na telefonie: w szyldzie przy prawym marginesie, nad przyciskiem menu.
// Pokazuje język, na który przełącza (PL ↔ EN), bez ikony flagi.
export function JezykButton({ away, inverted }) {
    const { lang, setLang } = useJezyk();
    const t = useTeksty();

    return (
        <button
            type="button"
            className={styles.button}
            data-away={away || undefined}
            data-inverted={inverted || undefined}
            aria-label={t.jezyk.zmien}
            lang={lang === 'pl' ? 'en' : 'pl'}
            onClick={() => setLang(lang === 'pl' ? 'en' : 'pl')}
        >
            <span className={styles.label}>{t.jezyk.inny}</span>
        </button>
    );
}

// Przełącznik w szyldzie na szerokim ekranie: dwa kody, aktywny złotem jak pozycja nawigacji.
export function JezykSwitch({ className, linkClassName }) {
    const { lang, setLang } = useJezyk();
    const t = useTeksty();

    return (
        <div className={className} role="group" aria-label={t.jezyk.nazwa}>
            {['pl', 'en'].map(kod => (
                <button
                    key={kod}
                    type="button"
                    className={linkClassName}
                    lang={kod}
                    aria-pressed={lang === kod}
                    onClick={() => setLang(kod)}
                >
                    {kod.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
