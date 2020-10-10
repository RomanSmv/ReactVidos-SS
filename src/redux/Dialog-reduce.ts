

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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



const dialogReducer = (state = initialState, action: { type: any; body: string; }) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 4, message: body})
            return state
        default:
            return state

    }
}
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE

})
export const updateNewMessageBodyCreator = (body: any) =>

    ({
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    })



export default dialogReducer;