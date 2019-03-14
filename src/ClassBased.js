import React from 'react';

class ClassBased extends React.Component{

    render(){
        return(
            <h1>{this.props.heading}</h1>
        )
    }
}

export default ClassBased;