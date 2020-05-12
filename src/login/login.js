import React, { Component } from 'react';
import {Link } from "react-router-dom";

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container mt-4 ">
                
                <div className="form-group  card pb-3 pt-3 shadow-sm col-lg-4 container">
                <h2 className='text-center'>Login</h2>
                <div class="form-group">
                {/* <label for="exampleInputEmail1">Email address</label> */}
                <input type="email" class="form-control-alternative form-control" placeholder="Email Id" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
              
                <div class="form-group">
                {/* <label for="passwrd">Password</label> */}
                <input type="password" class="form-control form-control-alternative" placeholder="Password" id="passwrd" aria-describedby="passwrd" required />
                </div>
                
                <input type="submit"  className="btn form-group btn-primary col-12" id="next"value="Login"/>
                <input type="submit"  className="btn btn-outline-primary col-12" name="" id="" value='SignUp'/>
                </div>
            </div>
         );
    }
}
 
export default Login;