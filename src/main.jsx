import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import './styles/index.scss'
import {Domowka} from './pages/Domowka.jsx'
import {Wolnosypane} from './pages/Wolnosypane.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/domowka',
        element: <Domowka />,
    },
    {
        path: '/wolnosypane',
        element: <Wolnosypane />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)