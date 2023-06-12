import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";



let reducers = combineReducers({
    dialogsPage:dialogsReducer,
    profilePage:profileReducer,
    usersPage: usersReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;