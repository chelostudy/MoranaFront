import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/about";
import Posts from "../pages/posts";
import Error from "../pages/error";
import PostIdPage from "../pages/PostIdPage";
import {AuthContext} from "../auth";
import Login from "../pages/login";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {

    const {isAuth, isLoading} = useContext(AuthContext);
    if (isLoading){
        return <Loader/>
    }
    return (
        <Routes>
            <Route path='/about' element={<About />} />
            <Route exact path='/posts' element={<Posts />} />
            <Route exact path='/posts/:id' element={<PostIdPage />} />
            <Route path="/error" element={<Error />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<Navigate to="/about" replace />} />
        </Routes>
    );
};

export default AppRouter;