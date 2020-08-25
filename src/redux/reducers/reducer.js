import { combineReducers } from 'redux';
import authReducer from './authReducer';
import houseReducer from './houseReducer';

const reducer = combineReducers({
  authReducer,
  houseReducer,
});

export default reducer;