import axios from 'axios';
import { BASE_URL } from '../../helpers/appConfig';
import { allHousesSuccess, fetchHouseError, fetchLoading, newHouseSuccess, houseDetails } from './actionCreators';

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

export {
  allHouses,
  addNewHouse,
  fetchHouseDetails,
}