import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/Dialog-reduce";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {Store} from "redux";


type DialogsPropsType = {}

const DialogsContainer = (props: any) => {



    return (
        <StoreContext.Consumer>
            {
            (store: any) => {

                let state = store.getState().dialogPage


                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }

                let onNewMessageChange = (body: any) => {

                    store.dispatch(updateNewMessageBodyCreator(body))

                }


               return  <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogPage={state}/>
            }
        }
        </StoreContext.Consumer>
    )

}
export default DialogsContainer;