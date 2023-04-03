import React from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
    let patch = '/dialogs/1' + props.id

    return (
        <div className={classes.item}><NavLink className={classes.item_link}
                                               to={patch}>{props.name}</NavLink></div>
    )
}

export default DialogsItem;