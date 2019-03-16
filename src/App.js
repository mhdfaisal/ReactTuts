import React from 'react';
import DynamicDeletion from './DynamicDeletion';

class App extends React.Component{
    
    render(){
        return(
            <DynamicDeletion />
        )
    }









    // state = {
    //     users:[
    //         {id:1, name:"XYZ"},
    //         {id:2, name:"ABC"},
    //         {id:3, name:"QWETY"}
    //     ]
    // };

    // renderUsers = ()=>{
    //    const data =  this.state.users.map((item,index)=>{
    //         return(
    //             <div key={index}>
    //                 <div>{item.id}</div>
    //                 <div>{item.name}</div>
    //             </div>
    //         )
    //     });

    //     return data;
    // }

    // onChangeState = ()=>{
    //    const newUsers = this.state.users.filter((item, index)=>{
    //        if(item.id!==1){
    //            return item;
    //        }
    //    })
    //    this.setState({
    //        users:newUsers
    //    });
    // }

    // render(){
    //     return(
    //         <div>
    //             {this.renderUsers()}
    //             <button onClick={this.onChangeState}>Change State</button>
    //         </div>
    //     )
    // }
}
export default App;