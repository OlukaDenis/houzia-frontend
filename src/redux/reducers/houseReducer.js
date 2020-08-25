import { ALL_HOUSES_SUCCESS, HOUSE_ERROR, FETCH_LOADING } from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  data: [],
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

      case FETCH_LOADING:
        return {
          ...state,
          loading: true,
        };
      
      case HOUSE_ERROR:
        return {
          ...state,
          error: action.error,
        };

    default:
      return state;
  }
};

export default houseReducer;