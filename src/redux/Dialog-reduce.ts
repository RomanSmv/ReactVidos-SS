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
    newMessageBody: ''
}


const dialogReducer = (state = initialState, action: ActionsType): InitialStateType => {


    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: body}]
            }
        default:
            return state
    }
}

// Actions creators
export const sendMessageCreator = (newMessageBody: string) => ({type: SEND_MESSAGE, newMessageBody} as const)


//types
export type InitialStateType = typeof initialState
export type ActionsType = ReturnType<typeof sendMessageCreator>

export default dialogReducer;