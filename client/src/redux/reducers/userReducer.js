const initState = {
  allUsers: [],
  isFetching: false,
  error: false,
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
    default:
      return state;
  }
};

export default userReducer;
