import {AUTH_SUCCESS} from '../../constants';

const init_state = {
  token:''
}

const authReducer = (state=init_state,action) =>{
  if(action.type === AUTH_SUCCESS){
    return {...state,token:action.payload.token};
  }
  return state;
}

export default authReducer;