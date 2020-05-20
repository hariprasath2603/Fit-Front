import React from 'react';

const HistoryItem = (props) => {

    let{  tripName, distance,duration,date, avgSpeed, calores  } = props.trip;
    let disDate = new Date(date) 
    return ( 
        // <div className="row  hisItemwrap">
        <tr >
            <td className="tripName">{tripName}</td>
            <td className="tripDate">{disDate.getMonth()+ " - " +disDate.getDay()+" - "+disDate.getFullYear()  }</td>
            <td className="tripDist">{ Number((distance).toFixed(2)) + " Km"}</td>
            <td className="tripTime ">{ Number((duration*60).toFixed(2)) + " Min"}</td>
            <td className="">{avgSpeed?Number((avgSpeed).toFixed(2)):0 + " Km/Hr"}</td>
            <td>{Math.round(calores) + " kcal"}</td>
        </tr>
        // {/* </div> */}

     );
}
 
export default HistoryItem;