import React, { useState } from 'react';
import request from 'superagent';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createUser } from '../redux/actions/authAction';
import NoAuth from '../helpers/NoAuth';
import {
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_UPLOAD_URL,
} from '../helpers/appConfig';

const Signup = ({ signup }) => {
  const [picture, setPicture] = useState(null);
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

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
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        // setImage(response.body.secure_url);
        const image = response.body.secure_url;
        console.log('Uplaoded: ', image);

        if (password !== password_confirmation) {
          console.log('Passwords do not match');
        } else {
          const newUser = {
            username, email, image, password, password_confirmation,
          };
          signup(newUser);
        }
      }
    });
  };

  return (
    <div>
      <NoAuth />
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={e => setUserName(e.target.value)}
          type="text"
          name="username"
          placeholder="Username"
          required
        />
        <br />
        <input
          onChange={e => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <br />

        <input
          onChange={e => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <br />
        <br />
        <input
          onChange={e => setPasswordConfirmation(e.target.value)}
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          required
        />
        <br />
        <input type="file" onChange={handleImageChange} />
        <br />
        <input type="submit" value="Upload" />
      </form>
      <Link to="/signin">Signin</Link>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(createUser(user)),
});

export default connect(null, mapDispatchToProps)(Signup);
