import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reduce";
import dialogReducer from "./Dialog-reduce";
import usersReducer from "./Users-reduce";
import authReducer from "./Auth-reduce";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./App-reduce";

export type RootStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))


export default store
// @ts-ignore
window.store = store