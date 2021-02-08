import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, ProfileType} from "../../redux/Profile-reduce";
import {RootStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

type MapStateAndMapDispatchPropsType = {
    profile: ProfileType
    setUserProfile: (userId: string) => void
    WithUrlDataContainerComponent: any
    isAuth: boolean
}
type PropsType = RouteComponentProps<{userId: string}> & MapStateAndMapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }

        this.props.setUserProfile(userId);

    }
    render() {

        return (
            <div className={s.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


let mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile,

    }
}


export default compose<React.ComponentType>(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {setUserProfile: getUserProfileTC}),
)(ProfileContainer)






