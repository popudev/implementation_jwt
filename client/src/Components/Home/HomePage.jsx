import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

import { getAllUsers, deleteUser, refeshToken } from '../../redux/apiRequest';
import { loginSuccess } from '../../redux/actions/login';

const HomePage = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();
  let axiosJWT = axios.create();

  const user = useSelector((state) => state.login.currentUser);
  const userData = useSelector((state) => state.user.allUsers);
  const messenger = useSelector((state) => state.user.messenger);

  axiosJWT.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodedToken = jwtDecode(user?.accessToken);
      if (decodedToken.exp < date.getTime() / 1000) {
        const res = await refeshToken();
        console.log(res.data);
        const refeshUser = {
          ...user,
          accessToken: res.data.accessToken,
        };
        dispatch(loginSuccess(refeshUser));
        config.headers['token'] = `Bearer ${res.data.accessToken}`;
      }

      return config;
    },
    (err) => Promise.reject(err),
  );

  useEffect(() => {
    if (!user) {
      navigator('/login');
    }

    if (user?.accessToken) {
      getAllUsers(axiosJWT, user?.accessToken, dispatch);
    }
  }, [user, dispatch, navigator]);

  // const handleClick = () => {
  //   getAllUsers(user?.accessToken, dispatch);
  // };

  const handleDeleteUser = (id) => {
    deleteUser(axiosJWT, user?.accessToken, dispatch, id);
  };

  return (
    <main className="home-container">
      <div className="home-title">User List</div>
      <div>{user?.admin ? 'Admin' : 'User'}</div>
      <div className="home-userlist">
        {userData.map((user) => {
          return (
            <div className="user-container" key={user._id}>
              <div className="home-user">{user.username}</div>
              <div
                className="delete-user"
                onClick={() => {
                  handleDeleteUser(user._id);
                }}
              >
                {' '}
                Delete{' '}
              </div>
            </div>
          );
        })}
      </div>
      <div>{messenger}</div>
      {/* <button onClick={handleClick}>GET ALL USERS</button> */}
    </main>
  );
};

export default HomePage;
