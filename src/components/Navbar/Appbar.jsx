import { Link } from 'react-router-dom';

import NavbarMenu from '../../components/Navbar/NavbarMenu/NavbarMenu';
import NavbarAuth from '../../components/Navbar/NavbarAuth/NavbarAuth';
import UserMenu from './UserMenu';
import useAuth from 'shared/hooks/useAuth';
import { FaBookOpen } from 'react-icons/fa';
// import styles from '../Navbar/navbar.module.css';

const Appbar = () => {
  const isLogin = useAuth();
  return (
    <div>
      <header>
        <nav>
          <div>
            <Link to="/">
              <FaBookOpen />
              PHONEBOOK
            </Link>
            {isLogin && <NavbarMenu />}
            {isLogin ? <UserMenu /> : <NavbarAuth />}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Appbar;
