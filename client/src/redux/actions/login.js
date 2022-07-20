export const loginStart = () => {
  return {
    type: 'loginStart',
  };
};

export const loginSuccess = (payload) => {
  return {
    type: 'loginSuccess',
    payload,
  };
};

export const loginFailed = () => {
  return {
    type: 'loginFailed',
  };
};
