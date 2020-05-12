import React, { Component } from 'react';
import {Link } from "react-router-dom";

import './nac.css';
// class NavBar extends Component {
//     state = {  }
//     render() { 
//         return (

//  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//   <a className="navbar-brand" href="#">Tilt-Fit</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse " id="navbarNav">
//     <ul className="navbar-nav">
//       <li className="nav-item active">
//       <Link to="/dashbord"><a className={window.location.pathname=='/dashhbord'?"nav-link active":'nav-link'} href="#">Dashbord </a></Link>
//       </li>
//       <li className="nav-item">
//       <Link to="/history"><a className={window.location.pathname=='/history'?"nav-link active":'nav-link'} href="#">History </a></Link>
//       </li>
//       <li className="nav-item">
//       <Link to="/goal"><a className={window.location.pathname=='/goal'?"nav-link active":'nav-link'} href="#">Goal </a></Link>
//       </li>
//       <li className="nav-item">
//       <Link to="/signup"><a className={window.location.pathname=='/signup'?"nav-link active":'nav-link'} href="#">SignUp </a></Link>
//       </li>
//       <li className="nav-item">
//       <Link to="/timer"><a className={window.location.pathname=='/timer'?"nav-link active":'nav-link'} href="#">Timer </a></Link>
//       </li>
//     </ul>
//   </div>
// </nav> 
//           );
//     }
// }
 
//  export default NavBar;



class NavBar extends Component {
  state = {  }
   openNav() {
       console.log('called')
    document.getElementById("mySidenav").style.width = "250px";
  }
  
   closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  render() { 
    return ( 
      <div>
      <nav id='big-nav'class="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-default">
    <div class="container">
        <a class="navbar-brand" href="/">Tilt - Fit</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-default">
            <div class="navbar-collapse-header">
                <div class="row">
                    <div class="col-6 collapse-brand">
                        <a href="javascript:void(0)">
                            <img src="../../assets/img/brand/blue.png" />
                        </a>
                    </div>
                    <div class="col-6 collapse-close">
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            
            <ul class="navbar-nav ml-lg-auto">
            <li className="nav-item active">
             <Link to="/dashbord"><a className={window.location.pathname=='/dashhbord'?"nav-link active":'nav-link'} href="#">Dashbord </a></Link>
             </li>
             <li className="nav-item">
             <Link to="/history"><a className={window.location.pathname=='/history'?"nav-link active":'nav-link'} href="#">History </a></Link>
             </li>
             <li className="nav-item">
             <Link to="/goal"><a className={window.location.pathname=='/goal'?"nav-link active":'nav-link'} href="#">Goal </a></Link>
             </li>
             <li className="nav-item">
             <Link to="/signup"><a className={window.location.pathname=='/signup'?"nav-link active":'nav-link'} href="#">SignUp </a></Link>
             </li>
             <li className="nav-item">
             <Link to="/timer"><a className={window.location.pathname=='/timer'?"nav-link active":'nav-link'} href="#">Timer </a></Link>
       </li>
            </ul>
            
        </div>
    </div>
</nav>
<div id="mySidenav" className="sidenav bg-gradient-default navbar-dark">
  {/* <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a> */}
  <ul className="container">
            <li className="">
             <Link to="/dashbord"><a onClick={this.closeNav} className={window.location.pathname=='/dashbord'?" text-white  active":' '} href="#"><i class="fas fa-tachometer-alt"></i><span className="col-6">    Dashbord  </span></a></Link>
             </li>
             <li className="">
             <Link to="/history"><a className={window.location.pathname=='/history'?" active text-white":''} onClick={this.closeNav} href="#"> <i class="fas fa-history"></i><span className="col-6"> History </span></a></Link>
             </li>
             <li className="">
             <Link to="/goal"><a className={window.location.pathname=='/goal'?" active text-white":''} onClick={this.closeNav} href="#"> <i class="fas fa-bullseye"></i><span className="col-6">  Goal </span></a></Link>
             </li>
             <li className="">
             <Link to="/signup"><a className={window.location.pathname=='/signup'?" active text-white":''} onClick={this.closeNav} href="#"> <i class="fas fa-user"></i><span className="col-6"> SignUp </span></a></Link>
             </li>
             <li className="">
             <Link to="/timer"><a className={window.location.pathname=='/timer'?" active text-white":''} onClick={this.closeNav} href="#"><i class="fas fa-hourglass-start"></i><span className="col-6"> Timer </span></a></Link>
       </li>
            </ul>

</div>
<div className='small-nav bg-gradient-default'>
<div className='row container '>
<div style={{"font-size":"30px","cursor":"pointer"}} className='bg-default text-white col' onClick={this.openNav}>&#9776; </div>
<div style={{"font-size":"30px"}} className='text-white   col-6 ' onClick={this.openNav}>Tilt-Fit  </div> 
<div col='col'><Link to="/timer"><button className=" btn text-primary btn-white btn-sm" style={{'marginTop':'10%'}}>Start trip</button></Link></div>
</div>
</div>
</div>

     );
  }
}
 
export default NavBar;


{/* <nav class="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-default">
    <div class="container">
        <a class="navbar-brand" href="/">Tilt - Fit</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-default">
            <div class="navbar-collapse-header">
                <div class="row">
                    <div class="col-6 collapse-brand">
                        <a href="javascript:void(0)">
                            <img src="../../assets/img/brand/blue.png" />
                        </a>
                    </div>
                    <div class="col-6 collapse-close">
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            
            <ul class="navbar-nav ml-lg-auto">
            <li className="nav-item active">
             <Link to="/dashbord"><a className={window.location.pathname=='/dashhbord'?"nav-link active":'nav-link'} href="#">Dashbord </a></Link>
             </li>
             <li className="nav-item">
             <Link to="/history"><a className={window.location.pathname=='/history'?"nav-link active":'nav-link'} href="#">History </a></Link>
             </li>
             <li className="nav-item">
             <Link to="/goal"><a className={window.location.pathname=='/goal'?"nav-link active":'nav-link'} href="#">Goal </a></Link>
             </li>
             <li className="nav-item">
             <Link to="/signup"><a className={window.location.pathname=='/signup'?"nav-link active":'nav-link'} href="#">SignUp </a></Link>
             </li>
             <li className="nav-item">
             <Link to="/timer"><a className={window.location.pathname=='/timer'?"nav-link active":'nav-link'} href="#">Timer </a></Link>
       </li>
            </ul>
            
        </div>
    </div>
</nav> */}
