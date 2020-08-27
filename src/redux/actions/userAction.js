import axios from 'axios';
import { allUsersSuccess, fetchError, fetchLoading } from './actionCreators';
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

export {
  fetchAllUsers,
};