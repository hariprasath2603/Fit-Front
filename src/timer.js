import React, { Component } from 'react';

import stop from './img/stop.png';
import play from './img/play.png';
import './timer.css';
import {putTrip} from './api/api';
import { Redirect } from 'react-router-dom';

class Timer extends Component {
constructor(){
    super();
    this.state = { 
        hour:0,
        minutes:0,
        seconds:0,
        distance:0,
        avgSpeed:0,
        img:stop,
        location:[],
        id:''

     }
     //this.location();
    }

    componentDidMount(){
        this.location()
        
    }

    onStop=(e)=>{
        const {hour,minutes,seconds,distance} = this.state;
        const duration = hour + (minutes/60) + (seconds/3600);
        const avgSpeed =  Math.round(distance/duration);
        const tripName = document.getElementById('tripName').value;
      const   data = {
            Trip:{
            distance,
            duration,
            tripName,
            avgSpeed,
        }
        
    }
    console.log(data);
    putTrip(data)

    }

   
     toggelImg = (e)=>{
        
        clearInterval(this.timerFunc)
        

        const id = this.state.id;
        navigator.geolocation.clearWatch(this.navId);
        this.onStop();
     }

     success=({coords})=>{
        const button = document.getElementById('timerSubmit');
        button.innerText= "stop"
        button.addEventListener("click", this.toggelImg);
        // onClick={this.toggelImg}
        if(this.timerFunc)
        clearInterval(this.timerFunc);

        this.timerFunc = setInterval(()=>{
            if(this.state.seconds === 59)
            {if(this.state.minutes === 59)
                {
                    this.setState({hour:this.state.hour + 1})
                }
                this.setState({minutes:(this.state.minutes + 1)%60})
            }
            this.setState({seconds:(this.state.seconds+1)%60})
            },1000)
    
        let distance;
        console.log("coord",coords);
        const arrLength = this.state.location.length
        if(arrLength>0){
            
             distance = this.distance(this.state.location[arrLength-1].latitude,this.state.location[arrLength-1].longitude,coords.latitude,coords.longitude,this.state.distance)
        }
        else{
            distance = 0 
        }
    
        const time = (this.state.hour*60+this.state.minutes);
        const avgSpeed = time!==0 ?distance/time * 60:0
        this.setState({location:[...this.state.location,{
            latitude:coords.latitude,
            longitude:coords.longitude,
            speed:coords.speed
        }],
        distance,
        avgSpeed
    })
        console.log(this.state)
    }


    distance(lat1, lon1, lat2, lon2,distance) {
        if ((lat1 === lat2) && (lon1 === lon2)) {
            return distance;
        }
        else {
            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = lon1-lon2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            dist = dist * 1.609344 
            return dist+distance;

        }
    }


    error=()=>{
        alert("Please allow location and enable gps")
        const button = document.getElementById('timerSubmit');
        button.innerText= "start";
        button.addEventListener("click", this.location);
    }
    location=()=>{

        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
        
       let id = navigator.geolocation.watchPosition(this.success, this.error, options);
        //   this.setState({[id]:id});
        this.navId =  id;
        // console.log(this.navId)
          //console.log(this.state);
    }

    
    render() { 
        if(!localStorage.getItem('access_token'))return <Redirect to="/login" />
        return ( 
            <div className='text-center container col-lg-3 center-block'>
            <div id='timerWrap' className="row text-center mt-4 mx-auto" >
            {/* <div className="col-12" >
                <div className="col-6 text-left" style={{display:'inline'}}>Trip Name</div>
                <input type="text" className="form-control-alternative col-6 form-control" style={{display:'inline'}}    />
                </div> */}
                <div class="form-group input-group">
            <label className="displayBlock form-control bg-primary text-white">Trip Name</label>
            <input type="text" class="form-control text-center"  value="Default trip" id="tripName" aria-label="Text input with dropdown button" />
            </div>
            {/* <div className="continer " style={{"display":this.timerFunc?"None":"block"}}>
                Allow location permission and enable GPS then refersh this page. 
            </div> */}
                <div id="time" className="card mt-3 p-3 col-sm-12  pt-lg-5 " style={{'border-bottom':'5px solid #3f6ad8'}}>
                    <h3>Time</h3>
                    <p className="font-weight-bold">{this.state.hour>9?this.state.hour:`0${this.state.hour}`}:{this.state.minutes>9?this.state.minutes:`0${this.state.minutes}`}:{this.state.seconds>9?this.state.seconds:`0${this.state.seconds}`}</p>
                </div>
                <div id="distance" className="card mt-3 p-3 col-sm-12  pt-lg-5 " style={{'border-bottom':'5px solid #f7b924'}}>
                    <h3>Distance</h3>
                    <p className="font-weight-bold">{Number((this.state.distance).toFixed(2))} km</p>
                </div>
                
                
                <div id="speed" className="card mt-3 p-3 col-sm-12 pt-lg-5" style={{'border-bottom':'5px solid #d92550'}}>
                    <h3>Average Speed</h3>
                    <p className="font-weight-bold">{Number((this.state.avgSpeed).toFixed(2))} km/h</p>
                </div>

               {/* <img src={this.state.img} width="70px" height="70px" onClick={this.toggelImg}alt="Play" className="mb-3"/> */}
              </div>
               <a href="#"  id="timerSubmit" class="btn mt-3 mb-1 btn-primary">Stop</a>

            </div>
         );
    }
}
 
export default Timer;