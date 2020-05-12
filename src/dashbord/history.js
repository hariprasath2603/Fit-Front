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
                avgSpeed:'30',
                calores:300

              },
              {  tripName:"Trip 2",
                tripDist:40,
                tripDate:"07/12/20",
                TripTime:"30",
                avgSpeed:'30',
                calores:300
              },
              {  tripName:"Trip 3",
                tripDist:20,
                tripDate:"08/12/20",
                TripTime:"30",
                avgSpeed:'30',
                calores:300
              },
              {  tripName:"Trip 4",
                tripDist:20,
                tripDate:"09/12/20",
                TripTime:"31",
                avgSpeed:'30',
                calores:300
              }
    
            ]
        
     }
    render() { 
        return ( 
            <div className="container mt-2">
                <h2>History</h2>
                <table className='table table-responsive table-striped text-center mt-2'>
                  <thead>
                  <tr>
                    <th>Trip Name</th>
                    <th>Date</th>
                    <th>Disatance</th>
                    <th>Duration</th>
                    <th>Average speed</th>
                    <th>Calores burnt</th>
                  </tr>
                  </thead>
                  <tbody className="">{this.state.trips.map(e=> <HistoryItem trip={e}/>)}</tbody>
                </table>
            </div>
         );
    }
}
 
export default History;
