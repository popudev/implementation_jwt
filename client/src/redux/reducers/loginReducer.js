const initState = {
  currentUser: null,
  isFetching: false,
  error: false,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case 'loginStart':
      return {
        ...state,
        isFetching: true,
      };

    case 'loginSuccess':
      return {
        ...state,
        isFetching: false,
        currentUser: action.payload,
      };
    case 'loginFailed':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case 'logoutStart':
      return {
        ...state,
        isFetching: true,
        error: false,
      };

    case 'logoutSuccess':
      return {
        ...state,
        isFetching: false,
        currentUser: null,
      };
    case 'logoutFailed':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
