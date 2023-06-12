import React from 'react';
import classes from './Dialogs.module.css'
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";



const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogsItem name={d.name} kay={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message kay={m.id} message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }


    return (
        <div className={classes.dialog}>

            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.block__area}>
                    <textarea
                        value={newMessageBody}
                        placeholder='Enter your message'
                        onChange={onNewMessageChange}/>
                    <div className={classes.block__button}>
                        <button onClick={onSendMessageClick}>addPost</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;