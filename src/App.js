import React from 'react';
import './App.css';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import NavBar from './nav/nav';
import Timer from './timer';
import Signup from "./login/signup";
import Signup2 from './login/signup2';
import History from './dashbord/history';
import Goal from './goal/goal';
import Dashbord from './dashbord/dashbord';
import Test from './dashbord/test';
import Login from './login/login';
import Home from './dashbord/home';
import NotFound from './404';

function App() {
  return (
    <Router>
      
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/"><Home /></Route>
      <Route exact path="/login"><Login /></Route>
      <Route  exact path="/signup"><Signup /></Route>
      {/* <Route path="/signup2"><Signup2/></Route> */}
      <Route exact path='/timer'><Timer /></Route>
      <Route exact path="/history"> <History /></Route>
      <Route exact path="/update"> <Goal /></Route>
      <Route exact path="/dashbord"> <Dashbord /></Route>
      <Route exact path="/test"> <Test /></Route>
      <Route ><NotFound /></Route>
      </Switch>
    </div>
    
    </Router>
  );
}

export default App;
