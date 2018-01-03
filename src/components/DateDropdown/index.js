import React from 'react';
import classNames from 'classnames';

const DateDropdown = (props) => {
  const {
    className,
    onClick
  } = props;

  const render = props.dates.map((el, i) =>
    <li
      key={i}
      onClick={onClick}
      data-id={el}
    >
      {el}
    </li>
  )

  return (
    <ul className={classNames(["date-list", className])}> {render} </ul>
  )
}

export default DateDropdown;
