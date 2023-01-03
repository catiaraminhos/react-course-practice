import { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './MainNavigation.module.css';

const MainNavigation = () => {
  const getNavLinkClassName = useCallback(
    (navData) => (navData.isActive ? styles.active : ''),
    []
  );

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Great Quotes</div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink className={getNavLinkClassName} to="/quotes">
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink className={getNavLinkClassName} to="/add-quote">
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
