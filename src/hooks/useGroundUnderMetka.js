import { useEffect, useState } from 'react';

// Czy pod elementem leży pas contrast (pasy deklarują grunt przez data-ground).
// Sprawdzamy linię na wysokości środka elementu — domyślnie znaku w metce.
export function useGroundUnderMetka(selector = '[data-metka] svg') {
    const [inverted, setInverted] = useState(false);

    useEffect(() => {
        let frame = 0;

        const check = () => {
            frame = 0;
            const target = document.querySelector(selector);
            if (!target) return;
            const box = target.getBoundingClientRect();
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
    }, [selector]);

    return inverted;
}
