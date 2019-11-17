import {combineReducers} from 'redux';
import RegistrationForm from '../container/template/RegistrationForm/RegistrationForm.reducer';
import LoginForm from '../container/template/LoginForm';

const reducer = combineReducers({
    RegistrationForm,
    LoginForm
});

export default reducer;