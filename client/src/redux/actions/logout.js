export const logoutStart = () => {
  return {
    type: 'logoutStart',
  };
};

export const logoutSuccess = (payload) => {
  return {
    type: 'logoutSuccess',
    payload,
  };
};

export const logoutFailed = () => {
  return {
    type: 'logoutFailed',
  };
};
