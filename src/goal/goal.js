import React from 'react';
import "./goal.css"
import { Redirect } from "react-router-dom";
import {updateGoal} from "../api/api";
const Goal = () => {
    if(!localStorage.getItem('access_token'))return <Redirect to="/login" />
    // const distance=(e,da)=>{
    //     console.log(da)
    //     document.getElementById("dropDist").innerText=da;

    // }
    // const time=(e,da)=>{
    //     document.getElementById("dropTime").innerText=da;
    // }
    function update(e){
        let data = {}
        const weight = document.getElementById('weight').value
        const height = document.getElementById('height').value
        const distance = document.getElementById('distance').value
        const duration = document.getElementById('duration').value
        
        updateGoal({weight,height,distance,duration});
        
        
        //window.location.href = '/dashbord'
    }
    return ( 
        <div className="container col-lg-4">
            <h3 className="mt-3 mb-3 display-5">Update</h3>

           <div class="form-group input-group">
               <label className="displayBlock form-control bg-secondary">Distance in km</label>
            <input type="text" class="form-control"  placeholder="   Distance in km"   id="distance" aria-label="Text input with dropdown button" />
            {/* <div class="input-group-append">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropDist">Distance</button>
                <div class="dropdown-menu">
                <option class="dropdown-item" onClick={(e)=>distance(e,"Km")} value="">KM</option>
                <option class="dropdown-item" onClick={(e)=>distance(e," M ")} value="">M</option>                
                </div>
            </div> */}
            </div>

            <div class="form-group input-group">
            <label className="displayBlock form-control bg-secondary">Time in Hours</label>
            <input type="text" class="form-control"  placeholder="   Time in Hours" id="duration" aria-label="Text input with dropdown button" />
            {/* <div class="input-group-append">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropTime">     Time     </button>
                <div class="dropdown-menu">
                <option class="dropdown-item"  onClick={(e)=>time(e,"Hr")} value="">Hr</option>
                <option class="dropdown-item"  onClick={(e)=>time(e,"Min")} value="">Min</option>                
                </div>
            </div> */}
            </div>
            <div class="form-group input-group">
            <label className="displayBlock form-control bg-secondary">Weight in kg</label>
            <input type="text" class="form-control"  placeholder="   Weigh in kg" id="weight" aria-label="Text input with dropdown button" />
            </div>

            <div class="form-group input-group">
            <label className="displayBlock form-control bg-secondary">Height in Meter</label>
            <input type="text" class="form-control"  placeholder="   Height in m" id="height" aria-label="Text input with dropdown button" />
            </div>

            <div className="btn btn-primary mb-4" onClick={update}>Update</div>
            
        <br/>
            <div class="card">
            <h5 class="card-header">Recomended Goal</h5>
            <div class="card-body">
                
                <div className="recDist">Distance - 20 KM</div>
                    <div className="recTime">Time - 30 M</div>
                    <div className="recAvg">Average speed -  10KM/Hr</div>
                    <div className="recCalore">300 Calores will burn</div> 
                    <br/>
               <a href="#" class="btn btn-primary" onClick={()=>updateGoal({distance:30,duration:30})}>Set as goal</a>
            </div>
            </div>
        </div>
     );
}
 
export default Goal;