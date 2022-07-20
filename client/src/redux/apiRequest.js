import axios from 'axios';
import { loginStart, loginSuccess, loginFailed } from './actions/login';
import { registerStart, registerSuccess, registerFailed } from './actions/register';
import {
  getUsersStart,
  getUsersSuccess,
  getUsersFailed,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailed,
} from './actions/user';

export const loginUser = async (user, dispatch, navigator) => {
  dispatch(loginStart());
  try {
    const res = await axios.post('/auth/login', user);
    dispatch(loginSuccess(res.data));
    navigator('/');
  } catch (err) {
    dispatch(loginFailed());
  }
};

export const registerUser = async (user, dispatch, navigator) => {
  dispatch(registerStart());
  try {
    await axios.post('/auth/register', user);
    dispatch(registerSuccess());
    navigator('/login');
  } catch (err) {
    dispatch(registerFailed());
  }
};

export const getAllUsers = async (axiosJWT, token, dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axiosJWT.get('/user', {
      headers: {
        token: 'Bearer ' + token,
      },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (err) {
    dispatch(getUsersFailed());
  }
};

export const deleteUser = async (axiosJWT, token, dispatch, id) => {
  dispatch(deleteUserStart());
  try {
    const res = await axiosJWT.delete(`/user/${id}`, {
      headers: {
        token: 'Bearer ' + token,
      },
    });
    dispatch(deleteUserSuccess(res.data));
  } catch (err) {
    dispatch(deleteUserFailed('Delete failed'));
  }
};

export const refeshToken = async () => {
  try {
    return await axios.get('/auth/refreshToken', {
      withCredentials: true,
    });
  } catch (err) {
    return false;
  }
};
