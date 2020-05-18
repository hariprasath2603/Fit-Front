// import React, { Component } from 'react';
// import {useState, useEffect} from 'react';

// class Test extends Component {
// constructor(){
//     super();
//     this.state={
//         location:[]
//     }
//     this.location();

// }
// success=({coords})=>{
//     // const {latitude,longitude} = this.state.location[this.state.location.length-1]

//     // if(latitude!==coords.latitude)
//     console.log("coord",coords);
//     this.setState({location:[...this.state.location,{
//         latitude:coords.latitude,
//         longitude:coords.longitude,
//         speed:coords.speed
//     }]})

//     console.log(this.state)
// }
// error=()=>{}
// location=()=>{
//     const options = {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0
//       };
//    const id = navigator.geolocation.watchPosition(this.success, this.error, options);
//       this.setState({id});
//       //console.log(this.state);
// }

//     render() {
//   return (
// <div>
//     {this.state.location.map(e=><div>{"lat - "+e.latitude +" lang - "+e.longitude+" speed - "+e.speed}</div>)}
// </div>
//   );
//     }
// }

// export default Test;

import React, { Component } from "react";
import Chart from "chart.js";
import classes from "chart.js/dist/Chart.css";

class Test extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    
var chart    = this.chartRef.current.getContext("2d");
 var gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(58, 196, 125, 0.5)');
gradient.addColorStop(0.5, 'rgba(58, 196, 125, 0.25)');
gradient.addColorStop(1, 'rgba(58, 196, 125, 0)');


var data  = {
  labels: [1,2,3,4,5,6,7,8,9,10,11,12],
datasets: [{
  label: 'Distance in Km ',
  backgroundColor: gradient,
  pointBackgroundColor: 'white',
  borderWidth: 4,
  borderColor: 'rgba(58, 196, 125, 1)',
  data:[1,2,3,4,5,6,7,5,4,3,2,1]
}]
};


var options = {
responsive: true,
maintainAspectRatio: true,
animation: {
easing: 'easeInOutQuad',
duration: 520
},
scales: {
xAxes: [{
  gridLines: {
    color: 'rgba(200, 200, 200, 0.05)',
    lineWidth: 1,
    display:false,
  },


}],
yAxes: [{
  gridLines: {
    color: 'rgba(200, 200, 200, 0.09)',
    lineWidth: 1,
    legend:false,
    display:false
  },
  ticks: {
    display: false //this will remove only the label
}
}]
},
elements: {
line: {
  tension: 0.4
}
},
legend: {
display: false
},
point: {
backgroundColor: 'white'
},
tooltips: {
titleFontFamily: 'Open Sans',
backgroundColor: 'rgba(0,0,0,0.3)',
titleFontColor: 'rgba(58, 196, 125, 1)',
caretSize: 5,
cornerRadius: 2,
xPadding: 10,
yPadding: 10
}
};


new Chart(chart, {
type: 'line',
data: data,
options: options
});
    // const myChartRef = this.chartRef.current.getContext("2d");
    // var gradient = myChartRef.createLinearGradient(0, 0, 0, 400);
    // gradient.addColorStop(0, 'rgba(250,174,50,1)');   
    // gradient.addColorStop(1, 'rgba(250,174,50,0)');
    // new Chart(myChartRef, {
    //   type: "line",
    //   data: {
    //     //Bring in data
        // labels: [
        //   0,
        //   1,
        //   2,
        //   3,
        //   4,
        //   5,
        //   6,
        //   7,
        //   8,
        //   9,
        //   10,
        //   11,
        //   12,
        //   13,
        //   14,
        //   15,
        //   16,
        //   17,
        //   18,
        //   19,
        //   20,
        //   21,
        //   22,
        //   23,
        // ],
    //     datasets: [
    //       {
    //         fillColor : gradient, // Put the gradient here as a fill color
    //                 strokeColor : "#ff6c23",
    //                 pointColor : "#fff",
    //                 pointStrokeColor : "#ff6c23",
    //                 pointHighlightFill: "#fff",
    //                 pointHighlightStroke: "#ff6c23",
    //         label: "Distance",
    //         data: [
    //           0,
    //           0,
    //           0,
    //           0,
    //           0,
    //           10,
    //           15,
    //           10,
    //           20,
    //           15,
    //           0,
    //           0,
    //           0,
    //           0,
    //           0,
    //           0,
    //           0,
    //           0,
    //           0,
    //           0,
    //           0,
    //           0,
    //           0,
    //           0,
    //           0,
    //           0,
    //           0,
    //         ],
            
    //       },
    //     ],
    //   },
    //   options: {
        
    //     responsive: true,
    //     datasetStrokeWidth : 3,
    //     pointDotStrokeWidth : 4,
    //     tooltipFillColor: "rgba(0,0,0,0.8)",
    //     tooltipFontStyle: "bold",
    //     tooltipTemplate: "<%if (label){%><%=label + ' hod' %>: <%}%><%= value + '°C' %>",
    //     scaleLabel : "<%= Number(value).toFixed(0).replace('.', ',') + '°C'%>",
    //     //Customize chart options
    //     scales: {
    //       xAxes: [
    //         {
    //           gridLines: {
    //             display: false,
    //           },
    //         },
    //       ],
    //     },
    //   },
    // });
  }
  render() {
    return (
      <div className={classes.graphContainer + " container bg-gradient-default"} >
        <div className="card   bg-gradient-default">
          <div className="card-header bg-defalut" style={{'padding':"0"}}>
            <h5 className="h3 text-white mb-0 bg-default">Daily Fit </h5>
          </div>

          <div className="card-body bg-gradient-default">
            <div className=" ">
              {/* <canvas id="chart-bars myChart" className="chart-canvas" ref={this.chartRef}></canvas> */}
              <canvas id="myChart" className="text-white" ref={this.chartRef} />
            </div>
          </div>
        </div>

        
      </div>
    );
  }
}

export default Test;

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
