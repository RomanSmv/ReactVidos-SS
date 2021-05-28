import React from "react";
import {connect} from "react-redux";
import {followTC, getUsers, setCurrentPageAC, toggleFollowingProgressAC, unfollowTC} from "../redux/Users-reduce";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPageSelector, getFollowingInProgress, getIsFetchingSelector,
    getPagesSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from "../redux/Users-selectors";


type PropsType = any

class UsersIPAComponent extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)

    }

    onPageChanged = (pageNumber: any) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
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
        users: getUsersSelector(state),
        pageSize: getPagesSizeSelector(state),
        totalUsersCount: getTotalUsersCountSelector(state),
        currentPage: getCurrentPageSelector(state),
        isFetching: getIsFetchingSelector(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


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