import React from 'react';

const DateToggle = (props) => {
  const {
    onClick,
  } = props;

  return (
    <div
      className="date-select"
      onClick={onClick}
    >
      Select Date
    </div>
  )
}

export default DateToggle;
