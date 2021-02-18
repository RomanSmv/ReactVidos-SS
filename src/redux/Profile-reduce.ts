import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";


let initialState = {
    posts: [
        {likeCount: 18, message: 'Hi, how are you ', id: 1},
        {likeCount: 85, message: 'It is my first post', id: 2}
    ] as Array<PostType> ,

    profile: null as null | ProfileType,
    status: '',
    newPostText: ''
}

const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ADD_POST":
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, (newPost)],
                newPostText: ''
            }
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        case "SET_STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state

    }


}
export const addPostActionCreator = (newPostText: string) => ({type: "ADD_POST", newPostText} as const)
export const setUserProfileActionCreator = (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile} as const)
export const setStatusActionCreator = (status: string) => ({type: "SET_STATUS", status} as const)

export const getUserProfileTC = (userId: string) => (dispatch: Dispatch<ActionsType>) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfileActionCreator(response.data))
    })
}
export const getStatusTC = (userId: string) => (dispatch: Dispatch<ActionsType>) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatusActionCreator(response.data))
    })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch<ActionsType>) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatusActionCreator(status))
        }

    })
}

//types
export type ActionsType =
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof setUserProfileActionCreator>
    | ReturnType<typeof setStatusActionCreator>

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