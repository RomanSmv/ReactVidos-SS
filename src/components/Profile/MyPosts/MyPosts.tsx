import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/Profile-reduce";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    updateNewPostText: (text: string | undefined) => void
    addPost: () => void
}


const MyPosts: React.FC<any> = (props) => {
    let postsElements = props.posts.map((p: PostType) => <Post message={p.message} likeCount={p.likeCount}/>)

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