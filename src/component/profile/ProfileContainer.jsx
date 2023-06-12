import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUsersProfile} from "../../redux/profileReducer";
import {useParams} from "react-router-dom";
import {usersAPI} from "../../api/api";

// class ProfileContainer extends React.Component {
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0.0/propfile/2`)
//             .then(response => {
//                 this.props.setUsersProfile(response.data);
//             });
//     }

function ProfileContainer(props) {
    const {userId} = useParams();
    let currUserId = userId || 2;

    usersAPI.getProfile(currUserId)
    .then((response) => {
                props.setUsersProfile(response.data);
            });


    return (
        <div>
            <Profile profile={props.profile}/>
        </div>
    )
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUsersProfile})(ProfileContainer);


