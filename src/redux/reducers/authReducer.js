import {
  SIGNUP_SUCCESS,
  LOGIN_SUCCESS,
  FETCH_LOADING,
  AUTH_ERROR,
  SET_TOKEN,
  CURRENT_USER_SUCCESS,
} from '../actions/types';

const initialState = {
  token: '',
  loading: false,
  error: null,
  data: {},
  userProfile: {},
  userFavorites: [],
  userExpense: 0,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        token: action.data.auth_token,
        data: action.data,
        loading: false,
        error: null,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.data.auth_token,
        data: action.data,
        loading: false,
        error: null,
      };

    case CURRENT_USER_SUCCESS:
      return {
        ...state,
        userProfile: action.data.profile,
        userExpense: action.data.expense,
        userFavorites: action.data.favorites,
        loading: false,
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
        loading: false,
      };

    case AUTH_ERROR:
      return {
        ...state,
        token: null,
        data: action.error,
        error: action.error.data.message,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
