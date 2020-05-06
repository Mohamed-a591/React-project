import React from "react";

//thear we use const instad of function
const Samie = (props) => {
  const { name , age , state } = props; //this props that i pass it from the App.js
    //this a esy method to use the props we can use the anther one like in the last 
    //in the function component we don't use "this" 
    return(
        <div>
            <div> Nmae:   { name  }   </div>
            <div> Age:   {  age  }   </div>
            <div> state: { state }   </div>
            <div> { props.gnd } </div>  
        </div>    
    );
}

export default Samie;


//the same output 
/*import React, {Component} from 'react';

class Samie extends Component{
    //
    render(){
        const { name , age , state } = this.props; //this props that i pass it from the App.js
        //this a esy method to use the props we can use the anther one like in the last 
        return(
            <div>
               <div> Nmae:   { name  }   </div>
                <div> Age:   {  age  }   </div>
                <div> state: { state }   </div>
                <div> { this.props.gnd } </div>  
            </div>    
        );
    }
}
export default Samie;*/