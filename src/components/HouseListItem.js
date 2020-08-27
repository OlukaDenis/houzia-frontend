import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { houseShape } from '../helpers/propTypeShapes';
import { formatCurrency } from '../helpers/appUtils';

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
      <p>{formatCurrency(house.price)}</p>
    </div>
  );
};

HouseListItem.propTypes = {
  house: PropTypes.objectOf(houseShape).isRequired,
};

export default HouseListItem;
