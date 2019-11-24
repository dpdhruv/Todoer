import { AUTH_FAILURE, AUTH_SUCCESS, AUTH_REQUEST } from "../../constants";

const errorReducers = (state = null, action) => {
  switch (action.type) {
    case AUTH_FAILURE:
      return action.error;
    case AUTH_REQUEST:
    case AUTH_SUCCESS:
      return null;
    default:
      return state;
  }
};

export default errorReducers;
