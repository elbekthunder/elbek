import React from 'react';
import Post from "./Post/Post";

const MyPost = (props) => {

    let postsElements = props.posts.
    map(p => <Post message={p.messages} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();
    let addPost = () => {
      props.dispatch({type:'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type:'UPDATE-NEW-POST-TEXT', newText:text};
        props.dispatch(action);
    }

    return (
        <div>
            <div>
                <textarea onChange={ onPostChange }
                          ref={newPostElement}
                          value={props.newPostText}/>
                <div>
                    <button onClick={addPost}>add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
};

export default MyPost;