import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { houseShape } from '../helpers/propTypeShapes';
import { formatCurrency } from '../helpers/appUtils';
import '../styles/HouseListItem.scss';
import '../styles/HouseDetail.scss';

const imgStyle = {
  objectFit: 'cover',
  height: 300,
  width: '100%'
}

const HouseListItem = ({ house }) => {
  const houseId = house.id;
  return (
    <Col md={6} lg={4} sm={10} style={{ marginBottom: 16 }}>
      <Card className="shadow houseCard" style={{ border: 'none' }}>
        <Link to={`/house/${houseId}`} className="imgDiv">
          <Card.Img variant="top"  data-testid="image" src={house.image} style={imgStyle} />
        </Link>
        <Card.Body>
          <Card.Title><p className="houseName">{house.name}</p></Card.Title>
          <Card.Text className="housePrice">
              <span>{formatCurrency(house.price)}</span>
              <span>per month</span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

HouseListItem.propTypes = {
  house: houseShape,
};

HouseListItem.defaultProps = {
  house: {}
}

export default HouseListItem;
