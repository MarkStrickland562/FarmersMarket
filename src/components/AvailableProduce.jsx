import React from 'react';
import availableProduceDetails from './AvailableProduceDetails';
import Produce from './Produce';

function AvailableProduce(){
  return (
    <div>
      <hr/>
      <h2>Available Produce</h2>
      <table>
        <tr>
          <th style={{width: 82}}>Month</th>
          <th style={{width: 120}}>Produce Item</th>
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
