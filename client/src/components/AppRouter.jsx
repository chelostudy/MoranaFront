import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/about";
import Error from "../pages/error";
import {AuthContext} from "../auth";
import Admin from "../pages/admin";
import Loader from "./UI/Loader/Loader";
import Price from "../pages/price";
import Delivery from "../pages/delivery";
import Contacts from "../pages/contacts";
import Privacy from "../pages/privacy/privacy";
import {observer} from "mobx-react-lite";

const AppRouter = observer(() => {

    //const {isAuth, isLoading} = useContext(AuthContext);
    //if (isLoading){
        //return <Loader/>
    //}
    return (
        <Routes>
            <Route path='/about' element={<About />} />
            <Route path="/error" element={<Error />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/delivery" element={<Delivery/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/price" element={<Price/>} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/*" element={<Navigate to="/about" replace />} />
        </Routes>
    );
});

export default AppRouter;

//<Route exact path='/posts/:id' element={<PostIdPage />} />