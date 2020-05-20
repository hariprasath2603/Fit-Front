import React, { Component } from 'react';
import {Link } from "react-router-dom";
import {loginRequest} from '../api/api'
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

class Login extends Component {
  
    state = {  }
    

     
    onLogin =e=>{
      
     
        const email  = document.getElementById('emailLogin').value;
        const password =  document.getElementById('password').value;

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) )
        
            if(password){
              loginRequest(email,password)
              
            }
            else alert("Enter password")
            
        
        else  alert("Enter a valid email")

    }
    render() { 
      if(localStorage.getItem('access_token'))return <Redirect to="/dashbord" />
        return ( 
            <div className="container mt-4 ">
                
                <div className="form-group  card pb-3 pt-3 shadow-sm col-lg-4 container">
                <h2 className='text-center'>Login</h2>
                <div className="form-group">
                {/* <label for="exampleInputEmail1">Email address</label> */}
                <input type="email" className="form-control-alternative form-control" placeholder="Email Id" id="emailLogin" aria-describedby="emailHelp" required  />
                </div>
              
                <div className="form-group">
                {/* <label for="passwrd">Password</label> */}
                <input type="password" className="form-control form-control-alternative" placeholder="password" id="password" aria-describedby="password" required />
                </div>
                
                <input type="submit"  className="btn form-group btn-primary col-12"  onClick={this.onLogin}id="next"value="Login"/>
                <Link to="/signup"><input type="submit"  className="btn btn-outline-primary col-12" name="" id="" value='SignUp'/></Link>
                </div>
            </div>
         );
    }
}
 
export default Login;