import React, { Component } from "react";

class Users extends Component{
    state = {
        name:null,
        age: null,
        kind:null
    }
    handlChange = (e) => {

        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handelsubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handelsubmit} >
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handlChange}/>
                    <label htmlFor="name">Age:</label>
                    <input type="text" id="age" onChange={this.handlChange}/>
                    <label htmlFor="name">kind:</label>
                    <input type="text" id="kind" onChange={this.handlChange}/>
                    <button>submit</button>
                </form>
            </div>
        );
    }
}

export default Users;