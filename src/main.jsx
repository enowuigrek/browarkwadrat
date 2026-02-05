import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Domowka } from './pages/Domowka.jsx';
import { Wolnosypane } from './pages/Wolnosypane.jsx';
import { DalejJestTaniej } from './pages/DalejJestTaniej.jsx';
import './styles/index.scss';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />, // wspólny layout z headerem
        children: [
            { index: true, element: <Home /> },
            { path: 'piwa', element: <Home /> }, // jeśli chcesz listę pod /piwa
            { path: 'o-browarze', element: <About /> },
            { path: 'domowka', element: <Domowka /> },
            { path: 'wolnosypane', element: <Wolnosypane /> },
            { path: 'dalejjesttaniej', element: <DalejJestTaniej /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);