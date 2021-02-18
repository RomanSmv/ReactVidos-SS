import React from "react";
import {ActionsType, sendMessageCreator} from "../../redux/Dialog-reduce";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {RootStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


let mapStateToProps = (state: RootStateType) => {
    return {
        dialogsPage: state.dialogPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        },

    }
}

export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps) ,

)(Dialogs);