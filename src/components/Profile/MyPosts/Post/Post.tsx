import React from "react";
import s from './Post.module.css';

const Post = (props: any) => {
    return (


        <div className={s.item}>
            <img src='https://1.bp.blogspot.com/-2CY8L-X-meU/ULS_4AmeGvI/AAAAAAAAFKM/ID0yAFCPZTA/s1600/pic-16.jpg' alt="description of image"/>
            {props.message}

            <div>
                {props.likeCount}
                <span>Like</span>
            </div>
        </div>

    )
}
export default Post;