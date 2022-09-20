import { Container, Ul, Li, NavLinkStyle } from './Navbar.styled';

const Navbar = () => {
  return (
    <Container>
      <Ul>
        <Li>
          <NavLinkStyle to="/">Home</NavLinkStyle>
        </Li>
        <Li>
          <NavLinkStyle to="/contacts">Contacts</NavLinkStyle>
        </Li>
        <Li>
          <NavLinkStyle to="/register">Register</NavLinkStyle> |
          <NavLinkStyle to="/login">Login</NavLinkStyle>
        </Li>
      </Ul>
    </Container>
  );
};

export default Navbar;
