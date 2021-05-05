import React, {FC} from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../Utils/Validators/Validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {RootStateType} from "../../redux/redux-store";
import {loginTC} from "../../redux/Auth-reduce";
import style from "../../common/FormsControls/FormsControls.module.css"

export const LoginForm: FC<InjectedFormProps<FormValueType, FormPropsType> & FormPropsType> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       validate={[required]}
                       name={"email"} component={Input}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       validate={[required]}
                       type={"password"}
                       name={"password"} component={Input}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={Input}/> remember me
            </div>
            { props.error && <div className={style.formSummaryError}>
                error
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
type FormValueType = {
    email: string
    password: string
    rememberMe: boolean

}
type FormPropsType = {}
const LoginReduxForm = reduxForm<FormValueType & FormPropsType>({
    form: 'login'
})(LoginForm)


const Login = (props: any) => {
    const onSubmit = (formData: FormValueType) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe)

    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }


    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login)