import React from 'react';
import logo from '../../../images/logo.png';
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div>
                <img style={{ width: "200px" }} src={logo} alt="" />
            </div>
            <div>
                <h6>All rights reserved by Rashed</h6>
                <p>Copyright &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};

export default Footer;