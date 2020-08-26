import axios from 'axios';
import { BASE_URL } from '../../helpers/appConfig';
import { myFavorites, favoriteError, fetchLoading } from './actionCreators';

const fecthMyFavorites = token => (
  dispatch => {
    dispatch(fetchLoading());
    axios.get(`${BASE_URL}/houses`, {
      headers: {
        Authorization: token,
      },
    })
      .then(response => dispatch(allHousesSuccess(response.data)))
      .catch(error => dispatch(fetchHouseError(error.response)));
  }
);
