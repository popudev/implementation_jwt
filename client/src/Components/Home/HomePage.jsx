import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getAllUsers } from '../../redux/apiRequest';
import { useEffect } from 'react';

const HomePage = () => {
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.login.currentUser);

  useEffect(() => {
    if (!user) {
      navigator('/login');
    }

    if (user?.accessToken) {
      getAllUsers(user?.accessToken, dispatch);
    }
  }, [user, dispatch, navigator]);

  const userData = useSelector((state) => state.user.allUsers);

  const handleClick = () => {
    getAllUsers(user?.accessToken, dispatch);
  };

  return (
    <main className="home-container">
      <div className="home-title">User List</div>
      <div className="home-userlist">
        {userData.map((user) => {
          return (
            <div className="user-container">
              <div className="home-user">{user.username}</div>
              <div className="delete-user"> Delete </div>
            </div>
          );
        })}
      </div>
      <button onClick={handleClick}>GET ALL USERS</button>
    </main>
  );
};

export default HomePage;
