import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {InitialStateType} from "../../redux/Dialog-reduce";
import { Redirect } from "react-router-dom";


type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
    isAuth: boolean
}

const Dialogs: React.FC<PropsType> = (props) => {
    let state = props.dialogsPage

    const dialogsElements = state.dialogs.map((d: { id: number, name: string }) => <DialogItem name={d.name} key={d.id}
                                                                                               id={d.id}/>)
    const messagesElements = state.messages.map((m: { id: number, message: string }) => <Message key={m.id}
                                                                                                 message={m.message}/>)
    let newMessageBody = state.newMessageBody


    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }
    if (!props.isAuth ) return <Redirect to={"/login"} />

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
                                  value={newMessageBody}/>
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