import {Redirect} from "react-router-dom";
import React from "react";
import {RootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export const withAuthRedirect = (Component: React.ComponentType<any>) => {
    class RedirectComponent extends React.Component<{ isAuth: boolean }> {
        render() {

            if (!this.props.isAuth) {
                return <Redirect to='/login'/>
            } else {
                return <Component {...this.props}/>
            }
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirectComponent
}