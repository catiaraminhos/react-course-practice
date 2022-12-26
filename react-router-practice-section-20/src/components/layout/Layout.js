import styles from './Layout.module.css';

const Layout = (props) => {
  return <div className={styles.main}>{props.children}</div>;
};

export default Layout;
