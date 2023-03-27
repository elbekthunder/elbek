import React from 'react';
import logo from './logo.png'
import burger from './burger.SVG'
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <header className='bloc_header' >
                <img className='img_logo' src={logo}/>
                <div className='bloc_burger'>
                    <a href="#"><img className='img_burger' src={burger}/></a>
                </div>
            </header>
        </div>
    );
};

export default Header;