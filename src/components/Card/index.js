import React from 'react';

const Card = (props) => {

  const {
    card_id,
    title,
    info
  } = props;

  return (
    <div
      className="card"
      id={card_id}
    >
      <p className="card-title">{title}</p>
      <h2 className="card-info">{info}</h2>
    </div>
  )
}

export default Card;
