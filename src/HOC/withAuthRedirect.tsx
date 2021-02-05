import {Redirect} from "react-router-dom";
import React from "react";
import {RootStateType} from "../redux/redux-store";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state: RootStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export const withAuthRedirect = (Component: any) => {
    class Redirectcomponent extends React.Component {
        render() {
            if (! this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props}/>
        }
    }

   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (Redirectcomponent)
return ConnectedAuthRedirectComponent
}