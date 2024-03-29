import React, { Component } from 'react';
import './signup.css'
import {Link } from "react-router-dom";

class Signup1 extends Component {
    state = {  }

    passwrdNotMatch = (e)=>{
        console.log(e)
        console.log(document.getElementById('passwrd').value)
        if(document.getElementById('passwrd').value===document.getElementById('confrmpass').value){
            document.getElementById('doesNotMatch').innerText=" "
        }
        else{
            document.getElementById('doesNotMatch').innerText="Password does not match"
        }
    }

    render() { 
        return ( 

            <React.Fragment>
                <div className="container">
                <h2 className="mt-3 mb-3" style={{textAlign:"center"}}>Welcome to Fitness</h2>
                <form className="card container shadow-sm col-lg-4 p-3 mb-5 bg-white rounded">
                    {/* <div className="form-group">
                    <div class="form-group mb-2">
                <input type="text" class="form-control-plaintext" name="name" id="name" placeholder="Name"/>
                </div> */}

                <div class="form-group">
                <label htmlFor="Name">Name</label>
                <input type="text" class="form-control" onChange={this.props.onChange} id="Name" name="name" aria-describedby="Name" />
                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>

                <div class="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" name="email" onChange={this.props.onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>

                <div class="form-group">
                <label htmlFor="passwrd">Password</label>
                <input type="password" class="form-control" onChange={this.props.onChange} id="passwrd" name='password' aria-describedby="passwrd" />
                </div>

                <div class="form-group">
                <label htmlFor="confrmpass">Confirm Password</label>
                <input type="password" class="form-control" onKeyUp={this.passwrdNotMatch} name='passwordMatch' id="confrmpass" aria-describedby="confrmpass" />
                <small id="doesNotMatch" class="form-text text-danger">Password does not match</small>
                </div>

{/* 
                <input type="password" name="passwrd" id="passwrd" placeholder="password"/>
                <input type="password" name="confrmpass" onKeyUp={this.passwrdNotMatch} id="confrmpass" placeholder="confirm password"/>
                <div id="doesNotMatch">Password does not match</div> */}
                
                
                
                {/* <div id="bdaycover">
                <label htmlhtmlFor="bday">Birthday</label>
                <input type="date" name="bday" id="bday" placeholder='bday'/>
                </div> */}
                {/* <input type="email" name="email" id="email" placeholder="Email"/> */}
                {/* <input type="tel" name="phoneno" id="phoneno" placeholder="Phone No"/> */}
                <div class="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="tel" class="form-control" name='phoneNo' onChange={this.props.onChange} id="phoneno" aria-describedby="Phone no" />
                {/* <small id="doesNotMatch" class="form-text text-danger">Password does not match</small> */}
                </div>
                {/* <Link to="/signup2"><input type="submit"  className="btn btn-primary col-12"id="next"value="Next"/></Link> */}
                
                </form>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Signup1;