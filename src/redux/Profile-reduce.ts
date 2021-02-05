import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

let initialState = {
    posts: [
        {likeCount: 18, message: 'Hi, how are you ', id: 1},
        {likeCount: 85, message: 'It is my first post', id: 2}
    ],
    newPostText: "pipisa",
    profile: null as null | ProfileType
}

const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD_POST":
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, (newPost)],
                newPostText: ''
            }
        case "UPDATE_NEW_POST_TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state

    }


}
export const addPostActionCreator = () => ({type: "ADD_POST"} as const)
export const updateNewPostTextActionCreator = (text: string) => ({type: "UPDATE_NEW_POST_TEXT", newText: text} as const)
export const setUserProfileActionCreator = (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile} as const)
export const getUserProfileTC = (userId: string) => (dispatch: Dispatch<ActionsType>) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileActionCreator(response.data))

    })

}

//types
export type ActionsType =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfileActionCreator>

export type PostType = {
    likeCount: number
    message: string
    id: number
}

export type ProfileType =
    {
        aboutMe: null | string,
        contacts: {
            facebook: null | string,
            website: null | string,
            vk: null | string,
            twitter: null | string,
            instagram: null | string,
            youtube: null | string,
            github: null | string,
            mainLink: null | string
        },
        lookingForAJob: boolean,
        lookingForAJobDescription: null | string,
        fullName: string,
        userId: number,
        photos: {
            small: null | string,
            large: null | string
        }
    }


export default profileReducer;