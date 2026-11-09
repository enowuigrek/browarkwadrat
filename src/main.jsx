import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { Root } from './pages/Root.jsx';
import { Home } from './pages/Home.jsx';
import { NotFound } from './pages/NotFound.jsx';
import { BeerPage } from './components/BeerPage/BeerPage.jsx';
import { publishedBeers } from './data/beersData.js';
import './styles/index.scss';

const router = createBrowserRouter([
    {
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            // Podstrony piw — adresy z kodów QR na etykietach
            ...publishedBeers.map(beer => ({
                path: beer.slug,
                element: <BeerPage beer={beer} />,
            })),
            // Stare kody QR warki 93 prowadzą na /domowka — nazwa przeszła na warkę 98.
            {
                path: 'domowka',
                element: <Navigate to="/domowka-brown-ale" replace />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
