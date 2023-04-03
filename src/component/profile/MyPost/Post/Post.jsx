import React from 'react';
import classes from './Post.module.css'
import avatar from "./avatar.png";

const Post = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img className={classes.img} src={avatar}/>
                <span>{props.message}</span>
                <div>
                    <span>{props.likesCount} like</span>
                </div>
            </div>
        </div>
    );
};

export default Post;