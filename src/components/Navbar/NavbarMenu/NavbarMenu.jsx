import useAuth from 'shared/hooks/useAuth';
import { List, NavLinkStyle } from '../NavbarAuth/NavbarAuth.styled';

import items from './items';

const NavbarMenu = () => {
  const isLogin = useAuth();
  const elements = items?.map(({ id, to, text }) => (
    <li key={id}>
      <NavLinkStyle to={to}>{text}</NavLinkStyle>
    </li>
  ));
  if (isLogin) {
    return <List>{elements}</List>;
  }
};
export default NavbarMenu;
