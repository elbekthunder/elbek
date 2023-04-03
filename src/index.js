import React from 'react';
import store from "./redux/state";
import ReactDOM from 'react-dom/client';
import App from './App';




const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireFree = (state) => {
    root.render(
        <React.StrictMode>,
                 <App state={state}
                 dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>
    );
}


rerenderEntireFree(store.getState());
store.subscribe(rerenderEntireFree);