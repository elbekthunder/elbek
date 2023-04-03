import React from 'react';
import logo from '../logo.png'
import burger from '../burger.SVG'
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.header}>
            <header className={classes.bloc_header} >
                <img className={classes.img_logo} src={logo}/>
                <div className={classes.bloc_burger}>
                    <a href="#"><img className={classes.burger} src={burger}/></a>
                </div>
            </header>
        </div>
    );
};

export default Header;