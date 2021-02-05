import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import store from "../../redux/redux-store";
import {ProfileType} from "../../redux/Profile-reduce";

export type PropsType = {
    profile: ProfileType
}

const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>

            <MyPostsContainer store={store}


            />
        </div>
    )
}


export default Profile;