import React, { Component } from 'react';

class Dashbord extends Component {
    state = {  }
    render() { 
        return ( 

            <div className="container">
                <div className="row mt-3">
                    <div className="col-12">
                        <div className="pt-3 pb-3 text-center card shadow-sm  container rounded-lg">
                            <div className="rounded-pill col-3 mr-atuto ">Hello</div>
                            <div className="font-weight-bold">Main</div>
                        </div>
                    </div>
                    </div>
                <div className="row mt-3">
                    <div className="col">
                        <div className="pt-3 pb-3 text-center card shadow-sm container rounded-lg">
                            <div className="font-weight-bold">Distance</div>
                            <div className="font-weight-bold">20KM</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="pt-3 pb-3 text-center card shadow-sm container rounded-lg">
                            <div className="font-weight-bold">Average Speed</div>
                            <div className="font-weight-bold">20KM</div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <div className="pt-3 pb-3 text-center card shadow-sm container rounded-lg">
                            <div className="font-weight-bold">Calores Burnt</div>
                            <div className="font-weight-bold">20KM</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="pt-3 pb-3 text-center card shadow-sm container rounded-lg">
                            <div className="font-weight-bold">Duration</div>
                            <div className="font-weight-bold">20KM</div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Dashbord;