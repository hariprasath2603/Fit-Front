import React from 'react';

const HistoryItem = (props) => {

    let{  tripName, tripDist, tripDate, TripTime, avgSpeed, calores  } = props.trip;

    return ( 
        // <div className="row  hisItemwrap">
        <tr>
            <td className="tripName">{tripName}</td>
            <td className="tripDate">{tripDate}</td>
            <td className="tripDist">{ tripDist + "Km"}</td>
            <td className="tripTime ">{ TripTime + "Min"}</td>
            <td className="">{avgSpeed}</td>
            <td>{calores}</td>
        </tr>
        // {/* </div> */}

     );
}
 
export default HistoryItem;