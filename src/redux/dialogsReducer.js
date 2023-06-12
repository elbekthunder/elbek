const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
};

export const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return  {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return  {
                ...state,
                newMessageBody: '',
                messages: [...state.messages,{id: 4, message: body}]
            };
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;

// switch (action.type) {
//     case ADD_POST: {
//         let newPost = {
//             id: 5,
//             messages: state.newPostText,
//             likesCount: 0
//         }
//         let stateCopy = {...state};
//         stateCopy.posts = [...state.posts];
//         stateCopy.posts.push(newPost)
//         stateCopy.newPostText = '';
//         return stateCopy;
//
//     case UPDATE_NEW_POST_TEXT: {
//         let stateCopy = {...state};
//
//         stateCopy.newPostText = action.newText;
//         return stateCopy;
//     }
//     default:
//         return state;
// }
// }