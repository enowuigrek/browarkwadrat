import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Domowka } from './pages/Domowka.jsx';
import { Wolnosypane } from './pages/Wolnosypane.jsx';
import { DalejJestTaniej } from './pages/DalejJestTaniej.jsx';
import { NowaStaraSzkola } from './pages/NowaStaraSzkola.jsx';
import { NotFound } from './pages/NotFound.jsx';
import './styles/index.scss';

const router = createBrowserRouter([
    // Home page WITHOUT header
    {
        path: '/',
        element: <Home />,
    },
    // Beer pages WITHOUT header (clean QR-scanned experience)
    {
        path: 'domowka',
        element: <Domowka />,
    },
    {
        path: 'wolnosypane',
        element: <Wolnosypane />,
    },
    {
        path: 'dalejjesttaniej',
        element: <DalejJestTaniej />,
    },
    {
        path: 'nowastarszkola',
        element: <NowaStaraSzkola />,
    },
    // 404 page
    {
        path: '*',
        element: <NotFound />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);