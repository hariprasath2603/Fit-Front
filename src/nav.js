import React, { Component } from 'react';
import {Link } from "react-router-dom";

class NavBar extends Component {
    state = {  }
    render() { 
        return (
<nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <a class="navbar-brand" href="#">Tilt-Fit</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link to="/dashbord"><a class="nav-link active" href="#">Dashbord </a></Link>
      </li>
      <li class="nav-item">
      <Link to="/history"><a class="nav-link" href="#">History </a></Link>
      </li>
      <li class="nav-item">
      <Link to="/goal"><a class="nav-link" href="#">Goal </a></Link>
      </li>
      <li class="nav-item">
      <Link to="/signup"><a class="nav-link" href="#">SignUp </a></Link>
      </li>
    </ul>
  </div>
</nav>
          );
    }
}
 
export default NavBar;