import { SIGNUP_SUCCESS, LOGIN_SUCCESS, FETCH_LOADING, AUTH_ERROR,  SET_TOKEN } from '../actions/types';

const initialState = {
  token: '',
  loading: false,
  error: null,
  data: {},
	user: {},
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
        user: action.data.user
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case AUTH_ERROR: 
      return {
        ...state,
        token: null,
        data: action.error,
        error: action.error.data.message,
      };

    default: 
      return state;
	}
};

export default authReducer;