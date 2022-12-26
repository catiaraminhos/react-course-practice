import { NavLink } from 'react-router-dom';

import styles from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Great Quotes</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink activeClassName={styles.active} to="/quotes">
              All Quotes
            </NavLink>
          </li>
          <NavLink activeClassName={styles.active} to="/add-quote">
            <li>Add a Quote</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
