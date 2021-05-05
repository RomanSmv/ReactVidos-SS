import {maxLengthCreator, required} from "../../../Utils/Validators/Validators";
import React, {FC} from "react";
import {InjectedFormProps, Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControls/FormsControls";

type FormPropsType = {}
type FormValueType = { newMessageBody: string }

const maxLength50 = maxLengthCreator(50)

const AddMessageForm: FC<InjectedFormProps<FormValueType, FormPropsType> & FormPropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}
export default reduxForm<FormValueType & FormPropsType>({form: "dialogAddMessageForm"})(AddMessageForm)