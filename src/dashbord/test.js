import React, { Component } from 'react';
import {useState, useEffect} from 'react';


class Test extends Component {
constructor(){
    super();
    this.state={
        location:[]
    }
    this.location();
    
}    
success=({coords})=>{
    // const {latitude,longitude} = this.state.location[this.state.location.length-1]

    // if(latitude!==coords.latitude)
    console.log("coord",coords);
    this.setState({location:[...this.state.location,{
        latitude:coords.latitude,
        longitude:coords.longitude,
        speed:coords.speed
    }]})

    console.log(this.state)
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
<div>
    {this.state.location.map(e=><div>{"lat - "+e.latitude +" lang - "+e.longitude+" speed - "+e.speed}</div>)}
</div>
  );
    }
}
 
export default Test;




// import React, { Component } from 'react'
// import Chart from "chart.js";
// import classes from "chart.js/dist/Chart.css";
// import pattern from 'patternomaly';

// class Test extends Component {
//     chartRef = React.createRef();
    
//     componentDidMount() {
//         const myChartRef = this.chartRef.current.getContext("2d");
        
//         new Chart(myChartRef, {
//             type: "line",
//             data: {
//                 //Bring in data
//                 labels: [10,15,10,20,15,30,22],
//                 datasets: [
//                     {
//                         label: "Sales",
//                         data: [10,15,10,20,15,30,22],
//                         backgroundColor: ["rgba(41, 197, 250, 0.4)"                        ]   
//                     }
//                 ]
                
//             },
//             options: {
//                 //Customize chart options
//                 scales: {
//                     xAxes: [{
//                         gridLines: {
//                             display:false
//                         }
//                     }],
                
//                 }
//             },
            

//         });
//     }
//     render() {
//         return (
//             <div className={classes.graphContainer+" container"}>
//                 <canvas
//                     id="myChart"
//                     ref={this.chartRef}
//                 />
//             </div>
//         )
//     }
// }


// export default Test;



// import React from "react";
// import { geolocated } from "react-geolocated";
// class Test extends React.Component {


//     componentDidMount() {
//         console.log("hi");
//     }
//     render() {
//         console.log("hi");
//         return !this.props.isGeolocationAvailable ? (
//             <div>Your browser does not support Geolocation</div>
//         ) : !this.props.isGeolocationEnabled ? (
//             <div>Geolocation is not enabled</div>
//         ) : this.props.coords ? (
//             <table>
//                 <tbody>
//                     <tr>
//                         <td>latitude</td>
//                         <td>{this.props.coords.latitude}</td>
//                     </tr>
//                     <tr>
//                         <td>longitude</td>
//                         <td>{this.props.coords.longitude}</td>
//                     </tr>
//                     <tr>
//                         <td>altitude</td>
//                         <td>{this.props.coords.altitude}</td>
//                     </tr>
//                     <tr>
//                         <td>heading</td>
//                         <td>{this.props.coords.heading}</td>
//                     </tr>
//                     <tr>
//                         <td>speed</td>
//                         <td>{this.props.coords.speed}</td>
//                     </tr>
//                 </tbody>
//             </table>
//         ) : (
//             <div>Getting the location data&hellip; </div>
//         );
//     }
// }
// export default geolocated({
//     positionOptions: {
//         enableHighAccuracy: true,
//         maximumAge: 5000,
//         timeout: 5,
//     },
//     watchPosition: true,
//     userDecisionTimeout: Infinity,
//     suppressLocationOnMount: false,
//     geolocationProvider: navigator.geolocation,
//     isOptimisticGeolocationEnabled: true
// })(Test);