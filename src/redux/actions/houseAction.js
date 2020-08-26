import axios from 'axios';
import { BASE_URL } from '../../helpers/appConfig';
import { allHousesSuccess, fetchHouseError, fetchLoading, newHouseSuccess, houseDetails, addFavorite, removeFavorite } from './actionCreators';

const allHouses = token => (
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

const fetchHouseDetails = (id, token) => (
  dispatch => {
    dispatch(fetchLoading());
    axios.get(`${BASE_URL}/houses/${id}`, {
      headers: {
        Authorization: token,
      },
    })
      .then(response => dispatch(houseDetails(response.data)))
      .catch(error => dispatch(fetchHouseError(error.response)));
  }
);


const addNewHouse = (house, token) => (
  dispatch => {
    dispatch(fetchLoading());
    axios.post(`${BASE_URL}/houses`, house, {
      headers: {
        Authorization: token,
      },
    })
      .then(response => dispatch(newHouseSuccess(response.data)))
      .catch(error => dispatch(fetchHouseError(error.response)));
  }
);

const addHouseToFavorite = (token, houseId) => (
  dispatch => {
    dispatch(fetchLoading());
    axios.post(`${BASE_URL}/favorites`, houseId, {
      headers: {
        Authorization: token,
      },
    })
    .then(response => dispatch(addFavorite(response.data)))
    .catch(error => dispatch(fetchHouseError(error.response)));
  }
);

const removeHouseFromFavorite = (token, houseId, favoriteId) => (
  dispatch => {
    const data = JSON.stringify(houseId);
    const config = {
      method: 'delete',
      url: `${BASE_URL}/favorites/${favoriteId}`,
      headers: { 
        Authorization: token, 
        'Content-Type': 'application/json'
      },
      data : data
    };

    dispatch(fetchLoading());
    axios(config)
    .then(response => dispatch(removeFavorite(response.data)))
    .catch(error => dispatch(fetchHouseError(error.response)));
  }
);

export {
  allHouses,
  addNewHouse,
  fetchHouseDetails,
  addHouseToFavorite,
  removeHouseFromFavorite,
}