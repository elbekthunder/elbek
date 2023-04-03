import React from "react";
import "./App.module.css"
import Header from "./component/neader/Header";
import Navbar from "./component/navbar/Navbar";
import Profile from "./component/profile/Profile";
import Dialogs from "./component/Dialogs/Dialogs";
import classes from './App.module.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";



const App = (props) => {
    return (
        <BrowserRouter>
            <div className={classes.app_wrapper}>
                <Header/>
                <Navbar/>
                <div className={classes.content}>
                    <Routes>
                        <Route path="/profile/*" element={<Profile profilePage={props.state.profilePage}
                                                                   dispatch={props.dispatch}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>}/>
                    </Routes>
                </div>

            </div>
        </BrowserRouter>);
}

export default App;
