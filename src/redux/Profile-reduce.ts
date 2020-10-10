const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [
        {likeCount: 18, message: 'Hi, how are you ', id: 1},
        {likeCount: 85, message: 'It is my first post', id: 2}


],
    newPostText: "pipisa"
}

const profileReducer = (state = initialState, action: any) => {
    switch(action.type) {
        case ADD_POST:
        let newPost = {
            id: 5,
            message: state.newPostText,
            likeCount: 0,
        }
        state.posts.push(newPost)
        state.newPostText = ''
            return state
    case UPDATE_NEW_POST_TEXT:


        state.newPostText = action.newText
        return state
        default:
            return state

    }


}
export const addPostActionCreator = () => ({
    type: ADD_POST

})
export const updateNewPostTextActionCreator = (text: string) =>

    ({
        type: UPDATE_NEW_POST_TEXT, newText: text
    })
export default profileReducer;