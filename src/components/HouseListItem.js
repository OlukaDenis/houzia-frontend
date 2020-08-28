import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { houseShape } from '../helpers/propTypeShapes';
import { formatCurrency } from '../helpers/appUtils';
import '../styles/HouseListItem.scss';

const HouseListItem = ({ house }) => {
  const houseId = house.id;
  return (
    <div className="houseItem">
      <Link to={`/house/${houseId}`} className="imgDiv">
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
