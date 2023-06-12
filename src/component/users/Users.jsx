import React from 'react'
import classes from "./Users.module.css";
import avatar from "./img.png";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {toggleFollowingProgress} from "../../redux/usersReducer";
import {usersAPI} from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i += 1) {
        pages.push(i);
    }
    let slicedPages;
    let curPage = props.currentPage;
    if (curPage - 3 < 0) {
        slicedPages = pages.slice(0, 5);
    } else {
        slicedPages = pages.slice(curPage - 3, curPage + 2);
    }

    // let pagesCount = Math.ceil(props.totalUsersCount /props.pageSize);
    //
    // let pages = [];
    // for (let i=0; i <= pagesCount; i++) {
    //     pages.push(i);
    // }

    return <div>
        <div className={classes.scroll}>
            {slicedPages.map(p => {
                return <span className={props.currentPage === p && classes.items}
                             onClick={() => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
            })}

        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span className={classes.block}>
                    <div className={classes.block__img}>
                        <NavLink to={'/profile/' + u.id}>
                        <img className={classes.avatar} src={u.photos.small != null ? u.photos.small : avatar}/>
                        </NavLink>
                    </div>

                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span className={classes.location}>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
                <div className={classes.block__button}>
                    {u.followed
                        ? <button disabled={props.followingInProgress.userId===u.id} onClick={() => {
                            props.unFollow(u.id)
                        }}>UnFollow</button>

                        : <button disabled={props.followingInProgress===u.id} onClick={() => {
                            props.follow(u.id) }}
                            >Follow</button>
                    }
                </div>
            </div>)
        }
    </div>
}

export default Users;