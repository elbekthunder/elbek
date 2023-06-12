import {getUsers, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: false
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: action.users}
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }

        case  TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case  TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {

                ...state,
                followingInProgress: {
                    ...state.followingInProgress,
                    isFollowing: action.isFollowing,
                    userId: action.userId
                }
            }
        }

        default:
            return state;
    }
};


export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unFollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})
export const toggleIsFetching = (IsFetching) => ({type: TOGGLE_IS_FETCHING, IsFetching})
export const toggleFollowingProgress = (IsFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    IsFetching,
    userId
})

export const getUsersThunk = (currentPage, pageSize) => {

    return (dispatch) => {

        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setCurrentPage(currentPage));
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        });
    }

}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true,userId))
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                  dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false,userId))
            });
    }
}
export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true,userId))
        usersAPI.unFollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(unFollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false,userId))
            });
    }
}
export default usersReducer;