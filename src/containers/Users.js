import React, { useEffect, useState } from 'react';
import RootLayout from '../components/RootLayout';
import { connect } from 'react-redux';
import { fetchAllUsers, updateUserDetails } from '../redux/actions/userAction';
import Loading from '../components/Loading';
import AdminButton from '../components/AdminButton';

const Users = ({ data, allUsers, token, loading, user, updateUserDetails }) => {

  useEffect(() => {
    if (token) {
      allUsers(token);
    }
  }, [token, allUsers]);

  return (
    <RootLayout>
      <div>
        {
          loading 
          ? <Loading />
          : data.map( user => (
            <div key={user.id}>
              <p>{user.username}</p>
              <AdminButton 
                isAdmin={user.admin}
                user={user}
                token={token}
                updateUser={updateUserDetails}
              />
            </div>
          ))
        }
      </div>
    </RootLayout>
  )
};

const mapDispatchToProps = dispatch => ({
  allUsers: token => dispatch(fetchAllUsers(token)),
  updateUserDetails: (token, user, userId) => dispatch(updateUserDetails(token, user, userId)),
});

const mapStateToProps = state => {
    console.log(state);
    return ({
    data: state.userReducer.data,
    user: state.authReducer.userProfile,
    token: state.authReducer.token,
    loading: state.userReducer.loading,
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
