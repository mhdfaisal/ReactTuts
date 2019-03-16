import React from 'react';
import UserHeader from './UserHeader';
import './PostListItem.css';
const PostListItem = (props)=>{
    return(
        <div className="postCard">
            <UserHeader userId={props.item.userId} />
            <div>{props.item.id}</div>
            <div>{props.item.title}</div>
            <div>{props.item.body}</div>
        </div>
    )
}

export default PostListItem;