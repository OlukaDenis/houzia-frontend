import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import RootLayout from '../components/RootLayout';
import { fetchAllUsers, updateUserDetails } from '../redux/actions/userAction';
import Loading from '../components/Loading';
import AdminButton from '../components/AdminButton';
import { userShape } from '../helpers/propTypeShapes';

const userStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '10px 0',
};

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
      <Container style={{ paddingTop: 70, marginBottom: 100 }}>
        <Row className="justify-content-md-center">
          <Col md={8} sm={10} lg={8}>
            <h3 className="text-center" style={{ margin: '20px 0' }}> Registered Users </h3>
            <div className="card">
              {
              loading
                ? <Loading />
                : data.map(user => (
                  <div className="card-body" style={userStyle} key={user.id}>
                    <h5 style={{ fontWeight: '900' }}>{user.username}</h5>
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
          </Col>
        </Row>
      </Container>

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
