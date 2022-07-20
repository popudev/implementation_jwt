const initState = {
  isFetching: false,
  error: false,
  success: false,
};

const registerReducer = (state = initState, action) => {
  switch (action.type) {
    case 'registerStart':
      return {
        ...state,
        isFetching: true,
      };
    case 'registerSuccess':
      return {
        ...state,
        isFetching: false,
        success: true,
      };
    case 'registerFailed':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return state;
  }
};

export default registerReducer;
