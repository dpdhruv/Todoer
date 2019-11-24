import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  auth:authReducer,
  error:errorReducer
})

export default rootReducer;