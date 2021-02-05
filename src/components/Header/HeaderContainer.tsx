import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserDataTC, setAuthUserData} from "../../redux/Auth-reduce";
import {RootStateType} from "../../redux/redux-store";

type HeaderContainerPropsType = any

class HeaderContainer extends React.Component <HeaderContainerPropsType> {
    componentDidMount() {
       this.props.getAuthUserDataTC()
    }
        render()
        {
            return <Header {...this.props} />

        }
    }
const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
    export default connect(mapStateToProps, {getAuthUserDataTC}) (HeaderContainer);