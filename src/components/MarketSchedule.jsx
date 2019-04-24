import React from 'react';
import marketScheduleDetails from './MarketScheduleDetails';
import Schedule from './Schedule';

function MarketSchedule(){
  return (
    <div>
      <style global jsx>{`
        table {
          background-color: white;
          font-family: sans-serif;
          font-size: 14px;
        }
        td {
          border: 2px solid black;
          background-color: white;
        }
        th {
        border: 2px solid black;
        background-color: lightgrey;
        }
        h2 {
          font-family: sans-serif
        }
      `}
      </style>
      <hr/>
      <h2>Market Schedule</h2>
      <table>
        <tr>
          <th style={{width: 82}}>Day of Week</th>
          <th style={{width: 180}}>Location</th>
          <th style={{width: 140}}>Hours of Operation</th>
          <th style={{width: 40}}>Booth</th>
        </tr>
      </table>
      <table>
        {marketScheduleDetails.map((schedule, index) =>
          <Schedule day={schedule.day}
            location={schedule.location}
            hours={schedule.hours}
            booth={schedule.booth}
            key={index}/>
        )}
      </table>
      <br></br>
    </div>
  );
}

export default MarketSchedule;
