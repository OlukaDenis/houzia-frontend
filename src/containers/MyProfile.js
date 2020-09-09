import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import RootLayout from '../components/RootLayout';
import { userShape, houseShape } from '../helpers/propTypeShapes';
import HouseListItem from '../components/HouseListItem';
import { formatCurrency } from '../helpers/appUtils';
import '../styles/UserProfile.scss';

const MyProfile = ({ user, favoriteHouses, expense }) => {
  const UserProfile = () => (
    <Col md={10} sm={10} lg={10}>
      <div className="userProfile">
        <img
          width={200}
          height={200}
          style={{ borderRadius: '50%' }}
          src={user.image}
          alt={user.username}
        />
        <div className="userInfo">
          <h4 style={{ color: '#333', fontWeight: '700' }}>{user.username}</h4>
          <p style={{ color: '#666' }}>{user.email}</p>
          <p className="myExpense">
            <span>Expense: </span>
            {formatCurrency(expense)}
          </p>
          { user.admin && (
          <Link to="/users">
            <button
              type="button"
              className="btn h-btn h-btn-outlined"
            >
              View Users
            </button>
          </Link>
          )}
        </div>

      </div>
    </Col>
  );

  const UserFavorites = () => (
    <section>
      <h5 style={{
        marginTop: 30, color: '#555', fontWeight: '900', padding: '10px 0',
      }}
      >
        Favorites Houses
      </h5>
      <div className="card">
        <div className="card-body">
          <Row>

            {
                favoriteHouses.length === 0
                  ? <p style={{ padding: 10, height: 400 }}><em>No favorites </em></p>
                  : favoriteHouses.map(house => (
                    <HouseListItem key={house.id} house={house} />
                  ))
              }
          </Row>
        </div>
      </div>
    </section>
  );

  return (
    <RootLayout>
      <Container style={{ paddingTop: 70, marginBottom: 100 }}>

        { user && <UserProfile />}
        <UserFavorites />

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
  user: userShape.isRequired,
  favoriteHouses: PropTypes.arrayOf(houseShape).isRequired,
  expense: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, null)(MyProfile);
