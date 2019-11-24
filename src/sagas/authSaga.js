import {AUTH_REQUEST} from '../constants';
import {authError,authSuccess} from '../redux/actions';
import {takeEvery,call,put} from 'redux-saga/effects';
import {authentication} from '../services/authService';

//Worker Saga
function* workerAuth(action){
  //console.log(action)
  try{
    const auth = yield call(authentication,action.payload)
    //console.log("auth",auth)
    yield put(authSuccess(auth));
  }
  catch(error){
    //dispatch error
    //console.log(error);
    yield put(authError(error.toString()));
  }
}

//Watcher
export default function* watchAuthRequest(){
  yield takeEvery(AUTH_REQUEST,workerAuth);
}