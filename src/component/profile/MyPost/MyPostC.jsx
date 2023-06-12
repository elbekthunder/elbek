// import React from 'react';
// import Post from "./Post/Post";
//
// class MyPost extends React.Component {
//
//     constructor(props) {
//         super(props)
//         let postsElements =
//             this.props.posts.map(p => <Post message={p.messages} likesCount={p.likesCount}/>)
//
//         let newPostElement = React.createRef();
//
//         let onAddPost = () => {
//             this.props.addPost();
//         }
//
//         let onPostChange = () => {
//                 let text = newPostElement.current.value;
//                 this.props.updateNewPostText(text);
//             }
//         ;
//     }
//
//
//     render() {
//         return (
//             <div>
//                 <div>
//                 <textarea onChange={onPostChange}
//                           ref={newPostElement}
//                           value={props.newPostText}/>
//                     <div>
//                         <button onClick={onAddPost}>add post</button>
//                     </div>
//                 </div>
//                 {postsElements}
//             </div>
//         );
//     }
//
// }
//
// export default MyPost;