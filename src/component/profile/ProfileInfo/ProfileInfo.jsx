import React from 'react';
import classes from "../Profile.module.css";
import fon from "../fon.png";
import Pre from "../../comman/Preloader/Pre";

const ProfileInfo = (props) => {
    if (!props.profile) {
       return <Pre/>
    }

    return (
        <div>
            <div className={classes.img__block}>
                <img className={classes.img} src={fon} />
            </div>
            <div className={classes.block}>
                <img src={props.profile.photos.large}/>
                <span>ava+discaption</span>
                <h3>My posts</h3>
            </div>
        </div>
    );
};

export default ProfileInfo;