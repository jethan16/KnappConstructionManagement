import React, {useState} from 'react';
import { Link } from 'gatsby'
import "./hamburger.css"

const HamburgerMenu = () => {
    const [ menuState, setMenuState ] = useState(false)

    const handleMenuChange = () => {
        setMenuState(!menuState)
    }

    const menuItems = [{title: 'Home', path: '/'}, {title: 'About', path: '/about/'}, {title: 'Services', path: '/services/'}]

    return (
        <>
        <div className='menu-wrapper' onClick={handleMenuChange}>
            <div className='bar-container'>
                <div className={`dot${menuState ? ' vanish' : ''}`}></div>
                <div className={`bar${menuState ? ' bar-one' : ''}`}></div>
            </div>
            <div className='bar-container'>
                <div className={`dot${menuState ? ' vanish' : ''}`}></div>
                <div className={`bar${menuState ? ' vanish' : ''}`}></div>
            </div>
            <div className='bar-container'>
                <div className={`dot${menuState ? ' vanish' : ''}`}></div>
                <div className={`bar${menuState ? ' bar-two' : ''}`}></div>
            </div>
        </div>
        <div className={`side-bar ${menuState ? 'reveal' : ''}`}>
            <ul className={`${menuState ? '' : 'disp-none'}`}>
                {
                    menuItems.map((item, i) => (
                        <li className='menu-item' key={i}><Link to={item.path} activeClassName='active-link'>{item.title}</Link></li>
                    ))
                }
            </ul>
        </div>
        </>
    );
};

export default HamburgerMenu;