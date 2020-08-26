import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RootLayout from '../components/RootLayout';

const MyProfile = ({ user }) => {

  const UserProfile = () => {
    return (
      <div className="userProfile">
        <img src={user.image} alt={user.username} />
        <h3>{user.username}</h3>
        <p>{user.email}</p>
      </div>
    )
  };

  return (
    <RootLayout>
      { user && <UserProfile />}
    </RootLayout>
  )
};

const mapStateToProps = state => ({
  token: state.authReducer.token,
  user: state.authReducer.user
});


export default connect(mapStateToProps, null)(MyProfile);