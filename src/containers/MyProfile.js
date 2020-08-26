import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RootLayout from '../components/RootLayout';
import HouseListItem from '../components/HouseListItem';

const MyProfile = ({ user, favoriteHouses }) => {

  const UserProfile = () => {
    return (
      <div className="userProfile">
        <img src={user.image} alt={user.username} />
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
    )
  };

  const UserFavorites = () => {
    
    return (
      <div>
        <h3> My Favorites</h3>
          { 
            favoriteHouses.map( house => (
              <HouseListItem key={house.id} house={house} />
            ))
          }
      </div>
    )
  };

  return (
    <RootLayout>
      { user && <UserProfile />}
      { favoriteHouses && <UserFavorites /> }
    </RootLayout>
  )
};

const mapStateToProps = state => ({
  token: state.authReducer.token,
  user: state.authReducer.userProfile,
  favoriteHouses: state.authReducer.userFavorites,
});


export default connect(mapStateToProps, null)(MyProfile);