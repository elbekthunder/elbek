import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />);

    let newPostMessage = React.createRef()
    let onClick = () => {
        let text = newPostMessage.current.value;
    }

    return (
        <div className={classes.dialog}>

            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>

            <div className={classes.block__area}>
                <textarea ref={newPostMessage}></textarea>
                <div className={classes.block__button}>
                    <button  onClick={onClick}>addPost</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;