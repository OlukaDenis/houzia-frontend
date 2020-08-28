import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RootLayout from '../components/RootLayout';
import { userShape, houseShape } from '../helpers/propTypeShapes';
import HouseListItem from '../components/HouseListItem';
import { formatCurrency } from '../helpers/appUtils';
import { Container, Row, Col, Media } from 'react-bootstrap';
import '../styles/UserProfile.scss';

const MyProfile = ({ user, favoriteHouses, expense }) => {
  const UserProfile = () => (
    <Col md={10} sm={10} lg={10}>
      <div className="userProfile">
        <img 
          width={200}
          height={200}
          style={{borderRadius: '50%'}}
          src={user.image} 
          alt={user.username} 
        />
        <div className="userInfo">
          <h4 style={{color: '#333', fontWeight: '700'}}>{user.username}</h4>
          <p style={{color: '#666'}}>{user.email}</p>
          <p className="myExpense">
            <span >Expense: </span>
            {formatCurrency(expense)}
          </p>
          { user.admin && <Link to="/users">
            <button 
            type="button"
            className="btn h-btn h-btn-outlined"
            >Edit Users</button>
            </Link>}
        </div>
      
      </div>
    </Col>
  );

  const UserFavorites = () => (
    <Col md={10} sm={10} lg={12}>
       <h5 style={{marginTop: 30, color: '#555', fontWeight: '900', padding: '10px 0'}}>Favorites Houses</h5>
      <div className="card">
        <div className="card-body">
          {
                favoriteHouses.length === 0
                  ? <p>No favorites </p>
                  : favoriteHouses.map(house => (
                    <HouseListItem key={house.id} house={house} />
                  ))
              }
        </div>
      </div>
    </Col>
  );

  return (
    <RootLayout>
      <Container style={{ paddingTop: 70, marginBottom: 100 }}>
        <Row>
          { user && <UserProfile />}
          <UserFavorites />
        </Row>
      </Container>
      
    </RootLayout>
  );
};

const mapStateToProps = state => ({
  user: state.authReducer.userProfile,
  favoriteHouses: state.authReducer.userFavorites,
  expense: state.authReducer.userExpense,
});

MyProfile.propTypes = {
  user: PropTypes.objectOf(userShape).isRequired,
  favoriteHouses: PropTypes.arrayOf(houseShape).isRequired,
  expense: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(MyProfile);
