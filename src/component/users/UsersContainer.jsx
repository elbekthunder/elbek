import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    unFollow,
    toggleFollowingProgress, getUsersThunkCreator, getUsersThunk,
} from "../../redux/usersReducer";
import Users from "./Users";
import preloader from "../../assets/img/loading.svg";
import {getUsers} from "../../api/api";




class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage , this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ?
                <img src={preloader}/> : null}
            <Users currentPage={this.props.currentPage}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//
//         unfollow: (userId) => {
//             dispatch(unFollowAC(userId))
//         },
//
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount))
//         },
//
//         toggleIsFetching: (IsFetching) => {
//             dispatch(toggleIsFetchingAC(IsFetching))
//         }
//
//     }
// }


export default connect (mapStateToProps, {
    follow, unFollow, setCurrentPage,
    toggleFollowingProgress, getUsers: getUsersThunk})
(UsersContainer);