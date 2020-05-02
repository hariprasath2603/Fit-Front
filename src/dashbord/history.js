import React, { Component } from 'react';
import './history.css'
import HistoryItem from './historyItem';
class History extends Component {
    state = { 
        trips:
            [
              {  tripName:"Trip 1",
                tripDist:20,
                tripDate:"06/12/20",
                TripTime:"30",
              },
              {  tripName:"Trip 2",
                tripDist:40,
                tripDate:"07/12/20",
                TripTime:"30",
              },
              {  tripName:"Trip 3",
                tripDist:20,
                tripDate:"08/12/20",
                TripTime:"30",
              },
              {  tripName:"Trip 4",
                tripDist:20,
                tripDate:"09/12/20",
                TripTime:"31",
              }
    
            ]
        
     }
    render() { 
        return ( 
            <div className="container">
                <h2>History</h2>
                  <div className="container">{this.state.trips.map(e=> <HistoryItem trip={e}/>)}</div>
            </div>
         );
    }
}
 
export default History;
