import React, { Component } from 'react';
import Signup2 from './signup2';
import Signup1 from './signup1';
import variable from '../config';
import { Redirect } from "react-router-dom";
import {signUpUser} from '../api/api'
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
        "dob":"",
        'gender':''
     }

     onSignUp = async(e)=>{
         e.preventDefault();
        const { name,email,password,phoneNo,weight,height,fitPlan,dob,gender} =  this.state;
        if(!name|| !email|| !password|| !phoneNo|| !weight|| !height|| !fitPlan|| !dob|| !gender){
            alert("all fileds are required")
        }
        else{
            signUpUser(this.state)
        }
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
        if(localStorage.getItem('access_token'))return <Redirect to="/dashbord" />
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