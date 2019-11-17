const initialState = { isFetching: false, error: false };

function RegistrationForm(state = { ...initialState }, action) {
  switch (action.type) {
    case "REGISTRATION_REQUST_ACTION":
      return { ...state, isFetching: true };
    case "REGISTRATION_RESPONSE_ACTION":
      return { ...state, 
        isFetching: false, 
        error:false, 
        response : action.response
       };
    case "FAILURE_ACTION":
        return {
            ...state,
            isFetching:false,
            error:true,
            errorMessage: action.data
        }
    default:
      return state;
  }
}

export default RegistrationForm;
