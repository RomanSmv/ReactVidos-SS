import profileReducer, {addPostActionCreator, deletePostActionCreator, PostType, ProfileType} from "./Profile-reduce";


let state = {
    posts: [
        {likeCount: 18, message: 'Hi, how are you ', id: 1},
        {likeCount: 85, message: 'It is my first post', id: 2}
    ] as Array<PostType> ,

    profile: null as null | ProfileType,
    status: '',
    newPostText: ''
}


it ("should be correct length", () => {

   let action = addPostActionCreator("cat")

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)

})

it ("should be correct message", () => {

    let action = addPostActionCreator("cat")

    let newState = profileReducer(state, action)

    expect(newState.posts[2].message).toBe("cat")

})

it ("should be correct delete post", () => {

    let action = deletePostActionCreator(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(1)

})