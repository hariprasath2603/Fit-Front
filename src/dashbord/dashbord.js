import React, { Component } from "react";
import Test from "./test";
import axios from'axios';
import variables from '../config';
import { Redirect } from "react-router-dom";


class Dashbord extends Component {
  state = {};
  async componentDidMount(){
    const token = localStorage.getItem("access_token");
    const headers = {
        'Content-Type': 'application/json',
        'x-auth-token':token
      }
      console.log("dashbord api ")
      axios.get(variables.baseURL+"/v0/dashbord", {
          headers: headers
        })
        .then((response) => {
            console.log(response)
            this.setState({...response.data}) 

        })
        .catch((error) => {
          //alert(error.msg)
          if(error.response)
          if(error.response.data.msg==="Token is not valid"){
            localStorage.removeItem("access_token");
            window.location.href="/login"
          }
          console.log(error.response)
          return Promise.reject(error.response);
        })

        

    // const value = await dashbord();
  }
  render() {
    if(!localStorage.getItem('access_token'))return <Redirect to="/login" />
    let goalPercent = 0;
    console.log(this.state)
    const { avgSpeed,calores,distance,duration, goal,bmi, name, weightLoss  } = this.state;
    if(distance){
      console.log(goal)
      goalPercent =((parseInt(distance)/parseInt(goal.distance) * 100)+(parseInt(duration)/parseInt(goal.duration) * 100) )/2;
      goalPercent = goalPercent>100?100:goalPercent
      console.log(goalPercent)
    }
    return (
      <div className="container col-lg-4">
        <div className="row mt-3">
          <div className="col-12">
            <div className="pt-3 pb-3 text-center card shadow-sm  bg-gradient-default text-white rounded-lg" style={{'borderBottom':'5px solid 3f6ad8'}}>
              {/* <div className="rounded-pill col-3 mr-atuto ">Hello</div>
                            <div className="font-weight-bold"></div> */}
              <Test />
            </div>
          </div>
        </div>

        
        <div className="row mt-2">
          <div className="col">
            <div className="pt-3 pb-3 text-center card shadow-sm container rounded-lg bg-gradient-primary" style={{'borderBottom':'5px solid f7b924'}}>
              <div className="font-weight-bold text-white">Distance</div>
              <span className="text-white mr-2">
                  {/* <i className="fa fa-arrow-down"></i> */}
                   <span className="font-weight-bold">
                          {distance?Number((distance).toFixed(2)):0}KM</span>
                  
                </span>
            </div>
          </div>
          <div className="col">
          <div className="pt-3 pb-3 text-center card shadow-sm container rounded-lg bg-gradient-green" style={{'borderBottom':'5px solid gb(63, 106, 216)'}}>
              <div className="font-weight-bold">Duration</div>
              <span className="text-white mr-2">
                  {/* <i className="fa fa-arrow-up"></i>  */}
                  <span className="font-weight-bold">
                  {duration?Number((duration).toFixed(2)):0} Hr</span>
                </span>

            </div>

          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <div className="pt-3 pb-3 text-center card shadow-sm container rounded-lg bg-gradient-default" style={{'borderBottom':'5px solid 0779e4'}}>
              <div className="font-weight-bold text-white">Weight Loss</div>
              <span className="text-white mr-2">
                  {/* <i className="fa fa-arrow-down"></i> */}
                   <span className="font-weight-bold">
                  {weightLoss?Number((weightLoss).toFixed(2)):0} g</span>
                  
                </span>
            </div>
          </div>
          <div className="col">
          <div className="pt-3 pb-3 text-center card shadow-sm container rounded-lg bg-gradient-primary" style={{'borderBottom':'5px solid f7b924'}}>
              <div className=" text-white font-weight-bold">BMI</div>
              <span className="text-white mr-2">
                  {/* <i className="fa fa-arrow-up"></i>  */}
                  <span className="font-weight-bold">
                          {bmi?Number((bmi).toFixed(2)):0}</span>
                </span>

            </div>

          </div>
        </div>
        
        <div className="row mt-2 ">
          <div className="col-12">
            <div className=" card shadow-sm rounded-lg pt-3 pb-3 text-center text-white container bg-gradient-green" style={{'borderBottom':'5px solid f5365c '}}>
              <div className="font-weight-bold text-left">Daily goal</div>
              <div className="progress mt-2">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={goalPercent?goalPercent:0}
                  style={{ width: goalPercent?goalPercent+'%':0 }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-2">
          <div className="">
            <div className="pt-3 pb-3 text-center card text-white shadow-sm container rounded-lg bg-gradient-primary" style={{'borderBottom':'5px solid 2dce89'}}>
              <span><span className="font-weight-bold">Calores Burnt</span><i className="ml-3 fas fa-dumbbell  "></i></span>
             <span>
                          <span className="font-weight-bold">{calores?Math.round(calores):0}</span><span className='text-muted'> / 800</span>
              </span>
            </div>
          </div>
          <div className=" mt-2">
          <div className="pt-3 pb-3 text-center card shadow-sm container mb-3 rounded-lg bg-gradient-default text-white" style={{'borderBottom':'5px solid 79d70f'}}>
          <span><span className="font-weight-bold">Average Speed</span><i className="fas fa-tachometer-slowest"></i></span>
              
              <div className="font-weight-bold">{avgSpeed?Number((avgSpeed).toFixed(2)):0} Km/hr</div>             
            </div>
                            
          </div>
        </div>

{/* 
        <div style={{ width: "18rem" }}>
          <div className="card card-stats">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h5 className="card-title text-uppercase text-muted mb-0">
                    New users
                  </h5>
                  <span className="h2 font-weight-bold mb-0">2,356</span>
                </div>
                <div className="col-auto">
                  <div className="icon icon-shape bg-orange text-white rounded-circle shadow">
                    <i className="ni ni-chart-pie-35"></i>
                  </div>
                </div>
              </div>
              <p className="mt-1 mb-0 text-sm">
                <span className="text-success mr-2">
                  <i className="fa fa-arrow-up"></i> 3.48%
                </span>
                <span className="text-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Dashbord;
