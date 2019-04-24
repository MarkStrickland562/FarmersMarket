import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props){
  return (
    <div>
      <tr>
        <td style={{width: 80}}>{props.day}</td>
        <td style={{width: 180}}>{props.location}</td>
        <td style={{width: 140}}>{props.hours}</td>
        <td style={{width: 40}}>{props.booth}</td>
      </tr>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default Schedule;
