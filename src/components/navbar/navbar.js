import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

import "./navbar.css"

import HamburgerMenu from '../hamburger/hamburger';

const Navbar = () => {
    return(
        <div className='navbar'>
           <Link to='/'>
                <Logo src='https://www.datocms-assets.com/48980/1646140728-kmc_logo-o.png' alt='Knapp Construction Management Logo' />
            </Link>
            <HamburgerMenu />
        </div>
    );
};

export default Navbar;

const Logo = styled.img`
    width: 150px;
    position: absolute;
    top: 25px; 
    left: 25px;
`