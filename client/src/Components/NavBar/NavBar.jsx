import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/apiRequest';
import './navbar.css';
const NavBar = () => {
  const user = useSelector((state) => state.login.currentUser);
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const handleLogout = () => {
    logoutUser(dispatch, navigator);
  };

  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-home">
        {' '}
        Home{' '}
      </Link>
      {user ? (
        <>
          <p className="navbar-user">
            Hi, <span> {user.username} </span>{' '}
          </p>
          <Link to="/logout" onClick={handleLogout} className="navbar-logout">
            {' '}
            Log out
          </Link>
        </>
      ) : (
        <>
          <Link to="/login" className="navbar-login">
            {' '}
            Login{' '}
          </Link>
          <Link to="/register" className="navbar-register">
            {' '}
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default NavBar;
