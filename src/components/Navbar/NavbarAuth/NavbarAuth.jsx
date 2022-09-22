import { NavLink } from 'react-router-dom';
import styles from '../NavbarAuth/navbar-auth.module.css';

const NavbarAuth = () => {
  return (
    <div className={styles.wrapper}>
      <NavLink to="/login" className={styles.link}>
        Login
      </NavLink>{' '}
      |
      <NavLink to="/register" className={styles.link}>
        Signup
      </NavLink>
    </div>
  );
};
export default NavbarAuth;
