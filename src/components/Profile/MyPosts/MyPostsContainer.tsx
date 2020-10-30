import React from "react";

import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/Profile-reduce";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

type MyPostsPropsType = {}


const MyPostsContainer = (props: any) => {



    return (
        <StoreContext.Consumer>
            {
            (store: any) => {
                let state = store.getState()

                let addPost = () => {

                    store.dispatch(addPostActionCreator())
                }

                let onPostChange = (text: any) => {


                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action)
                }

              return  <MyPosts updateNewPostText={onPostChange}
                         addPost={addPost}
                         posts={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )

}
debugger
export default MyPostsContainer;