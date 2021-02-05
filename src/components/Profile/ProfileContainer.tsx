import React from "react";
import s from './Profile.module.css';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileTC, ProfileType} from "../../redux/Profile-reduce";
import {RootStateType} from "../../redux/redux-store";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

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

        if (!this.props.isAuth ) return <Redirect to ='/login' />

        return (
            <div className={s.content}>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}
//HOC redirect
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)



let mapStateToProps = (state: RootStateType) => {
    return {
        profile: state.profilePage.profile,

    }
}

let WithUrlDataContainerComponent: any = withRouter(AuthRedirectComponent)
//connect создает контейнерную компоненту над этой контейнерной
export default connect(mapStateToProps, {setUserProfile: getUserProfileTC})(WithUrlDataContainerComponent);