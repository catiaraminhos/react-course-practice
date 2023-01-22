import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const getActiveClassName = ({ isActive }) =>
  isActive ? classes.active : undefined;

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={getActiveClassName}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={getActiveClassName}>
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
