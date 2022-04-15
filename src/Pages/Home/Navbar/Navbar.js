import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='nav-container'>
            <CustomLink to="/breakfast">Breakfast</CustomLink>
            <CustomLink to="/lunch">Lunch</CustomLink>
            <CustomLink to="/dinner">Dinner</CustomLink>
        </nav>
    );
};

export default Navbar;