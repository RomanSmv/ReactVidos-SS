import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/Profile-reduce";

type MyPostsPropsType = {

}


const MyPosts = (props: any) => {
    let postsElements = props.posts.map((p:any)=> <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let onPostChange = () => {
        if(newPostElement.current){
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
        }
    }

    return (
        <div>
            <div>
                <div>
                <textarea onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}
                />
                </div>
                <div>
                    <button onClick={addPost}>Add post
                    </button>
                </div>
            </div>

            <div className={s.postsBlock}>
                <h3>My posts</h3>

                <div>
                    New post
                </div>
                <div className={s.post}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}
export default MyPosts;