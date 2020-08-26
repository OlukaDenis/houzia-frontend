import { combineReducers } from 'redux';
import authReducer from './authReducer';
import houseReducer from './houseReducer';
import imageReducer from './imageReducer';

const reducer = combineReducers({
  authReducer,
  houseReducer,
  imageReducer,
});

export default reducer;