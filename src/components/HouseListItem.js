import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { houseShape } from '../helpers/propTypeShapes';
import { formatCurrency } from '../helpers/appUtils';
import '../styles/HouseListItem.scss';
import { Col, Card } from 'react-bootstrap';
import '../styles/HouseDetail.scss';

const HouseListItem = ({ house }) => {
  const houseId = house.id;
  return (
    <Col md={6} lg={4} sm={10} style={{ marginBottom: 16 }}>
      <Card className="shadow houseCard" style={{ border: 'none' }}>
        <Link to={`/house/${houseId}`} className="imgDiv">
          <Card.Img variant="top" src={house.image} style={{ height: 300 }} />
        </Link>
        <Card.Body>
          <Card.Title><p className="houseName">{house.name}</p></Card.Title>
          <Card.Text>
            <p className="housePrice">
              <span>{formatCurrency(house.price)}</span>
              <span>per month</span>
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

HouseListItem.propTypes = {
  house: PropTypes.objectOf(houseShape).isRequired,
};

export default HouseListItem;
