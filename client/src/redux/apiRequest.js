import axios from 'axios';
import { loginStart, loginSuccess, loginFailed } from './actions/login';
import { registerStart, registerSuccess, registerFailed } from './actions/register';
import { getUsersStart, getUsersSuccess, getUsersFailed } from './actions/user';

export const loginUser = async (user, dispatch, navigator) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('http://localhost:8000/auth/login', user);
    dispatch(loginSuccess(res.data));
    navigator('/');
  } catch (err) {
    dispatch(loginFailed());
  }
};

export const registerUser = async (user, dispatch, navigator) => {
  dispatch(registerStart());
  try {
    await axios.post('http://localhost:8000/auth/register', user);
    dispatch(registerSuccess());
    navigator('/login');
  } catch (err) {
    dispatch(registerFailed());
  }
};

export const getAllUsers = async (token, dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get('http://localhost:8000/user', {
      headers: {
        token: 'Bearer ' + token,
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailed());
  }
};
