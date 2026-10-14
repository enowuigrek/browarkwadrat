import { createContext, useContext, useEffect } from 'react';

// Tryb zadania: otwarty formularz oceny albo menu na telefonie.
// Metka chowa się wtedy w górę i wraca po zamknięciu (strona.md → Metka a ciemne pasy).
export const TaskModeContext = createContext({ active: false, set: () => {} });

export function useTaskMode() {
    return useContext(TaskModeContext).active;
}

// Zgłasza tryb zadania, dopóki `active` jest prawdą (i sprząta przy odmontowaniu).
export function useTask(active) {
    const { set } = useContext(TaskModeContext);

    useEffect(() => {
        if (!active) return;
        set(count => count + 1);
        return () => set(count => count - 1);
    }, [active, set]);
}
