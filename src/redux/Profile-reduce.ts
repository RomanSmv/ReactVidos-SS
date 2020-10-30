import {RootStateType} from "./redux-store";

export type AddPostActionType = {
    type: "ADD_POST"
}

export type updateNewPostTextActionType = {
    type: "UPDATE_NEW_POST_TEXT"
    newText: string
}

export type ActionsType = AddPostActionType | updateNewPostTextActionType

export type PostType = {
    likeCount: number
    message: string
    id: number
}



export type ProfileStateType = {
    posts: Array<PostType>
    newPostText: string
}

let initialState = {
    posts: [
        {likeCount: 18, message: 'Hi, how are you ', id: 1},
        {likeCount: 85, message: 'It is my first post', id: 2}


],
    newPostText: "pipisa"
}

const profileReducer = (state: ProfileStateType = initialState, action: ActionsType) => {
    switch(action.type) {
        case "ADD_POST":
        let newPost = {
            id: 5,
            message: state.newPostText,
            likeCount: 0,
        }
        state.posts.push(newPost)
        state.newPostText = ''
            return state
    case "UPDATE_NEW_POST_TEXT":


        state.newPostText = action.newText
        return state
        default:
            return state

    }


}
export const addPostActionCreator = (): AddPostActionType => ({
    type: "ADD_POST"

})
export const updateNewPostTextActionCreator = (text: string) :updateNewPostTextActionType =>

    ({
        type: "UPDATE_NEW_POST_TEXT", newText: text
    })
export default profileReducer;