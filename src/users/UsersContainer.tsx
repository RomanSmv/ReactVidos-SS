import React from "react";
import {connect} from "react-redux";
import {followTC, getUsers, setCurrentPageAC, toggleFollowingProgressAC, unfollowTC} from "../redux/Users-reduce";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";


type PropsType = any

class UsersIPAComponent extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber: any) => {

        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.followSuccess}
                   unfollow={this.props.unfollowSuccess}
                   // action перекидываем в презент. компоненту
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   //state передаем в презент. компоненту
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

/*let withRedirect = withAuthRedirect(UsersIPAComponent)*/


/*export default connect(mapStateToProps, {

    followSuccess: followTC,

    unfollowSuccess: unfollowTC,

    setCurrentPage: setCurrentPageAC,

    toggleFollowingProgress: toggleFollowingProgressAC,

    getUsers

})(withRedirect)*/

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {

        followSuccess: followTC,

        unfollowSuccess: unfollowTC,

        setCurrentPage: setCurrentPageAC,

        toggleFollowingProgress: toggleFollowingProgressAC,

        getUsers

    })
)(UsersIPAComponent)