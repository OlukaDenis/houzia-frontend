import { UPLOAD_HOUSE_IMAGE, FETCH_LOADING, UPLOAD_ERROR } from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  image: '',
};

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        loading: true,
      };

    case UPLOAD_HOUSE_IMAGE:
      return {
        ...state,
        error: null,
        image: action.imageUrl,
        loading: false,
      };

    case UPLOAD_ERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    default:
      return state;
  }
};

export default imageReducer;
