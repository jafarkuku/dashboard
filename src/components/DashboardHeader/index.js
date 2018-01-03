import React from 'react';

import Date from '../Date';

const DashboardHeader = (props) => {
  const {
    dates,
    onClick,
    toggle,
    onToggle,
    selectedDate
  } = props;

  return (
    <div className="dashboard-header">
      <h1 className="title">Dashboard</h1>
      <Date
        dates={dates}
        onClick={onClick}
        toggle={toggle}
        onToggle={onToggle}
      />
      <h1 className="dashboard-date">{selectedDate}</h1>
    </div>
  )
}

export default DashboardHeader;
