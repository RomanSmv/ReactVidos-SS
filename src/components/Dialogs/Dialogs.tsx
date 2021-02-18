import React, {FC} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {InitialStateType} from "../../redux/Dialog-reduce";
import {Redirect} from "react-router-dom";
import {InjectedFormProps, Field, reduxForm} from "redux-form";


type PropsType = {
    dialogsPage: InitialStateType
    sendMessage: (newMessageBody: string) => void
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

    const addNewMessage = (values: FormValueType) => {
        props.sendMessage(values.newMessageBody)

    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

type FormPropsType = {}
type FormValueType = { newMessageBody: string }
const AddMessageForm: FC<InjectedFormProps<FormValueType, FormPropsType> & FormPropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormValueType & FormPropsType>({form: "dialogAddMessageForm"})(AddMessageForm)


export default Dialogs;