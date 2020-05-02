import React from 'react';

const HistoryItem = (props) => {

    let{  tripName, tripDist, tripDate, TripTime  } = props.trip;

    return ( 
        <div className="row  hisItemwrap">
            <div className="tripName col-6 col-lg-3">{tripName}</div>
            <div className="tripDist col-6 col-lg-3">{"Distance - " + tripDist + "Km"}</div>
            <div className="tripDate col-6 col-lg-3">{tripDate}</div>
            <div className="tripTime col-6 col-lg-3 ">{"Duration - " + TripTime + "Min"}</div>
        </div>

     );
}
 
export default HistoryItem;