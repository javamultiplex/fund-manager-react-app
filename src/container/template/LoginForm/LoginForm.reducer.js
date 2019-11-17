const initialState = { isFetching: false, error: false };

function LoginForm(state = { ...initialState }, action) {
  switch (action.type) {
    case "LOGIN_REQUST_ACTION":
      return { ...state, isFetching: true };
    case "LOGIN_RESPONSE_ACTION":
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

export default LoginForm;
