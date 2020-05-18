import React, { Component } from "react";
import Test from "./test";

class Dashbord extends Component {
  state = {};
  render() {
    return (
      <div className="container col-lg-4">
        <div className="row mt-3">
          <div className="col-12">
            <div className="pt-3 pb-3 text-center card shadow-sm  bg-gradient-default text-white rounded-lg" style={{'borderBottom':'5px solid #3f6ad8'}}>
              {/* <div className="rounded-pill col-3 mr-atuto ">Hello</div>
                            <div className="font-weight-bold"></div> */}
              <Test />
            </div>
          </div>
        </div>

        
        <div className="row mt-2">
          <div className="col">
            <div className="pt-3 pb-3 text-center card shadow-sm container rounded-lg bg-gradient-red" style={{'borderBottom':'5px solid #f7b924'}}>
              <div className="font-weight-bold">Distance</div>
              <span className="text-white mr-2">
                  <i className="fa fa-arrow-down"></i> <span className="font-weight-bold">
                  20 km</span>
                  
                </span>
            </div>
          </div>
          <div className="col">
          <div className="pt-3 pb-3 text-center card shadow-sm container rounded-lg bg-gradient-green" style={{'borderBottom':'5px solid rgb(63, 106, 216)'}}>
              <div className="font-weight-bold">Duration</div>
              <span className="text-white mr-2">
                  <i className="fa fa-arrow-up"></i> <span className="font-weight-bold">
                  90 Hr</span>
                </span>

            </div>

          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <div className="pt-3 pb-3 text-center card shadow-sm container rounded-lg bg-gradient-default" style={{'borderBottom':'5px solid rgb(63, 106, 216)'}}>
              <div className="font-weight-bold">Weight Loss</div>
              <span className="text-white mr-2">
                  <i className="fa fa-arrow-down"></i> <span className="font-weight-bold">
                  20 g</span>
                  
                </span>
            </div>
          </div>
          <div className="col">
          <div className="pt-3 pb-3 text-center card shadow-sm container rounded-lg bg-gradient-primary" style={{'borderBottom':'5px solid #f7b924'}}>
              <div className="font-weight-bold">BMI</div>
              <span className="text-white mr-2">
                  <i className="fa fa-arrow-up"></i> <span className="font-weight-bold">
                  23.4</span>
                </span>

            </div>

          </div>
        </div>
        
        <div className="row mt-2 ">
          <div className="col-12">
            <div className=" card shadow-sm rounded-lg pt-3 pb-3 text-center bg-gradient-default text-white container" style={{'borderBottom':'5px solid #2dce89'}}>
              <div className="font-weight-bold text-left">Daily goal</div>
              <div className="progress mt-2">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="10"
                  style={{ width: "10%" }}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className=" mt-2">
          <div className="">
            <div className="pt-3 pb-3 text-center card text-white shadow-sm container rounded-lg bg-gradient-primary" style={{'borderBottom':'5px solid #2dce89'}}>
              <span><span className="font-weight-bold">Calores Burnt</span><i className="ml-3 fas fa-dumbbell  "></i></span>
             <span>
              <span className="font-weight-bold">700</span><span className='text-muted'> / 800</span>
              </span>
            </div>
          </div>
          <div className=" mt-2">
          <div className="pt-3 pb-3 text-center card shadow-sm container rounded-lg bg-gradient-default text-white" style={{'borderBottom':'5px solid #f7b924'}}>
          <span><span className="font-weight-bold">Average Speed</span><i className="fas fa-tachometer-slowest"></i></span>
              
              <div className="font-weight-bold">10 Km/hr</div>             
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
