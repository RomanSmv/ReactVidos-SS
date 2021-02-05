const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


const initialState = {
    dialogs: [
        {id: 1, name: 'Bobik'},
        {id: 2, name: 'Sambuk'},
        {id: 3, name: 'Aiva'},
        {id: 4, name: 'Vasa'},
        {id: 5, name: 'Stela'}
    ],
    messages: [
        {id: 1, message: 'gav'},
        {id: 2, message: 'gav gav'},
        {id: 3, message: 'gav gav gav'}

    ],
    newMessageBody: ""
}


const dialogReducer = (state = initialState, action: ActionsType): InitialStateType => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 4, message: body}]
            }
        default:
            return state
    }
}

// Actions creators
export const sendMessageCreator = () => ({type: SEND_MESSAGE} as const)
export const updateNewMessageBodyCreator = (body: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body} as const)


//types
export type InitialStateType = typeof initialState
export type ActionsType = ReturnType<typeof sendMessageCreator> | ReturnType<typeof updateNewMessageBodyCreator>

export default dialogReducer;