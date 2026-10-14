import { useMemo, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { TaskModeContext } from '../hooks/useTaskMode.js';

// Każda nowa strona zaczyna się od góry, powrót wraca tam, gdzie się było.
export function Root() {
    const [tasks, setTasks] = useState(0);
    const taskMode = useMemo(() => ({ active: tasks > 0, set: setTasks }), [tasks]);

    return (
        <TaskModeContext.Provider value={taskMode}>
            {/* Jeden filtr na aplikację: lekko wykrzywia nitki tkanin piwa. Skali 2 nie podnosić. */}
            <svg width="0" height="0" aria-hidden="true" style={{ position: 'absolute' }}>
                <filter id="warp">
                    <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="7" result="t" />
                    <feDisplacementMap in="SourceGraphic" in2="t" scale="2" xChannelSelector="R" yChannelSelector="G" />
                </filter>
            </svg>
            <Outlet />
            <ScrollRestoration />
        </TaskModeContext.Provider>
    );
}
