import React, {FC} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostType} from "../../../redux/Profile-reduce";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/Validators/Validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

type PropsType = {
    posts: Array<PostType>
    newPostText: string
    addPost: (newPostText: string) => void
}

const maxLength10 = maxLengthCreator(10)

const MyPosts = React.memo((props: PropsType) => {
    let postsElements = props.posts.map((p: PostType) => <Post message={p.message} likeCount={p.likeCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let OnAddPost = (values: FormValueType) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={OnAddPost}/>
            <div>
                New post
            </div>
            <div className={s.post}>
                {postsElements}
            </div>
        </div>
    )
}
)
type FormPropsType = {}
type FormValueType = { newPostText: string }
const AddNewPostForm: FC<InjectedFormProps<FormValueType, FormPropsType> & FormPropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                       validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm<FormValueType & FormPropsType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)
export default MyPosts;