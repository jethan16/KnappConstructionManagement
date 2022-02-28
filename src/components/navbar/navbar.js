import React from 'react';
import styled from 'styled-components';

import "./navbar.css"

import HamburgerMenu from '../hamburger/hamburger';

const Navbar = () => {
    return(
        <div className='navbar'>
            <Logo src='https://www.datocms-assets.com/48980/1645924876-kcm_logo-c.png' alt='Knapp Construction Management Logo' />
            <HamburgerMenu />
        </div>
    );
};

export default Navbar;

const Logo = styled.img`
    width: 100px;
    position: absolute;
    top: 25px; 
    left: 25px;
`