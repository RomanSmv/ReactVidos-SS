import {combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reduce";
import dialogReducer from "./Dialog-reduce";

export type RootStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer
})


let store = createStore(reducers)


export default store