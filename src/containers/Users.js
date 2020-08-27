import React, { useEffect } from 'react';
import RootLayout from '../components/RootLayout';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../redux/actions/userAction';
import Loading from '../components/Loading';

const Users = ({ data, allUsers, token, loading }) => {

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
              { !user.admin && <button>Make Admin</button> }
            </div>
          ))
        }
      </div>
    </RootLayout>
  )
};

const mapDispatchToProps = dispatch => ({
  allUsers: token => dispatch(fetchAllUsers(token)),
});

const mapStateToProps = state => {
    console.log(state);
    return ({
    data: state.userReducer.data,
    token: state.authReducer.token,
    loading: state.userReducer.loading,
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
