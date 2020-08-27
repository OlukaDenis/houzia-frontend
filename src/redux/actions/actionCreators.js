import { 
  SIGNUP_SUCCESS,
  FETCH_LOADING,
  AUTH_ERROR,
  SET_TOKEN,
  LOGIN_SUCCESS,
  NEW_HOUSE_SUCCESS,
  ALL_HOUSES_SUCCESS,
  HOUSE_ERROR,
  CURRENT_USER_SUCCESS,
  UPLOAD_HOUSE_IMAGE,
  UPLOAD_ERROR,
  HOUSE_DETAILS_SUCCESS,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  ALL_USERS_SUCCESS,
 } from './types';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const setToken = token => {
  cookies.set('token', token);
  return ({
    type: SET_TOKEN,
    token,
  })
};

const signupSuccess = data => {
  cookies.set('token', data.auth_token);
  return ({
    type: SIGNUP_SUCCESS,
    data,
  })
};

const loginSuccess = data => {
  cookies.set('token', data.auth_token);
  return ({
    type: LOGIN_SUCCESS,
    data,
  })
}

const newHouseSuccess = data => ({
  type: NEW_HOUSE_SUCCESS,
  data,
});

const allUsersSuccess = data => ({
  type: ALL_USERS_SUCCESS,
  data,
});

const allHousesSuccess = data => ({
  type: ALL_HOUSES_SUCCESS,
  data,
});

const currentUserSuccess = data => ({
  type: CURRENT_USER_SUCCESS,
  data,
});

const houseDetails = data => ({
  type: HOUSE_DETAILS_SUCCESS,
  data,
});

const addFavorite = data => ({
  type: ADD_FAVORITE,
  data,
});

const removeFavorite = data => ({
  type: REMOVE_FAVORITE,
  data,
})

const newImageUpload = imageUrl => ({
  type: UPLOAD_HOUSE_IMAGE,
  imageUrl,
});

const fetchLoading = () => ({
  type: FETCH_LOADING,
});

const fetchError = error => ({
  type: AUTH_ERROR,
  error,
});

const fetchHouseError = error => ({
  type: HOUSE_ERROR,
  error,
});

const uploadError = error => ({
  type: UPLOAD_ERROR,
  error,
});


export {
    setToken,
    signupSuccess,
    loginSuccess,
    fetchError,
    fetchLoading,
    newHouseSuccess,
    allHousesSuccess,
    fetchHouseError,
    currentUserSuccess,
    newImageUpload,
    uploadError,
    houseDetails,
    addFavorite,
    removeFavorite,
    allUsersSuccess,
};

