import React from 'react';
import { Link } from 'react-router-dom';

const HouseListItem = ({ house }) => {
  const houseId = house.id;
  return (
    <div>
      <Link to={`/house/${houseId}`} className="img-div">
        <img
          data-testid="image"
          src={house.image}
          alt={house.name}
        />
        <div className="img-overlay" />
      </Link>
      <p>{house.name}</p>
      <p>{house.price}</p>
    </div>
  )
};

export default HouseListItem;