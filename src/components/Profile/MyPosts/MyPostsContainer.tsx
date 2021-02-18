import React from "react";
import {ActionsType, addPostActionCreator} from "../../../redux/Profile-reduce";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


let mapStateToProps = (state: RootStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);