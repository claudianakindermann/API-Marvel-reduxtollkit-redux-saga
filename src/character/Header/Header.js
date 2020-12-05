import React from 'react';
import './Header.style.css';
import Logo from './../../marvel-logo.png';

const Header = () => (
    <header id='mainHeader'>
        <div id='divImage'>
            <img src={Logo} alt="Marvel" width="160" />
        </div>
        <div className='optionsMenu'>
                <a className='HOME' href='http://localhost:3000/'>HOME</a>
                <a className='HOME' href='https://www.marvel.com/watch'>VIDEOS</a>
                <a className='HOME' href='https://www.marvel.com/games'>GAMES</a>
                <a className='HOME' href='https://www.marvel.com/articles'>NEWS</a>
                <a className='HOME' href='https://www.marvel.com/culture-lifestyle'>MORE</a>
        </div>
    </header>
);

export default Header;
