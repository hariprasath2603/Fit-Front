import React, { Component } from 'react';
import Cycle from '../img/Cycle.svg'
import {Link } from 'react-router-dom';

class Home extends Component {
    state = {  }
    render() { 
        return (  
            <div className="container">
                <div className="jumbotron mt-2 text-center">
                   <h4> Welcome to Tilt-Fit</h4>
                   {/* <a href="https://www.freevector.com/fun-bicycle-vector-30071#">FreeVector.com</a> */}
                   <img src={Cycle}  className='w-100 col-lg-6 ' alt="Bicycle"/>
                        <div className="mt-3 mb-2">Make your journey fit.</div>
                        <div>
<Link to='/login'>            <div className="btn btn-outline-primary  ">
                        LogIn
                        </div></Link>
                        <Link to='/signup'>      <div className="btn btn-primary mt-1">
                            SignUp
                        </div></Link>
                        </div>
                    </div>
            </div>
        );
    }
}
 
export default Home;