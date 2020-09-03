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
import logo from '../logo.png';
import HocError from '../components/errors/HocError';

const Signin = ({ login, error, loading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const loginData = { email, password };
    login(loginData);
  };

  return (
    <HocError showError={error}>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="auto" md="auto">
            <div style={{ marginTop: '50%' }}>
              <div className="text-center">
                <img
                  src={logo}
                  style={{ width: 70, height: 70 }}
                  alt="Houzia Logo"
                />
              </div>
              <NoAuth />
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
      { loading ? <Loading /> : null }
    </HocError>
  );
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginUser(user)),
});

const mapStateToProps = state => ({
  error: state.authReducer.error,
  loading: state.authReducer.loading,
});

Signin.defaultProps = {
  error: null,
  loading: false,
};

Signin.propTypes = {
  login: PropTypes.func.isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
