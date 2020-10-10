import React from "react";
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Quercus_robur_JPG_%28d1%29.jpg/1200px-Quercus_robur_JPG_%28d1%29.jpg' alt="description of image"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>

    )
}
export default ProfileInfo;