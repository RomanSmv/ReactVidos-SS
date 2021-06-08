import {applyMiddleware, combineReducers, compose, createStore} from "redux";
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


//store for ReduxDevTools
//расширение добавит в глобальный window __REDUX_D.., если его нет то обычный compose
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers,composeEnhancers( applyMiddleware(thunkMiddleware)));

//обычный стор
//export let store: Store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store
// @ts-ignore
window.store = store