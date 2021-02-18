import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusTC, getUserProfileTC, ProfileType, updateStatusTC} from "../../redux/Profile-reduce";
import {RootStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

type MapStateAndMapDispatchPropsType = {
    profile: ProfileType
    setUserProfile: (userId: string) => void
    WithUrlDataContainerComponent: any
    isAuth: boolean
    getUserStatus: (userId: string) => void
    updateStatus: (status: string) => void
    status: string
}
type PropsType = RouteComponentProps<{ userId: string }> & MapStateAndMapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "12151"
        }

        this.props.setUserProfile(userId);
        this.props.getUserStatus(userId)

    }

    render() {

        return (
            <div className={s.content}>
                <Profile profile={this.props.profile} status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}


let mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status

    }
}


export default compose<React.ComponentType>(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {setUserProfile: getUserProfileTC, getUserStatus: getStatusTC, updateStatus:updateStatusTC}),
)(ProfileContainer)






