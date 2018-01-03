import React from 'react';

import DateToggle from '../DateToggle';
import DateDropdown from '../DateDropdown';

const Date = (props) => {
  const {
    toggle,
    onToggle,
    dates,
    onClick
  } = props;

    if(dates !== undefined){
      return (
        <div className="date">
          <DateToggle
            onClick={onToggle}
          />
          <DateDropdown
            className={toggle === false ? "inactive" : "active"}
            dates={dates.map(el => el.date)}
            onClick={onClick}
          />
        </div>
      )
    }
    else{
      return(
        <div>loading...</div>
      )
    }
}

export default Date;
