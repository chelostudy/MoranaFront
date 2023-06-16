import {useEffect, useMemo, useState} from "react";
import Loader from "./components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import Pagination from "./components/UI/Pagination/Pagination";
import {BrowserRouter, Routes, Route, Navigate, Link} from "react-router-dom";
import About from "./pages/about";
import Navbar from "./components/UI/Navbar/Navbar";
import Error from "./pages/error";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import cl from "./styles/App.css"
import Footer from "./components/UI/Footer/Footer";
import footer from "./components/UI/Footer/Footer";
import "@fontsource/inter";

const App = observer(() => {

    return (
        <BrowserRouter>
            <Navbar/>
            <div className="content">
            <AppRouter/>
            </div>
            <Footer/>
        </BrowserRouter>
    );
});

export default App;