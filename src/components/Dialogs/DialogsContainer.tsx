import React from "react";
import {ActionsType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/Dialog-reduce";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {Redirect} from "react-router-dom";
import s from "../Profile/Profile.module.css";
import Profile from "../Profile/Profile";


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        sendMessage: () => { dispatch(sendMessageCreator())},
        updateNewMessageBody: (body: string) => {dispatch( updateNewMessageBodyCreator(body))}
    }
}

/*compose(
    connect(mapStateToProps, mapDispatchToProps) ,
    withAuthRedirect
)(Dialogs)

let AuthRedirectComponent = withAuthRedirect(Dialogs)

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)*/


export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps) ,

)(Dialogs);