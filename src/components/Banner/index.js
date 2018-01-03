import React from 'react';

const Banner = (props) => {
  const {
    company_name,
    user,
    team,
    selected_date
  } = props
  return (
    <div className="banner">
      <div className="banner-details">
        <h1 className="company-name">{company_name}.</h1>
        <div className="user-details">
          <p className="user-name">{user}</p>
          <p className="user-team">{team}</p>
        </div>
        <p className="selected-date">{selected_date}</p>
      </div>
    </div>
  )
}

export default Banner;
