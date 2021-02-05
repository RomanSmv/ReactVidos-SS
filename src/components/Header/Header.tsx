import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {

}
const Header = (props: any) => {
    return (
    <header className={s.header}>
        <img src='https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg' />

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}></NavLink>}
        </div>
    </header>
    )
}
export default Header;