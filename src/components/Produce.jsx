import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return (
    <div>
      <tr>
        <td style={{width: 100, verticalAlign: 'middle', textAlign: 'center', fontSize: '18px'}}>{props.month}</td>
        <td style={{width: 150}}><ul>{props.selection.map((item, index) =>
          <li key={index}>{item}</li>)}</ul></td>
      </tr>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired
};

export default Produce;
