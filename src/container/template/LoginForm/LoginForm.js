import { connect } from 'react-redux';
import { loginRequestAction } from './LoginForm.action';
import LoginForm from '../../../component/template/LoginForm'

const mapStateToProps = (state) => ({
    response : LoginForm.response
});
const mapDispatchToProps = (dispatch) => ({
    loginRequestAction: (request) => dispatch(loginRequestAction(request))
});

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);
