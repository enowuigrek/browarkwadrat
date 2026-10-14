import { useMemo, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { TaskModeContext } from '../hooks/useTaskMode.js';

// Każda nowa strona zaczyna się od góry, powrót wraca tam, gdzie się było.
export function Root() {
    const [tasks, setTasks] = useState(0);
    const taskMode = useMemo(() => ({ active: tasks > 0, set: setTasks }), [tasks]);

    return (
        <TaskModeContext.Provider value={taskMode}>
            <Outlet />
            <ScrollRestoration />
        </TaskModeContext.Provider>
    );
}
