import { useEffect, useState } from 'react';

// Czy pod znakiem metki leży pas contrast (pasy deklarują grunt przez data-ground).
// Sprawdzamy linię na wysokości środka znaku — tam, gdzie płyta jest naprawdę widoczna.
export function useGroundUnderMetka() {
    const [inverted, setInverted] = useState(false);

    useEffect(() => {
        let frame = 0;

        const check = () => {
            frame = 0;
            const znak = document.querySelector('[data-metka] svg');
            if (!znak) return;
            const box = znak.getBoundingClientRect();
            const y = box.top + box.height / 2;
            const over = [...document.querySelectorAll('[data-ground="contrast"]')].some(band => {
                const r = band.getBoundingClientRect();
                return r.top <= y && r.bottom >= y;
            });
            setInverted(over);
        };

        const schedule = () => {
            if (!frame) frame = requestAnimationFrame(check);
        };

        check();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        // metka zmienia wysokość przy chowaniu szyldu — sprawdź po dojechaniu
        document.addEventListener('transitionend', schedule);
        // treść strony zmienia wysokość (np. rozwinięty formularz) bez przewijania
        const resize = new ResizeObserver(schedule);
        resize.observe(document.body);
        return () => {
            resize.disconnect();
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
            document.removeEventListener('transitionend', schedule);
            cancelAnimationFrame(frame);
        };
    }, []);

    return inverted;
}
