import React, { Component } from 'react';
import './signup.css';
import {Link } from "react-router-dom";

class Signup2 extends Component {
    state = {  
        weight:0,
        height:0,
        bmi:0
    }

    // bmi = (e)=>{
    //     const weight=document.getElementById('weight').value;
    //     const height=document.getElementById('height').value
    //     const bmi= weight/Math.pow(height,2) * 10000
    //     let bmidisp = document.getElementById("bmi");
    //     let disp = "BMI - "+ (bmi.toString())
    //     console.log(disp);
    //     bmidisp.value=disp;
    // }

    onsubmit = (e)=>{
        e.preventDefault();
    }

    render() { 
        console.log(this.props)
        return (  

            <div className="container">
            
            <div className="card container shadow-sm mt-3 col-lg-4 p-3 mb-5 bg-white rounded">

             <div class="form-group">   
            <h5 className="" >Personal info</h5>
            </div>


            <div class="form-group">
            {/* <label for="Name">Name</label> */}
            <input type="number" class="form-control" name="weight" onChange={this.props.onChange} id="weight" placeholder="Weight in KG" aria-describedby="Weight" />
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            

            <div class="form-group">
            {/* <label for="Name">Name</label> */}
            <input type="number" name="height" class="form-control"onChange={this.props.onChange} id="height"placeholder="Height in Meters" onKeyUp={this.bmi}/>

            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>

            <div class="form-group">
            <select name='fitPlan' onChange={this.props.onChange} class="form-control" id="fitPlan">
                <option value="" disabled selected>Fitness plan</option>
                    <option value="Weight Loss">Weight Loss</option>
                    <option default value="Maintain">Maintain</option>
                </select>
            </div>
            
            <div class="form-group">
            <select onChange={this.props.onChange} name='gender' class="form-control" id="gender">
                <option value="" disabled selected>Gender</option>
                    <option value="Male">Male</option>
                    <option default value="Female">Female</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="dob">Date of birth</label>
                <input type="date"onChange={this.props.onChange} name='dob' class="form-control" id="dob" aria-describedby="Date of birth" />
                {/* <small id="doesNotMatch" class="form-text text-danger">Password does not match</small> */}
            </div>


            <div class="form-group">
            <button onClick={e=>{this.props.onSignUp(e)}} className="btn btn-primary col-12" id="next" value="SignUp">SignUp</button>
            {/* <input type="submit" id="done" value="Done"/> */}
            </div>

            <div class="form-group">
            <Link to="/login"><button className="btn btn-outline-primary col-12" value="Login" id='login'>Login</button></Link>
            </div>


            </div>
            </div>













            // <div>
            //     <form action="">
            //     <input type="number" name="weight" id="weight" placeholder="Weight in CM"/>
            //     <input type="number" name="height" id="height"placeholder="Height in KG" onKeyUp={this.bmi}/>

               

            
            //     <input type="text" name="bmi" id="bmi"placeholder="BMI" disabled/>
            //     <input type="text" name="bmi" id="bmi"placeholder="Catogry" disabled/>
            
                
            //     <input type="submit" id="done" value="Done"/>
            //     <input type="submit" value="Cancel" id='cancel'/>
            //     </form>
            // </div>
            

        );
    }
}
 
export default Signup2;