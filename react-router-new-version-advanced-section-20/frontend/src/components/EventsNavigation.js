import { NavLink } from 'react-router-dom';

import classes from './EventsNavigation.module.css';

const getActiveClassName = ({ isActive }) =>
  isActive ? classes.active : undefined;

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/events" className={getActiveClassName} end>
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/events/new" className={getActiveClassName}>
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
