import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Domowka } from './pages/Domowka.jsx';
import { Wolnosypane } from './pages/Wolnosypane.jsx';
import { DalejJestTaniej } from './pages/DalejJestTaniej.jsx';
import { NowaStaraSzkola } from './pages/NowaStaraSzkola.jsx';
import './styles/index.scss';

const router = createBrowserRouter([
    // Main pages WITH header/layout
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'o-browarze', element: <About /> },
        ],
    },
    // Beer pages WITHOUT header/layout (clean QR-scanned experience)
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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);