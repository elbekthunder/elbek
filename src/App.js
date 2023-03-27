import React from "react";
import  "./App.css"
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Profile from "./component/Profile";

const App = () => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
