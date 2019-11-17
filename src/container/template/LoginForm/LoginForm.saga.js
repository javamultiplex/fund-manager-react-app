import { put, takeLatest, all } from "redux-saga/effects";
import { loginResponseAction } from './LoginForm.action';
import axios from 'axios';


function* login(action) {
  yield console.log("Request Received-- ", action.request);
  try {
    const url = 'https://fund-manager-app-javamultiplex.azurewebsites.net/api/v1/login';
    const data = yield axios.post(url,action.request).then(response => response.json());
    yield put(loginResponseAction(data));
  }
  catch (err){
     console.log(err);
  }

}

export default function* rootSaga() {
  yield all([takeLatest("LOGIN_REQUST_ACTION", login)]);
}
