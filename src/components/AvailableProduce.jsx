import React from 'react';
import { Link } from 'react-router-dom';
import availableProduceDetails from './AvailableProduceDetails';
import Produce from './Produce';

function AvailableProduce(){
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
    `}
    </style>
      <Link className="link" to="/">Home</Link>
      <hr/>
      <h2>Available Produce</h2>
      <table>
        <tr>
          <th style={{width: 102, fontSize: '18px'}}>Month</th>
          <th style={{width: 152, fontSize: '18px'}}>Produce Item</th>
        </tr>
      </table>
      <table>
        {availableProduceDetails.map((produce, index) =>
          <Produce month={produce.month}
            selection={produce.selection}
            key={index}/>
        )}
      </table>
    </div>
  );
}

export default AvailableProduce;
