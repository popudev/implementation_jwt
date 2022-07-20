const initState = {
  allUsers: [],
  isFetching: false,
  error: false,
  messenger: '',
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case 'getUsersStart':
      return {
        ...state,
        isFetching: true,
      };
    case 'getUsersSuccess':
      return {
        ...state,
        isFetching: false,
        allUsers: action.payload,
      };
    case 'getUsersFailed':
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case 'deleteUserStart':
      return {
        ...state,
        isFetching: true,
      };
    case 'deleteUserSuccess':
      return {
        ...state,
        isFetching: false,
        messenger: action.payload,
      };
    case 'deleteUserFailed':
      return {
        ...state,
        isFetching: false,
        error: true,
        messenger: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
