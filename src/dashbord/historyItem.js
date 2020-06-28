import React from 'react';

const HistoryItem = (props) => {

    let{  tripName, distance,duration,date, avgSpeed, calores  } = props.trip;
    
    return ( 
        // <div className="row  hisItemwrap">

        <div className="card container shadow-sm mb-2"> 

                    <div><span className="card-title">Trip Name : </span><span className="tripName">{tripName}</span></div>
                    <div><span className="card-title">Date : </span><span className="tripDate">{date.toString().substring(0,10)  }</span></div>
                    <div><span className="card-title">Disatance : </span> <span className="tripDist">{ Number((distance).toFixed(2)) + " km"}</span></div>
                    <div><span className="card-title">Duration : </span><span className="tripTime ">{ Number((duration*60).toFixed(2)) + " min"}</span></div>
                    <div><span className="card-title">Average speed : </span><span className="">{avgSpeed?Number((avgSpeed).toFixed(2)):0 + " km/h"}</span></div>
                    <div><span className="card-title">Calores burnt : </span>            <span>{Math.round(calores) + " kcal"}</span></div>
        </div>
                // {/* </div> */}

     );
}
 
export default HistoryItem;