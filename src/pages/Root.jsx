import { Outlet, ScrollRestoration } from 'react-router-dom';

// Każda nowa strona zaczyna się od góry, powrót wraca tam, gdzie się było.
export function Root() {
    return (
        <>
            <Outlet />
            <ScrollRestoration />
        </>
    );
}
