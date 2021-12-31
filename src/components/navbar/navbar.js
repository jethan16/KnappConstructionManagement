import React from 'react';
import "./navbar.css"

import HamburgerMenu from '../hamburger/hamburger';

const Navbar = () => {
    return(
        <div className='navbar'>
            <HamburgerMenu />
        </div>
    );
};

export default Navbar;