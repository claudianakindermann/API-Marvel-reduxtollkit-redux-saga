import React from 'react';
import './Header.style.css';
import Logo from './../../marvel-logo.png';

const Header = () => (
    <header id='main-header'>
        <div>
            <img src={Logo} alt="Marvel" width="160"/>
        </div>
    </header>
);

export default Header;
