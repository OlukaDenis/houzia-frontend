import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RootLayout from '../components/RootLayout';
import { userShape, houseShape } from '../helpers/propTypeShapes';
import HouseListItem from '../components/HouseListItem';
import { formatCurrency } from '../helpers/appUtils';

const MyProfile = ({ user, favoriteHouses, expense }) => {
  const UserProfile = () => (
    <div className="userProfile">
      <img src={user.image} alt={user.username} />
      <h3>{user.username}</h3>
      <p>{user.email}</p>
      <p>
        <span>My expense: </span>
        {formatCurrency(expense)}
      </p>
      { user.admin && <Link to="/users"><button type="button">Edit Users</button></Link>}
    </div>
  );

  const UserFavorites = () => (
    <div>
      <h3> My Favorites</h3>
      {
            favoriteHouses.length === 0
              ? <p>No favorites </p>
              : favoriteHouses.map(house => (
                <HouseListItem key={house.id} house={house} />
              ))
          }
    </div>
  );

  return (
    <RootLayout>
      { user && <UserProfile />}
      <UserFavorites />
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
