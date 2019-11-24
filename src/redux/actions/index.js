import {AUTH_REQUEST,AUTH_SUCCESS,AUTH_FAILURE} from '../../constants/index';

const authRequest= (payload) =>({
  type:AUTH_REQUEST,
  payload
});

const authSuccess= auth =>({
  type:AUTH_SUCCESS,
  payload:auth
});

const authError= error =>({
  type:AUTH_FAILURE,
  error
}); 

export {
  authRequest,
  authSuccess,
  authError
}


