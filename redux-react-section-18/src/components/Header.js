import { useDispatch, useSelector } from 'react-redux';

import { authActions } from '../store/auth';
import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const logoutClickHandler = () => {
    dispatch(authActions.logout());
  };

  const navigationContent = isLoggedIn ? (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logoutClickHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  ) : (
    ''
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {navigationContent}
    </header>
  );
};

export default Header;
