import React, { Component } from 'react';
import Signup2 from './signup2';
import Signup1 from './signup1';
import variable from '../config';

const {baseURL} = variable;

class Signup extends Component {
    state = { 
        "name":"",
        "email":"",
        "password": "",
        "phoneNo":"",
        "weight":0,
        "height":0,
        "fitPlan":"",
        "dob":""
     }

     onSignUp = async(e)=>{
         e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state)
        };
        const response = await fetch(`${baseURL}/v0/user/goal`, requestOptions);
        console.log(await response.json())
     }

     onValueUpdate =(e)=>{
         const {name,value} = e.target
         if(name === 'weight' || name==='height')
         this.setState({
            [name]:parseFloat(value)
           })
        else
         this.setState({
             [name]:value
            })

        console.log(this.state)
     }
    render() { 
        console.log(baseURL)
        return (  
            <div>
            <Signup1 onChange={this.onValueUpdate}/>
            <Signup2 onChange={this.onValueUpdate} onSignUp={this.onSignUp}/>
            </div>
        );
    }
}
 
export default Signup;