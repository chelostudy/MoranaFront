import React from 'react';
import MyButton from "./UI/buttons/myButton";
import {Link, useNavigate} from 'react-router-dom';
import 'react-router-dom';
import logo from "../img/logo2.png";
import dead from '../img/img.png';
const PostItem = (props) => {
    const router = useNavigate();
    return (
        <div className="post">
            <div className="user__pic">
                <img src={dead} alt="dead" className="user__img"/>
            </div>
            <div className="post__content">
                <strong>{props.post.title}
                    {props.post.name}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Открыть</MyButton>
            </div>

        </div>
    );
};

export default PostItem;