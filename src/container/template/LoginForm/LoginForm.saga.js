import { put, takeLatest, all } from "redux-saga/effects";
import { loginResponseAction } from './LoginForm.action';

function* login(action) {
  yield console.log("Request Received-- ", action.request);
  try {
   //   const url = 'localhost';
   //  const data = yield fetch(url).then(response => response.json());
   const data = 'Success';
    yield put(loginResponseAction(data));
  }
  catch (err){
     console.log(err);
  }

}

export default function* rootSaga() {
  yield all([takeLatest("LOGIN_REQUST_ACTION", login)]);
}
