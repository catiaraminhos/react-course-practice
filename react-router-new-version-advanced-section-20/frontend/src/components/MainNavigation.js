import { NavLink } from 'react-router-dom';

import NewsletterSignup from './NewsletterSignup';
import classes from './MainNavigation.module.css';

const getActiveClassName = ({ isActive }) =>
  isActive ? classes.active : undefined;

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={getActiveClassName} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/events" className={getActiveClassName}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/newsletter" className={getActiveClassName}>
              Newsletter
            </NavLink>
          </li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
