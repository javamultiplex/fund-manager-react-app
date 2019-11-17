import { connect } from 'react-redux';
import { registrationRequestAction } from './RegistrationForm.action';
import RegistrationForm from '../../../component/template/RegistrationForm'

const mapStateToProps = (state) => ({
    response : RegistrationForm.response
});
const mapDispatchToProps = (dispatch) => ({
    registrationRequestAction: (request) => dispatch(registrationRequestAction(request))
});

export default connect(mapStateToProps,mapDispatchToProps)(RegistrationForm);
