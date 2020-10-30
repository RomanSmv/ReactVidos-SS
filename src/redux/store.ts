

import profileReducer from "./Profile-reduce";
import dialogReducer from "./Dialog-reduce";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';







let store = {
    _state: {
        profilePage: {
            posts: [
                {likeCount: 18, message: 'Hi, how are you ', id: 1},
                {likeCount: 85, message: 'It is my first post', id: 2}


            ],
            newPostText: "pipisa"
        },
        dialogPage: {
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

    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },


    dispatch(action: { type: any; body: string; }) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)


        this._callSubscriber()
    }


}


export default store;
