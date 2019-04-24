import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return (
    <div>
      <style global jsx>{`
        div {
          background-color: beige;
        }
      `}
      </style>
      <tr>
        <td style={{width: 80}}>{props.month}</td>
        <td style={{width: 120}}><ul>{props.selection.map((item, index) =>
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
