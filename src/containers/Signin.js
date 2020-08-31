import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Form, Container, Row, Col,
} from 'react-bootstrap';
import { loginUser } from '../redux/actions/authAction';
import NoAuth from '../helpers/NoAuth';
import Loading from '../components/Loading';

const Signin = ({ login, token, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const loginData = { email, password };
    login(loginData);
    return (<Loading />);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg="auto" md="auto">
          <div style={{ marginTop: '50%' }}>
          <div className="text-center">
            <img 
            src="images/logo.png"
            style={{width: 70, height: 70}}
            alt="Houzia Logo"
            />
          </div>
            <NoAuth />
            { (!token && error) && error }

            <h1 className="auth-title text-center">Signin</h1>
            <Form className="mt-4" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  className="form-input"
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  className="form-input"
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="text-center">
                <button
                  variant="primary"
                  className="h-btn h-btn-filled btn text-center"
                  type="submit"
                  style={{ width: '70%' }}
                >
                  Signin
                </button>
              </div>

              <div className="mt-3 text-center">
                <Link className="auth-link" to="/signup">Create account</Link>
              </div>
            </Form>

          </div>
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginUser(user)),
});

const mapStateToProps = state => ({
  token: state.authReducer.token,
  error: state.authReducer.error,
});

Signin.propTypes = {
  login: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
