import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../redux/actions/authAction';
import NoAuth from '../helpers/NoAuth';

const Signin = ({ login, token, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const loginData = { email, password };
    login(loginData);
  };

  return (
    <div>
      <NoAuth />
      { (!token && error) && error }

      <h1>Signin</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="email"
          name="email"
          placeholder="Email"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />

        <br />
        <br />
        <input
          id="password"
          name="password"
          placeholder="Password"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <br />

        <input type="submit" value="Signin" />
      </form>
      <Link to="/signup">Signup</Link>

    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginUser(user)),
});

const mapStateToProps = state => {
  console.log(state);
  return ({
    token: state.authReducer.token,
    error: state.authReducer.error,
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
