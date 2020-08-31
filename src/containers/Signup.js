import React, { useState } from 'react';
import request from 'superagent';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Form, Container, Row, Col,
} from 'react-bootstrap';
import { createUser } from '../redux/actions/authAction';
import NoAuth from '../helpers/NoAuth';
import {
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL,
} from '../helpers/appConfig';
import HocError from '../components/errors/HocError';

const Signup = ({ signup, error }) => {
  const [picture, setPicture] = useState(null);
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleImageChange = e => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const upload = request.post(CLOUDINARY_UPLOAD_URL)
      .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
      .field('file', picture);

    upload.end((err, response) => {
      if (err) {
        return <p>Error while uploading image</p>;
      }

      if (response.body.secure_url !== '') {
        const image = response.body.secure_url;

        if (password !== passwordConfirmation) {
          return <p>Password do not match</p>;
        }
        const newUser = {
          username, email, image, password, password_confirmation: passwordConfirmation,
        };
        signup(newUser);
      }
      return null;
    });
  };

  return (
    <HocError showError={error}>
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="auto" md="auto">
            <div style={{ marginTop: '30%' }}>
              <div className="text-center">
                <img
                  src="images/logo.png"
                  style={{ width: 70, height: 70 }}
                  alt="Houzia Logo"
                />
              </div>
              <NoAuth />
              <h1 className="auth-title text-center">Signup</h1>
              <Form className="mt-4" onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    className="form-input"
                    onChange={e => setUserName(e.target.value)}
                    required
                  />
                </Form.Group>

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

                <Form.Group>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    className="form-input"
                    onChange={e => setPasswordConfirmation(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    className="image-chooser"
                    type="file"
                    onChange={handleImageChange}
                  />
                </Form.Group>

                <div className="text-center">
                  <button
                    variant="primary"
                    className="h-btn h-btn-filled btn text-center"
                    type="submit"
                    style={{ width: '70%' }}
                  >
                    Signup
                  </button>
                </div>

              </Form>

              <div className="mt-3 text-center">
                <Link className="auth-link" to="/signin">Already registered?</Link>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </HocError>
  );
};

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(createUser(user)),
});

const mapStateToProps = state => ({
  error: state.authReducer.error,
});

Signup.propTypes = {
  signup: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Signup.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
