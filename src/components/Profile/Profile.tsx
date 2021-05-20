import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/Profile-reduce";

export type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void


}

const Profile = (props: PropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>

            <MyPostsContainer/>
        </div>
    )
}


export default Profile;