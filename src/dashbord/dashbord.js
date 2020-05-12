import React, { Component } from "react";
import Test from "./test";

class Dashbord extends Component {
  state = {};
  render() {
    return (
      <div className="container col-lg-4">
        <div className="row mt-3">
          <div className="col-12">
            <div className="pt-3 pb-3 text-center card shadow-sm  bg-gradient-default text-white rounded-lg" style={{'border-bottom':'5px solid #3f6ad8'}}>
              {/* <div className="rounded-pill col-3 mr-atuto ">Hello</div>
                            <div className="font-weight-bold"></div> */}
              <Test />
            </div>
          </div>
        </div>

        <div className="row mt-2 ">
          <div className="col-12">
            <div className=" card shadow-sm rounded-lg pt-3 pb-3 text-center bg-gradient-default text-white container" style={{'border-bottom':'5px solid #2dce89'}}>
              <div className="font-weight-bold text-left">Daily goal</div>
              <div class="progress mt-2">
                <div
                  class="progress-bar"
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
        <div className="row mt-2">
          <div className="col">
            <div className="pt-3 pb-3 text-center card shadow-sm container rounded-lg bg-gradient-red" style={{'border-bottom':'5px solid rgb(63, 106, 216)'}}>
              <div className="font-weight-bold">Distance</div>
              <span class="text-white mr-2">
                  <i class="fa fa-arrow-down"></i> <span className="font-weight-bold">
                  20 km</span>
                  
                </span>
            </div>
          </div>
          <div className="col">
          <div className="pt-3 pb-3 text-center card shadow-sm container rounded-lg bg-gradient-green" style={{'border-bottom':'5px solid rgb(63, 106, 216)'}}>
              <div className="font-weight-bold">Duration</div>
              <span class="text-white mr-2">
                  <i class="fa fa-arrow-up"></i> <span className="font-weight-bold">
                  90 Hr</span>
                </span>

            </div>

          </div>
        </div>
        <div className=" mt-2">
          <div className="">
            <div className="pt-3 pb-3 text-center card text-white shadow-sm container rounded-lg bg-gradient-primary" style={{'border-bottom':'5px solid #2dce89'}}>
              <span><span className="font-weight-bold">Calores Burnt</span><i className="ml-3 fas fa-dumbbell  "></i></span>
             <span>
              <span className="font-weight-bold">700</span><span className='text-muted'> / 800</span>
              </span>
            </div>
          </div>
          <div className=" mt-2">
          <div className="pt-3 pb-3 text-center card shadow-sm container rounded-lg bg-gradient-default text-white" style={{'border-bottom':'5px solid #f7b924'}}>
          <span><span className="font-weight-bold">Average Speed</span><i class="fas fa-tachometer-slowest"></i></span>
              
              <div className="font-weight-bold">10 Km/hr</div>             
            </div>
                            
          </div>
        </div>
{/* 
        <div style={{ width: "18rem" }}>
          <div class="card card-stats">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <h5 class="card-title text-uppercase text-muted mb-0">
                    New users
                  </h5>
                  <span class="h2 font-weight-bold mb-0">2,356</span>
                </div>
                <div class="col-auto">
                  <div class="icon icon-shape bg-orange text-white rounded-circle shadow">
                    <i class="ni ni-chart-pie-35"></i>
                  </div>
                </div>
              </div>
              <p class="mt-1 mb-0 text-sm">
                <span class="text-success mr-2">
                  <i class="fa fa-arrow-up"></i> 3.48%
                </span>
                <span class="text-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Dashbord;
