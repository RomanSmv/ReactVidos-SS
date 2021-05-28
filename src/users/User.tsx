import React from 'react'
import styles from "./users.module.css";
import usersPhoto from "../assets/images/user1.jpg";
import {NavLink} from "react-router-dom";

let User = (props: any) => {
    let user = props.user
    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.large : usersPhoto} className={styles.usersPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ?
                            <button disabled={props.followingInProgress.some((id: any) => id === user.id)}
                                    onClick={() => {
                                        props.unfollow(user.id)
                                    }}>Unfollow</button>
                            :
                            <button disabled={props.followingInProgress.some((id: any) => id === user.id)}
                                    onClick={() => {
                                        props.follow(user.id)
                                    }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div> <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>
    )
    }
export default User