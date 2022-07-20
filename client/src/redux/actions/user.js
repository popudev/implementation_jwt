export const getUsersStart = () => {
  return {
    type: 'getUsersStart',
  };
};

export const getUsersSuccess = (payload) => {
  return {
    type: 'getUsersSuccess',
    payload,
  };
};

export const getUsersFailed = () => {
  return {
    type: 'getUsersFailed',
  };
};
