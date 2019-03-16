import React from 'react';
import axios from 'axios';

class UserHeader extends React.Component{

    state={
        userData:{}
    }

    componentDidMount(){
        //To include a varible inside a string `text.. ${}` -> String Interpolation / Template Literal
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.userId}`)
        .then(userData => {this.setState({userData:userData})
        console.log(userData);
        }
        );
    }

    /* Object.keys */
    // obj = {name:"Faisal", id:"1"}

    // arr = ["name", "id"] -> 2

    render(){
        if(Object.keys(this.state.userData).length>0){
            return(
                <div>{this.state.userData.data.name}</div>
            )
        }
        return <div>Loading ...</div>
    }
}

export default UserHeader;