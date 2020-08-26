import { 
  ALL_HOUSES_SUCCESS,
  HOUSE_ERROR, 
  FETCH_LOADING, 
  NEW_HOUSE_SUCCESS, 
  HOUSE_DETAILS_SUCCESS,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
 } from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  data: [],
  response: {},
  selectedHouse: {},
  isFavorite: false,
  favorite: {},
  addRemove: {},
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
        isFavorite: action.data.isFavorite,
        favorite: action.data.favorite,
      };

    case ADD_FAVORITE:
      return {
        ...state,
        loading: false,
        addRemove: action.data,
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        loading: false,
        addRemove: action.data,
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