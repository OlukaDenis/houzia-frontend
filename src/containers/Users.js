import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RootLayout from '../components/RootLayout';
import { fetchAllUsers, updateUserDetails } from '../redux/actions/userAction';
import Loading from '../components/Loading';
import AdminButton from '../components/AdminButton';
import { userShape } from '../helpers/propTypeShapes';

const Users = ({
  data, allUsers, token, loading, updateUserDetails,
}) => {
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
            : data.map(user => (
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
  );
};

const mapDispatchToProps = dispatch => ({
  allUsers: token => dispatch(fetchAllUsers(token)),
  updateUserDetails: (token, user, userId) => dispatch(updateUserDetails(token, user, userId)),
});

const mapStateToProps = state => ({
  data: state.userReducer.data,
  token: state.authReducer.token,
  loading: state.userReducer.loading,
});

Users.propTypes = {
  data: PropTypes.arrayOf(userShape).isRequired,
  loading: PropTypes.bool.isRequired,
  token: PropTypes.string.isRequired,
  updateUserDetails: PropTypes.func.isRequired,
  allUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
