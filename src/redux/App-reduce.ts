import {Dispatch} from "redux";
import {authAPI, BaseThunkType} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {getAuthUserDataTC} from "./Auth-reduce";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false

}

const appReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,

            }
        default:
            return state
    }
}
export const initializedSuccessAC= () => ({
    type: INITIALIZED_SUCCESS,

} as const)


export const initializeAppTC = (): ThunkType => (dispatch) => {
    let promice = dispatch(getAuthUserDataTC())
    promice.then(() => {
   dispatch(initializedSuccessAC())
    })
}



export default appReducer;

//types

type ActionsType =
    | ReturnType<typeof initializedSuccessAC>

type ThunkType = BaseThunkType<ActionsType, void>