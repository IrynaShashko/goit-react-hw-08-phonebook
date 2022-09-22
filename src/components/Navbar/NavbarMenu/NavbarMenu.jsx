import { NavLink } from 'react-router-dom';

import useAuth from 'shared/hooks/useAuth';
import styles from '../NavbarMenu/navbar-menu.module.css';

import items from './items';

const getClassName = ({ isActive }) => {
  const className = isActive
    ? `${styles.link} ${styles.active}`
    : `${styles.link}`;
  return className;
};

const NavbarMenu = () => {
  const isLogin = useAuth();
  const elements = items?.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={getClassName} to={to}>
        {text}
      </NavLink>
    </li>
  ));
  if (isLogin) {
    return <ul className={styles.menu}>{elements}</ul>;
  }
};
export default NavbarMenu;
