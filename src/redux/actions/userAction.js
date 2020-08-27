import axios from 'axios';
import { allUsersSuccess, fetchError, fetchLoading, updateUserSuccess } from './actionCreators';
import { BASE_URL } from '../../helpers/appConfig';

const fetchAllUsers = token => (
  dispatch => {
    dispatch(fetchLoading());
    axios.get(
      `${BASE_URL}/users`, {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(response => dispatch(allUsersSuccess(response.data)))
    .catch(error => dispatch(fetchError(error.response)));
  }
);

const updateUserDetails = (token, user, userId) => (
  dispatch => {
    dispatch(fetchLoading());
    axios.put(
      `${BASE_URL}/users/${userId}`, user, {
        headers: {
          Authorization: token,
        },
      }
    )
    .then(response => dispatch(updateUserSuccess(response.data)))
    .catch(error => dispatch(fetchError(error.response)));
  }
);

export {
  fetchAllUsers,
  updateUserDetails,
};