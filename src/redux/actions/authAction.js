import axios from 'axios';
import { signupSuccess, loginSuccess, fetchError, fetchLoading, currentUserSuccess } from './actionCreators';
import { BASE_URL } from '../../helpers/appConfig';

const createUser = newUser => (
  dispatch => {
    dispatch(fetchLoading());
    axios.post(
      `${BASE_URL}/signup`,
      newUser
    )
    .then(response => dispatch(signupSuccess(response.data)))
    .catch(err => dispatch(fetchError(err.response)));
  }
);

const loginUser = user => (
  dispatch => {
    dispatch(fetchLoading());
    axios.post(
      `${BASE_URL}/auth/login`,
      user 
    )
    .then(response => dispatch(loginSuccess(response.data)))
    .catch(err => dispatch(fetchError(err.response)));
  }
);

const fetchCurrentUser = (user_id, token) => (
  dispatch => {
    dispatch(fetchLoading());
    axios.get(
      `${BASE_URL}/users/${user_id}`, {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(response => dispatch(currentUserSuccess(response.data)))
    .catch(error => dispatch(fetchError(error.response)));
  }
);

export {
  createUser,
  loginUser,
  fetchCurrentUser,
};
