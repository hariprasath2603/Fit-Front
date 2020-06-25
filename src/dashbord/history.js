import React, { Component } from 'react';
import './history.css'
import HistoryItem from './historyItem';
import axios from'axios';
import variables from '../config';
import { Redirect } from "react-router-dom";

class History extends Component {
    state = { 
        trips:[
            // [
            //   {  tripName:"Trip 1",
            //     tripDist:20,
            //     tripDate:"06/12/20",
            //     TripTime:"30",
            //     avgSpeed:'30',
            //     calores:300

            //   },
            //   {  tripName:"Trip 2",
            //     tripDist:40,
            //     tripDate:"07/12/20",
            //     TripTime:"30",
            //     avgSpeed:'30',
            //     calores:300
            //   },
            //   {  tripName:"Trip 3",
            //     tripDist:20,
            //     tripDate:"08/12/20",
            //     TripTime:"30",
            //     avgSpeed:'30',
            //     calores:300
            //   },
            //   {  tripName:"Trip 4",
            //     tripDist:20,
            //     tripDate:"09/12/20",
            //     TripTime:"31",
            //     avgSpeed:'30',
            //     calores:300
            //   }
    
            ]
        
     }

     componentDidMount(){
      const token = localStorage.getItem("access_token");
      const headers = {
          'Content-Type': 'application/json',
          'x-auth-token':token
        }
        console.log("dashbord api ")
        axios.get(variables.baseURL+"/v0/trip", {
            headers: headers
          })
          .then((response) => {
              console.log(response)
              this.setState({trips:response.data.Trips}) 
  
          })
          .catch((error) => {
            //alert(error.msg)
            if(error.response.data.msg==="Token is not valid"){
              localStorage.removeItem("access_token");
              window.location.href="/login"
            }
            console.log(error.response)
            return Promise.reject(error.response);
          })
  
     }
    render() { 
      if(!localStorage.getItem('access_token'))
      return <Redirect to="/login" />
        return ( 
            <div className="container mt-2">
                <h2>History</h2>
                  <div className="">{this.state.trips.reverse().map(e=> <HistoryItem key={e.date} trip={e}/>)}</div>
            </div>
         );
    }
}
 
export default History;
