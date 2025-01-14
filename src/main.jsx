import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Domowka from './pages/Domowka.jsx'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/domowka',
        element: <Domowka />,
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)