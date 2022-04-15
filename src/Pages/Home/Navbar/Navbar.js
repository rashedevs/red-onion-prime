import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <Link to="">Breakfast</Link>
            <Link to="">Lunch</Link>
            <Link to="">Dinner</Link>
        </nav>
    );
};

export default Navbar;