import React from "react";
import "./App.module.css"
import Header from "./component/neader/Header";
import Navbar from "./component/navbar/Navbar";
import classes from './App.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./component/Dialogs/DialogsContainer";
import UsersContainer from "./component/users/UsersContainer";
import ProfileContainer from "./component/profile/ProfileContainer";
import Login from "./component/login/Login";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className={classes.app_wrapper}>
                <Header/>
                <Navbar/>
                <div className={classes.content}>
                    <Routes>
                        <Route path={"/profile/:userId*"} element={<ProfileContainer/>} />
                        <Route path="/dialogs/*" element={<DialogsContainer />} />
                        <Route path="/users/*" element={<UsersContainer/>} />
                        <Route path="/Login/*" element={<Login/>} />
                    </Routes>
                </div>
            </div>

        </BrowserRouter>);
}

export default App;
