import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1">Google Books Search</span>
            <Link to="/search"className="nav-link">Search</Link>
            <Link to="/saved" className="nav-link mr-auto">Saved</Link>
        </nav>
    )
}

export default Navbar;