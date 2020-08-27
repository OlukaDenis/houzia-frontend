import { combineReducers } from 'redux';
import authReducer from './authReducer';
import houseReducer from './houseReducer';
import imageReducer from './imageReducer';
import userReducer from './userReducer';

const reducer = combineReducers({
  authReducer,
  houseReducer,
  imageReducer,
  userReducer,
});

export default reducer;