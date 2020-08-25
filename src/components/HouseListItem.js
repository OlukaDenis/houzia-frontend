import React from 'react';

const HouseListItem = ({ house }) => {

  return (
    <div>
      <img 
        src={house.image}
        alt={house.name}
      />
      <p>{house.name}</p>
      <p>{house.price}</p>
    </div>
  )
};

export default HouseListItem;