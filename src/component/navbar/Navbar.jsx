import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
            <nav className={classes.nav}>
                <div >
                    <div><NavLink className={classes.item} to="/profile"><h2>Profile</h2></NavLink></div>
                    <div><NavLink className={classes.item} to="/dialogs"><h2>Dialogs</h2></NavLink></div>
                    <div><NavLink className={classes.item} to="/users"><h2>Users</h2></NavLink></div>
                    <div><NavLink className={classes.item} to="src/component#"><h2>News</h2></NavLink></div>
                    <div><NavLink className={classes.item} to="src/component#"><h2>setting</h2></NavLink></div>
                    <div><NavLink className={classes.item} to="/login"><h2>Login</h2></NavLink></div>
                </div>
            </nav>
    );
};

export default Navbar;