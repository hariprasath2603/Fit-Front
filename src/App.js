import React from 'react';
import './App.css';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import NavBar from './nav';
import Timer from './timer';
import Signup from "./login/signup";
import Signup2 from './login/signup2';
import History from './dashbord/history';
import Goal from './goal/goal';
import Dashbord from './dashbord/dashbord';
import Test from './dashbord/test';
import Login from './login/login';

function App() {
  return (
    <Router>
      
    <div className="App">
      <NavBar />
      <Switch>
      <Route path="/login"><Login /></Route>
      <Route path="/signup"><Signup /></Route>
      <Route path="/signup2"><Signup2/></Route>
      <Route path='/timer'><Timer /></Route>
      <Route path="/history"> <History /></Route>
      <Route path="/goal"> <Goal /></Route>
      <Route path="/dashbord"> <Dashbord /></Route>
      <Route path="/test"> <Test /></Route>
      </Switch>
    </div>
    
    </Router>
  );
}

export default App;
