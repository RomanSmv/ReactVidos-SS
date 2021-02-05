import React from "react";
import {ActionsType, sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/Dialog-reduce";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";



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

let AuthRedirectComponent = withAuthRedirect(Dialogs)

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent)
export default DialogsContainer;