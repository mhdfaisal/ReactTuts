import React from 'react';
import FormField from './FormField/FormField';
class App extends React.Component{

    state={
        formData:{
            name:{
                element:"name",
                config:{
                    value:'',
                    type:"text",
                    placeholder:"Name here"
                }
            },
            password:{
                element:"password",
                config:{
                    value:'',
                    type:"text",
                    placeholder:"Password here"
                }
            }
        }
    }

    onChangeHandler = (e, element)=>{
        
        const newElement = {...this.state.formData[element], config:{...this.state.config, value:e.target.value}}

        this.setState({formData: {...this.state.formData, [element]:newElement} });

       
        console.log(newElement)
    }

    render(){
        return(
            <form>
                <FormField formData={this.state.formData.name}
                 onChangeHandler={this.onChangeHandler}/>

                <FormField formData={this.state.formData.password}
                 onChangeHandler={this.onChangeHandler}/>
                
            </form>
        )
    }





















    //Uncontrolled

    // constructor(props){
    //     super(props);
    //     this.nameRef = React.createRef();
    // }

    // render(){
    //     return(
    //         <div>
    //             <input type="text" ref={this.nameRef}
    //             onChange={e=> console.log(this.nameRef.current)}/> <br/><br/>
    //             <input type="text" />
    //         </div>
    //     )
    // }




    // Controlled
    // state={
    //     name:''
    // }

    // onChangeHandler = (e)=>{
    //     this.setState({name:e.target.value})
    // }

    // render(){
    //     console.log(this.state.name);
    //     return(
    //         <input type="text" 
    //         value={this.state.name}
    //         onChange={(e)=> this.onChangeHandler(e)}/>
    //     )
    // }
}
export default App;

