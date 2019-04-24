import React from 'react';
import { Link } from 'react-router-dom';
import marketScheduleDetails from './MarketScheduleDetails';
import Schedule from './Schedule';
import vegetableImage from '../assets/images/vegetables.jpeg';

function MarketSchedule(){
  return (
    <div>
      <style global jsx>{`
        body {
          background-color: Goldenrod;
        }
        table {
          background-color: Cornsilk;
          font-family: sans-serif;
          font-size: 14px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }
        td {
          border: 2px solid black;
          background-color: Cornsilk;
        }
        th {
        border: 2px solid black;
        background-color: Wheat;
        }
        h2 {
          font-family: sans-serif;
          text-align: center;
          font-size: 48px;
          font-style: italic;
          color: ForestGreen;
          text-shadow: 1px 1px 2px black;
        }
        .link {
          font-family: sans-serif;
          font-size: 24px;
          color: white;
          text-decoration: none;
        }
        .image {
          text-align: center;
        }
      `}
      </style>
      <Link className="link" to="/">Home</Link>
      <hr/>
      <h2>Market Schedule</h2>
      <table>
        <tr>
          <th style={{width: 82}}>Day of Week</th>
          <th style={{width: 180}}>Location</th>
          <th style={{width: 140}}>Hours of Operation</th>
          <th style={{width: 42}}>Booth</th>
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
      <br></br><br></br><br></br><br></br>
      <div className="image">
        <img src={vegetableImage} height="60%" width="60%"/>
      </div>
    </div>
  );
}

export default MarketSchedule;
