import React from 'react';

class DynamicDeletion extends React.Component{
    
    state = {
        users:[
            {id:1, name:"XYZ"},
            {id:2, name:"ABC"},
            {id:3, name:"QWETY"}
        ]
    };

    onDeleteHandler = (itemID)=>{
        const newUsers = this.state.users.filter((item,index)=>{
           return item.id!==itemID ? item: null
        });
        this.setState({
            users: newUsers
        })
    }

    renderUsers = ()=>{
        const data = this.state.users.map((item,index)=>{
            return(
                <div key={index}>
                    <span style={{margin:"5px"}}>{item.id}</span>
                    <span style={{margin:"5px"}}>{item.name}</span>
                    <button style={{margin:"5px"}} onClick={()=> this.onDeleteHandler(item.id)}>Delete</button>   
                </div>
            )
        });
        return data;
    }
    render(){
        return(
            <div>
                {this.renderUsers()}
            </div>
        )
    }
}
export default DynamicDeletion;