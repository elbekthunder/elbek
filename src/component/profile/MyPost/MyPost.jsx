import React from 'react';
import Post from "./Post/Post";

const MyPost = (props) => {

    let postsElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
      props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText (text);
    }

    return (
        <div>
            <div>
                <textarea onChange={ onPostChange }
                          ref={newPostElement}
                          value={props.newPostText}/>
                <div>
                    <button onClick={onAddPost}>add post</button>
                </div>
            </div>
             {postsElements}
        </div>
    );
};

export default MyPost;