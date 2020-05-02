import React from 'react';
import "./goal.css"
const Goal = () => {

    const distance=(e,da)=>{
        console.log(da)
        document.getElementById("dropDist").innerText=da;

    }
    const time=(e,da)=>{
        document.getElementById("dropTime").innerText=da;
    }
    return ( 
        <div className="container col-lg-4">
            <h3 className="mt-3 mb-3 display-5">Daily goal</h3>

           <div class="form-group input-group">
            <input type="text" class="form-control"  placeholder="Distance"   id="distanceGoal" aria-label="Text input with dropdown button" />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropDist">Distance</button>
                <div class="dropdown-menu">
                <option class="dropdown-item" onClick={(e)=>distance(e,"Km")} value="">KM</option>
                <option class="dropdown-item" onClick={(e)=>distance(e," M ")} value="">M</option>                
                </div>
            </div>
            </div>

            <div class="form-group input-group">
            <input type="text" class="form-control"  placeholder="Time" id="timeGoal" aria-label="Text input with dropdown button" />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="dropTime">     Time     </button>
                <div class="dropdown-menu">
                <option class="dropdown-item"  onClick={(e)=>time(e,"Hr")} value="">Hr</option>
                <option class="dropdown-item"  onClick={(e)=>time(e,"Min")} value="">Min</option>                
                </div>
            </div>
            </div>

            
        <br/>
            <div class="card">
            <h5 class="card-header">Recomended Goal</h5>
            <div class="card-body">
                
                <div className="recDist">Distance - 20 KM</div>
                    <div className="recTime">Time - 30 M</div>
                    <div className="recAvg">Average speed -  10KM/Hr</div>
                    <div className="recCalore">300 Calores will burn</div> 
                    <br/>
               <a href="#" class="btn btn-primary">Set as goal</a>
            </div>
            </div>
        </div>
     );
}
 
export default Goal;