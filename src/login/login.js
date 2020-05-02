import React, { Component } from 'react';
import {Link } from "react-router-dom";

class Login extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container mt-4">
                <div className="form-group card pb-3 pt-3 shadow-sm col-lg-4 container">
                <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>

                <div class="form-group">
                <label for="passwrd">Password</label>
                <input type="password" class="form-control" id="passwrd" aria-describedby="passwrd" required />
                </div>

                <input type="submit"  className="btn btn-primary col-12"id="next"value="Login"/>
                </div>
            </div>
         );
    }
}
 
export default Login;