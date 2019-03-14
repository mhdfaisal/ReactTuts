import React from 'react';

const Header = (props)=>{

    return(
        <div>
            <h1>{props.data}</h1>
            <h2>{props.secondary}</h2>
        </div>
    );  
}

export default Header;