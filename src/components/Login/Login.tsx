import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const LoginForm: FC<InjectedFormProps<FormValueType, FormPropsType> & FormPropsType>  = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
type FormValueType = {
    login: string
    password: string
    rememberMe: boolean

}
type FormPropsType = { }
const LoginReduxForm = reduxForm<FormValueType & FormPropsType>({
    form: 'login'
})(LoginForm)


const Login = (props: any) => {
    const onSubmit = (formData: FormValueType) => {

    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
