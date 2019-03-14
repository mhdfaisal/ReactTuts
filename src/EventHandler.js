import React from 'react';
import './EventHandler/EventHandler.css';


// const handleClick= ()=>{
//     console.log("clicked");
// }

const changeHandler = (e)=>{
    console.log(e.target.value);
}

const EventHandler = ()=>{

    return(
        // <button onClick={handleClick}>Click me</button>

        <div>
            {/* <input type="text" onChange={(e)=> {changeHandler(e)} }
            style={ {margin:"5px", border:"2px solid #000"} }/> */}
            
            <input className="input" type="text" onChange={(e)=> {changeHandler(e)} }/>
        </div>

    )
}

export default EventHandler;