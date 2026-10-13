import { useEffect, useState } from 'react';

// Chowa szyld przy przewijaniu w dół, pokazuje przy przewijaniu w górę.
export function useHideOnScroll(threshold = 48) {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let lastY = window.scrollY;
        let frame = 0;

        const update = () => {
            frame = 0;
            const y = window.scrollY;
            if (Math.abs(y - lastY) < 4) return;
            setHidden(y > threshold && y > lastY);
            lastY = y;
        };

        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(frame);
        };
    }, [threshold]);

    return hidden;
}
