import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/Profile-reduce";

type MyPostsPropsType = {

}


const MyPosts = (props: any) => {
    let postsElements = props.posts.map((p:any)=> <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let OnAddPost = () => {
        props.addPost()

    }

    let onPostChange = () => {
        let text = newPostElement.current?.value
            props.updateNewPostText(text)

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
                    <button onClick={OnAddPost}>Add post
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