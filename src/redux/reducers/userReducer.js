import { 
  ALL_USERS_SUCCESS,
  AUTH_ERROR, 
  FETCH_LOADING, 
  UPDATE_USER_SUCCESS,
 } from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  data: [],
  response: {},
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case ALL_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        response: action.data,
      };

    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    
    case AUTH_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;