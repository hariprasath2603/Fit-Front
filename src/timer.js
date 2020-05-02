import React, { Component } from 'react';

import stop from './img/stop.png';
import play from './img/play.png';
import './timer.css';

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
        location:[]

     }
     this.location();
    }

    timerFunc = setInterval(()=>{
        if(this.state.seconds === 59)
        {if(this.state.minutes === 59)
            {
                this.setState({hour:this.state.hour + 1})
            }
            this.setState({minutes:(this.state.minutes + 1)%60})
        }
        this.setState({seconds:(this.state.seconds+1)%60})
        },1000)

     toggelImg = (e)=>{
        //  console.log(e.target);
        //  if(this.state.img === stop){
        this.setState({img:play})
        //         this.timerFunc.start()   
        //         console.log(this.timerFunc)  
        //  }
        //  else{
        //     this.setState({img:stop})
        //     this.timerFunc.pause()

        //  }
        clearInterval(this.timerFunc)
     }

     success=({coords})=>{
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
        const avgSpeed = time!=0 ?distance/time:0
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
        if ((lat1 == lat2) && (lon1 == lon2)) {
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


    error=()=>{}
    location=()=>{
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
       const id = navigator.geolocation.watchPosition(this.success, this.error, options);
          this.setState({id});
          //console.log(this.state);
    }
    
    render() { 
        return ( 
            <div id='timerWrap' className="container col-lg-4 text-center mt-4">
                <div id="time" className="timerSection pt-sm-2 pt-lg-5">
                    <h3>Time</h3>
                    <p className="font-weight-bold">{this.state.hour>9?this.state.hour:`0${this.state.hour}`}:{this.state.minutes>9?this.state.minutes:`0${this.state.minutes}`}:{this.state.seconds>9?this.state.seconds:`0${this.state.seconds}`}</p>
                </div>
                <div id="distance" className="timerSection  pt-sm-2 pt-lg-5 ">
                    <h3>Distance</h3>
                    <p className="font-weight-bold">{this.state.distance} KM</p>
                </div>

                <div id="speed" className="timerSection pt-sm-2 pt-lg-5 ">
                    <h3>Average Speed</h3>
                    <p className="font-weight-bold">{Math.floor(this.state.avgSpeed)} km/min</p>
                </div>

               <img src={this.state.img} width="70px" height="70px" onClick={this.toggelImg}alt="Play" className="mb-3"/>
            </div>
         );
    }
}
 
export default Timer;