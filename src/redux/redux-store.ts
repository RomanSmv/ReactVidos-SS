import {combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reduce";
import dialogReducer from "./Dialog-reduce";

let reducers = combineReducers({
    profileReducer,
    dialogReducer
})


let store = createStore(reducers)


export default store