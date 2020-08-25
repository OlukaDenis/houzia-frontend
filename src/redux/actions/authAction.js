import axios from 'axios';
import { signupSuccess, loginSuccess, fetchError, fetchLoading, setToken } from './actionCreators';
import { BASE_URL } from '../../helpers/appConfig';

const createUser = newUser => (
  dispatch => {
    dispatch(fetchLoading());
    axios.post(
      BASE_URL,
      { 'user': newUser }
    )
    .then(response => dispatch(signupSuccess(response.data)))
    .catch(err => dispatch(fetchError(err.response)));
  }
);

const loginUser = user => (
  dispatch => {
    dispatch(fetchLoading());
    axios.post(
      `${BASE_URL}/login`,
      { 'user': user }
    )
    .then(response => dispatch(loginSuccess(response.data)))
    .catch(err => dispatch(fetchError(err)));
  }
)

export {
  createUser,
  loginUser,
};
