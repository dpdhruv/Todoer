import {AUTH_FAILURE,AUTH_REQUEST,AUTH_SUCCESS} from '../../constants';

const loadingReducer = (state=false,action) =>{
  switch (action.type){
    case AUTH_REQUEST:
      return true;
    case AUTH_SUCCESS:
      return false;
    case AUTH_FAILURE:
      return false;
    default:
      return state;    
  }
};

export default loadingReducer;