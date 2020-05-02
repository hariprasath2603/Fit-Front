import React, { Component } from 'react';

import stop from './img/stop.png';
import play from './img/play.png';
import './timer.css';

class Timer extends Component {
    state = { 
        hour:0,
        minutes:59,
        seconds:59,
        distance:0,
        avgSpeed:0,
        img:stop

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
         console.log(e.target);
         if(this.state.img === stop){
             this.setState({img:play})
                this.timerFunc.start()     
         }
         else{
            this.setState({img:stop})
            this.timerFunc.pause()
         }
     }
    render() { 
        return ( 
            <div id='timerWrap'>
                <div id="time" className="timerSection">
                    <h1>Time</h1>
                    <p>{this.state.hour>9?this.state.hour:`0${this.state.hour}`}:{this.state.minutes>9?this.state.minutes:`0${this.state.minutes}`}:{this.state.seconds>9?this.state.seconds:`0${this.state.seconds}`}</p>
                </div>
                <div id="distance" className="timerSection">
                    <h1>Distance</h1>
                    <p>{this.state.distance} KM</p>
                </div>

                <div id="speed" className="timerSection">
                    <h1>Average Speed</h1>
        <p>{this.state.avgSpeed} km/hr</p>
                </div>

               <img src={this.state.img} width="70px" height="70px" onClick={this.toggelImg}alt="Play"/>
            </div>
         );
    }
}
 
export default Timer;