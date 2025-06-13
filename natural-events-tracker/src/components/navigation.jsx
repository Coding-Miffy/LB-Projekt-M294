import React from 'react'
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className='layout-header-nav'>
            <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
            <NavLink to='/live-events' className={({ isActive }) => isActive ? 'active' : ''}>Live Events</NavLink>
            <NavLink to='/archive' className={({ isActive }) => isActive ? 'active' : ''}>Archive</NavLink>
            <NavLink to='/custom-events' className={({ isActive }) => isActive ? 'active' : ''}>Custom Events</NavLink>
        </nav>
    )
}

export default Navigation