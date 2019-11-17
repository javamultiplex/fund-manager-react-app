import { put, takeLatest, all } from "redux-saga/effects";
import { registrationResponseAction } from './RegistrationForm.action';
import axios from 'axios';


function* register(action) {
  yield console.log("Request Received-- ", action.request);
  try {
     const url = 'https://fund-manager-app-javamultiplex.azurewebsites.net/api/v1/register';
    const data = yield axios.post(url,action.request).then(response => response.json());
  //  const data = 'Success';
    yield put(registrationResponseAction(data));
  }
  catch (err){
     console.log(err);
  }

}

export default function* rootSaga() {
  yield all([takeLatest("REGISTRATION_REQUST_ACTION", register)]);
}
