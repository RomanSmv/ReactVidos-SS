import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/Dialog-reduce";


type DialogsPropsType = {}

const Dialogs = (props: any) => {
    let state = props.dialogPage

    const dialogsElements = state.dialogs.map((d: any) => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = state.messages.map((m: any) => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody


    let onSendMessageClick = () => {
        props.sendMessage()
    }

    let onNewMessageChange = (e: any) => {
        let body = e.target.value
        props.updateNewMessageBody(body)


    }

    return (

        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
                <div>

                </div>
            </div>


            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your message'
                                  onChange={onNewMessageChange}
                                  value={newMessageBody}></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Sent message
                        </button>
                    </div>
                </div>
            </div>
        </div>


    )

}
export default Dialogs;