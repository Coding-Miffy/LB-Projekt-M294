import React from 'react'
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className='layout-header-nav'>
            <Link to='/'>Home</Link>
            <Link to='/live-events'>Live Events</Link>
            <Link to='/archive'>Archive</Link>
            <Link to='/custom-events'>Custom Events</Link>
        </nav>
    )
}

export default Navigation