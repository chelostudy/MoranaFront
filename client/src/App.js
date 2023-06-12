import {useEffect, useMemo, useState} from "react";
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
import {observer} from "mobx-react-lite";
import cl from "./styles/App.css"

const App = observer(() => {

    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;