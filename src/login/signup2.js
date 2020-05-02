import React, { Component } from 'react';
import './signup.css';
import {Link } from "react-router-dom";

class Signup2 extends Component {
    state = {  
        weight:0,
        height:0,
        bmi:0
    }

    bmi = (e)=>{
        const weight=document.getElementById('weight').value;
        const height=document.getElementById('height').value
        const bmi= weight/Math.pow(height,2) * 10000
        let bmidisp = document.getElementById("bmi");
        let disp = "BMI - "+ (bmi.toString())
        console.log(disp);
        bmidisp.value=disp;
    }

    onsubmit = (e)=>{
        e.preventDefault();
    }

    render() { 
        return (  

            <div className="container">
            
            <form className="card container shadow-sm mt-3 col-lg-4 p-3 mb-5 bg-white rounded">

             <div class="form-group">   
            <h5 className="" >Personal info</h5>
            </div>


            <div class="form-group">
            {/* <label for="Name">Name</label> */}
            <input type="number" class="form-control" name="weight" id="weight" placeholder="Weight in KG" aria-describedby="Weight" />
            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            

            <div class="form-group">
            {/* <label for="Name">Name</label> */}
            <input type="number" name="height" class="form-control" id="height"placeholder="Height in Meters" onKeyUp={this.bmi}/>

            {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>

            <div class="form-group">
            <select name="plan" class="form-control" id="plan">
                <option value="" disabled selected>Fitness plan</option>
                    <option value="WeightLoss">Weight Loss</option>
                    <option value="Maintain">Maintain</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="dob">Date of birth</label>
                <input type="date" class="form-control" id="dob" aria-describedby="Date of birth" />
                {/* <small id="doesNotMatch" class="form-text text-danger">Password does not match</small> */}
            </div>

            <div class="form-group">
            <Link to="/signup2"><input type="submit" className="btn btn-outline-info col-12" value="Cancel" id='cancel'/></Link>
            </div>

            <div class="form-group">
            <Link to="/signup2"><input type="submit"  className="btn btn-info col-12" id="next"value="Next"/></Link>
            {/* <input type="submit" id="done" value="Done"/> */}
            </div>   
            </form>
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