import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nac.css";

/*
This component containes navbar component.
It has two nav bar one for small screen and another one.
Here closing and opening navigation bar is only for the 
*/

class NavBar extends Component {
  state = {};

  componentDidMount() {
    //This one looking for global mouse click event and close the navbar
    document.addEventListener("mousedown", this.closeNav);
  }

  componentWillUnmount() {
    // This one removes the event listening
    document.removeEventListener("mousedown", this.closeNav);
  }

  //when user logout this function removes token and redirect user to login page
  logout = () => {
    localStorage.removeItem("access_token");// removes  current session token generated for the user
    this.closeNav(); // close navigation bar
    window.location.href = "/login"; // redirect to login oage
  };

  // when user click the hamburger menu it open the side navigation bar
  openNav() {
    console.log("called");
    document.getElementById("mySidenav").style.width = "250px";
  }
  //This one close the nav bar 
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  render() {
    return (
      <div>
        <nav
          id="big-nav"
          className="navbar navbar-horizontal navbar-expand-lg navbar-dark bg-default"
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              Tilt - Fit
            </a>
            {/* hamburger menu for medium size screen */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-default"
              aria-controls="navbar-default"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar for the large screen */}
            <div className="collapse navbar-collapse" id="navbar-default">
              <ul className="navbar-nav ml-lg-auto">
                
                <li className="nav-item active">
                  <Link
                    to="/dashbord"
                    // Check weather the menu is active or not
                    className={
                      window.location.pathname === "/dashhbord"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Dashbord{" "}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/history"
                    className={
                      window.location.pathname === "/history"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    History{" "}
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link
                    to="/update"
                    className={
                      window.location.pathname === "/update"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Update{" "}
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link
                    to="/signup"
                    className={
                      window.location.pathname === "/signup"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    SignUp{" "}
                  </Link>
                </li>
                
                <li className="nav-item">
                  <Link
                    to="/timer"
                    className={
                      window.location.pathname === "/timer"
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    Timer{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Navbar for large screen ends and for small screen starts */}
        <div id="mySidenav" className="sidenav bg-gradient-default navbar-dark">
          <ul className="container">
            <li
            //chck wheather user sgned in or not and shows the relivent options on navbar
              className={
                localStorage.getItem("access_token") ? "" : "displayNone"
              }
            >
              <Link
                to="/dashbord"
                onClick={this.closeNav}
                className={
                  window.location.pathname === "/dashbord"
                    ? " text-white  active"
                    : " "
                }
              >
                <i className="fas fa-tachometer-alt"></i>
                <span className="col-6"> Dashbord </span>
              </Link>
            </li>

            <li
              className={
                localStorage.getItem("access_token") ? "" : "displayNone"
              }
            >
              <Link
                to="/history"
                className={
                  window.location.pathname === "/history"
                    ? " active text-white"
                    : ""
                }
                onClick={this.closeNav}
              >
                {" "}
                <i className="fas fa-history"></i>
                <span className="col-6"> History </span>
              </Link>
            </li>
            
            <li
              className={
                localStorage.getItem("access_token") ? "" : "displayNone"
              }
            >
              <Link
                to="/update"
                className={
                  window.location.pathname === "/update"
                    ? " active text-white"
                    : ""
                }
                onClick={this.closeNav}
              >
                {" "}
                <i className="fas fa-bullseye"></i>
                <span className="col-6"> Update</span>
              </Link>
            </li>
            
            <li
              className={
                localStorage.getItem("access_token") ? "" : "displayNone"
              }
            >
              <Link
                to="/timer"
                className={
                  window.location.pathname === "/timer"
                    ? " active text-white"
                    : ""
                }
                onClick={this.closeNav}
              >
                <i className="fas fa-hourglass-start"></i>
                <span className="col-6"> Timer </span>
              </Link>
            </li>
            
            <li
              className={
                !localStorage.getItem("access_token") ? "" : "displayNone"
              }
            >
              <Link
                to="/login"
                className={
                  window.location.pathname === "/login"
                    ? " active text-white"
                    : ""
                }
                onClick={this.closeNav}
              >
                <i className="fas fa-user"></i>
                <span className="col-6"> LogIn </span>
              </Link>
            </li>
            
            <li
              className={
                !localStorage.getItem("access_token") ? "" : "displayNone"
              }
            >
              <Link
                to="/signup"
                className={
                  window.location.pathname === "/signup"
                    ? " active text-white"
                    : ""
                }
                onClick={this.closeNav}
              >
                {" "}
                <i className="fas fa-user-plus"></i>
                <span className="col-6"> SignUp </span>
              </Link>
            </li>

            <li
              className={
                localStorage.getItem("access_token") ? "" : "displayNone"
              }
            >
              <Link
                to="/login"
                className={
                  window.location.pathname === "/logout"
                    ? " active text-white"
                    : ""
                }
                onClick={this.logout}
              >
                <i className="fas fa-sign-out-alt"></i>
                <span className="col-6"> LogOut </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="small-nav bg-gradient-default">
          <div className="row container ">
              {/* hamburger menu for small screens */}
            <div
              style={{ fontSize: "30px", cursor: "pointer" }}
              className="bg-default text-white col"
              onClick={this.openNav}
            >
              &#9776;{" "}
            </div>
            {/* Title of the app */}
            <div
              style={{ fontSize: "30px" }}
              className="text-white   col-6 "
              onClick={this.openNav}
            >
              Tilt-Fit{" "}
            </div>
            
            <div col="col">
              <Link to="/timer">
            
            {/* Button to start trip where it redirects to the timer page and starts timer */}
            
                <button
                  className={" btn text-primary btn-white btn-sm"}
                  style={{ marginTop: "10%" }}
                >
                  Start Trip
                </button>
            
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
