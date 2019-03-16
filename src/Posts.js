import React from 'react';
import axios from 'axios';
import PostListItem from './PostListItem';

class Posts extends React.Component{

    state = {
        posts:[]
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => this.setState({posts:[...this.state.posts, ...response.data]}));
    }

    renderPosts = ()=>{
        const dataToRender = this.state.posts.map((item, index)=>{
            return(
                <div key={index}>
                    <PostListItem item={item}/>
                </div>
            )
        });
        return dataToRender;
    }

    render(){
        if(this.state.posts.length>0){
           return <div>{this.renderPosts()}</div>
        }
        return <div>Loading ...</div>
    }
}

export default Posts;