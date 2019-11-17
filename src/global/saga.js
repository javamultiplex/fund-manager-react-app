import { all, fork } from "redux-saga/effects";
import RegistrationFormSaga from '../container/template/RegistrationForm/RegistrationForm.saga'
// import LoginFormSaga from '../container/template/LoginForm';

export default function* rootSaga () {
    yield all ([
        fork(RegistrationFormSaga),
        // fork(LoginFormSaga),
    ]);
}
