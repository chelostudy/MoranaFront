import React from 'react';
import MyButton from "./UI/buttons/myButton";
import {Link, useNavigate} from 'react-router-dom';
import 'react-router-dom';
import logo from "../img/logo2.png";
import dead from '../img/docent.png';
const PostItem = (props) => {
    const router = useNavigate();
    return (
        <div className="post__container" onClick={() => router(`/posts/${props.post.id}`)}>
            <div className="user__pic__container">
                <img src={dead} alt="dead" className="user__pic"/>
            </div>
            <div className="post__content">
                <strong>{props.post.title}</strong><br/>
                <strong>Имя</strong><br/>
                <strong>Отчество</strong><br/>
                <div>
                    {props.post.body}
                </div>
                <div >
                    <h5 className="post__location">Somewhere</h5>
                </div>
            </div>
        </div>
    );
};

export default PostItem;