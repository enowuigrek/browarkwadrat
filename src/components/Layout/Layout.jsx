import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from '../common/Footer/Footer.jsx';
import styles from './Layout.module.scss';

export default function Layout() {
    return (
        <div className={styles.appWrapper}>
            <header className={styles.header}>
                <div className={styles.logo}>Browar Kwadrat</div>
                <nav className={styles.nav}>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? styles.active : undefined
                        }
                    >
                        Strona główna
                    </NavLink>
                    <NavLink
                        to="/piwa"
                        className={({ isActive }) =>
                            isActive ? styles.active : undefined
                        }
                    >
                        Piwa
                    </NavLink>
                    <NavLink
                        to="/o-browarze"
                        className={({ isActive }) =>
                            isActive ? styles.active : undefined
                        }
                    >
                        O browarze
                    </NavLink>
                </nav>
            </header>

            <main className={styles.mainContent}>
                <Outlet />
            </main>

            {/* 🆕 Wspólny Footer dla wszystkich stron */}
            <Footer />
        </div>
    );
}