import React from 'react';

import '../../../node_modules/react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

import getData from '../../api/getData';

class UsersTable extends React.Component{

    state = {columns:[], users:[], columnIds:[]}

    componentDidMount(){
        this.fetchUsersData();
    }

    fetchUsersData = ()=>{
        getData.get("/rootData")
        .then(response =>{
            let localUsers =[];
            response.data[0].myAccounts.forEach((account)=>{
                account.myUsers.forEach((user)=>{
                    localUsers = [...localUsers, user]
                })
            })
            return localUsers;
        })
        .then(localUsers =>{
            this.setState({users:localUsers, columnIds:Object.keys(localUsers[0])}, 
            ()=> this.setColumns())
            
        })
    }

    setColumns = ()=>{
        const localColumns = this.state.columnIds.map((item)=>{
            return {dataField:item, text:item}
        })
        this.setState({columns:localColumns});
    }

    renderSpinner = ()=>{
       return(
            <div className="spinner-border text-primary " role="status">
            <span className="sr-only">Loading...</span>
            </div>
       )
    }

    renderTable = ()=>{
        return(
            <BootstrapTable keyField = "id"
            columns={this.state.columns}
            data={this.state.users}
            striped
            hover
            cellEdit = {cellEditFactory({mode:"dbclick",blurToSave:true})} 
            /> /*--Searching --*/
        )
    }


    render(){
       return this.state.columns.length > 0 ? (
           <div>
               {this.renderTable()}
           </div>
       ) : (
           <div>{this.renderSpinner()}</div>
       )
    }
}

export default UsersTable;

//npm install --save axios