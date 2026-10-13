import { useEffect, useState } from 'react';

// Jeden próg, jedno zdarzenie:
// hidden — szyld schowany (za progiem i przewijanie w dół), wraca przy przewijaniu w górę;
// past   — strona przewinięta za próg; metka wyśrodkowana zjeżdża wtedy w lewo
//          i wraca na środek dopiero na samej górze.
export function useHideOnScroll(threshold = 48) {
    const [state, setState] = useState({ hidden: false, past: false });

    useEffect(() => {
        let lastY = window.scrollY;
        let frame = 0;

        const update = () => {
            frame = 0;
            const y = window.scrollY;
            const past = y > threshold;
            if (Math.abs(y - lastY) < 4 && past) return;
            const hidden = past && y > lastY;
            setState(prev => (prev.hidden === hidden && prev.past === past ? prev : { hidden, past }));
            lastY = y;
        };

        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(frame);
        };
    }, [threshold]);

    return state;
}
