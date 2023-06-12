import React from 'react';
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, messages: 'hi, how are you?', likesCount: 12},
                {id: 2, messages: 'it`s my first post! ', likesCount: 11},
                {id: 3, messages: 'it`s my first post! ', likesCount: 11},
                {id: 4, messages: 'it`s my first post! ', likesCount: 11}
            ],
            newPostText: "it-professional"
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'hello'},
                {id: 2, message: 'how are you?'},
                {id: 3, message: 'where are you?'},
                {id: 4, message: 'see you later'},
            ],
            dialogs: [
                {id: 1, name: 'Max'},
                {id: 2, name: 'Thunder'},
                {id: 3, name: 'Kira'},
                {id: 4, name: 'Sane-mi'},
            ],
            newMessageBody: ""
        }
    },

    getState() {
        return this._state;
        },

    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state)
    }
}

window.store = store;
export default store;

