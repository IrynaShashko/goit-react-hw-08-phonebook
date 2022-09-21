import { Link } from 'react-router-dom';

import NavbarMenu from '../../components/Navbar/NavbarMenu/NavbarMenu';
import NavbarAuth from '../../components/Navbar/NavbarAuth/NavbarAuth';

import styles from '../Navbar/navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <Link className={styles.logo} to="/">
        Logo
      </Link>
      <NavbarMenu />
      <NavbarAuth />
    </div>
  );
};

export default Navbar;
