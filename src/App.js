import './styles/App.css';
import PostItem from "./components/PostItem";
import {useEffect, useMemo, useState} from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/buttons/myButton";
import MyInput from "./components/UI/input/myInput";
import MySelect from "./components/UI/select/mySelect";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/pages";
import Pagination from "./components/UI/Pagination/Pagination";
import {BrowserRouter, Routes, Route, Navigate, Link} from "react-router-dom";
import Posts from "./pages/posts";
import About from "./pages/about";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/error";
import AppRouter from "./components/AppRouter";
import {ReactComponent as ReactLogo} from './img/logo.svg';
import {AuthContext} from "./auth";


function App() {
    const [isAuth, setIsAuth] = useState(false);
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>

    )
}


export default App;
