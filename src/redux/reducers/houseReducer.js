import { ALL_HOUSES_SUCCESS, HOUSE_ERROR, FETCH_LOADING, NEW_HOUSE_SUCCESS, HOUSE_DETAILS_SUCCESS } from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  data: [],
  response: {},
  selectedHouse: {},
  isMyFavorite: false,
};

const houseReducer = (state = initialState, action) => {
  switch(action.type) {
    case ALL_HOUSES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data,
      };

    case NEW_HOUSE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        response: action.data, 
      };

    case HOUSE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        selectedHouse: action.data.house,
        isMyFavorite: action.data.favorites,
      };

    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    
    case HOUSE_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default houseReducer;