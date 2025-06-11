import React from 'react'
import { Outlet } from "react-router-dom";
import Navigation from './navigation'

const Layout = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='App'>
            <header className='App-header'>
                <Navigation />
            </header>

            <main className='layout-main-content'>
                <Outlet />
            </main>

            <footer className='layout-footer'>
                <p>© {currentYear} Natascha Blumer</p>
            </footer>
        </div>
    );
};

export default Layout;