import React from 'react';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, messages: 'hi, how are you?', likesCount: 12},
                {id: 2, messages: 'it`s my first post! ', likesCount: 11},
            ],
            newPostText:'it-professional'
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
        }
    },

    getState() {
         return this._state;
    },
    _callSubscriber () {},


    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch (action) {
       if (action.type === 'ADD-POST') {
           let newPost = {
               id:5,
               messages:this._state.profilePage.newPostText,
               likesCount:0
           }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
           this._state.profilePage.newPostText = action.newText;
           this._callSubscriber(this._state);
       }
    }
}

window.store = store;
export default store;




// addPost() {
//     let newPost = {
//         id:5,
//         messages:this._state.profilePage.newPostText,
//         likesCount:0
//     }
//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText = '';
//     this._callSubscriber(this._state);
// },
// updateNewPostText (newText) {
//     this._state.profilePage.newPostText = newText;
//     this._callSubscriber(this._state);
// },