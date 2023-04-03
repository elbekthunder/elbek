import React from 'react';
import classes from "../../Profile.module.css";
import fon from "../../fon.png";

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.img__block}>
                <img className={classes.img} src={fon} />
            </div>
            <div className={classes.block}>
                <span>ava+discaption</span>
                <h3>My posts</h3>
            </div>
        </div>
    );
};

export default ProfileInfo;