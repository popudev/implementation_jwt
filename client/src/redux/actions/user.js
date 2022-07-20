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

export const deleteUserStart = () => {
  return {
    type: 'deleteUserStart',
  };
};

export const deleteUserSuccess = (payload) => {
  return {
    type: 'deleteUserSuccess',
    payload,
  };
};

export const deleteUserFailed = (payload) => {
  return {
    type: 'deleteUserFailed',
    payload,
  };
};
