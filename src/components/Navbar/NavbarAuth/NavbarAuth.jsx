import { List, NavLinkStyle } from '../NavbarAuth/NavbarAuth.styled';

const NavbarAuth = () => {
  return (
    <List>
      <li>
        <NavLinkStyle to="/login">Login</NavLinkStyle>{' '}
      </li>
      <li>
        <NavLinkStyle to="/register">Signup</NavLinkStyle>
      </li>
    </List>
  );
};
export default NavbarAuth;
