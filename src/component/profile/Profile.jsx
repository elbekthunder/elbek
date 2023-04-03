import React from 'react';
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./MyPost/ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPost  posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>

    );
};

export default Profile;