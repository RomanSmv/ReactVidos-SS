import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../../common/preloader/Preloader";
import {PropsType} from "../Profile";
import ProfileStatusHooks from "./ProfileStatusHooks";


const ProfileInfo = (props: PropsType) => {

    if (!props.profile) {
       return <Preloader />
    }

    return (
        <div>
            {/*<div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Quercus_robur_JPG_%28d1%29.jpg/1200px-Quercus_robur_JPG_%28d1%29.jpg' alt="description of image"/>
            </div>*/}
            <div className={s.descriptionBlock}>
                {props.profile.photos.large ? <img src={props.profile.photos.large} /> : null}

                {props.profile.fullName}
                <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    )
}
export default ProfileInfo;