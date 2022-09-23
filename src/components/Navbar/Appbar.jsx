import NavbarMenu from '../../components/Navbar/NavbarMenu/NavbarMenu';
import NavbarAuth from '../../components/Navbar/NavbarAuth/NavbarAuth';
import UserMenu from '../../components/Navbar/UserMenu/UserMenu';
import useAuth from 'shared/hooks/useAuth';
import { ImAddressBook } from 'react-icons/im';
import { Container, LinkStyle } from './Appbar.styled';

const Appbar = () => {
  const isLogin = useAuth();
  return (
    <header>
      <nav>
        <Container>
          <div>
            <LinkStyle to="/">
              <ImAddressBook />
              HOME
            </LinkStyle>
          </div>
          <div>{isLogin && <NavbarMenu />}</div>
          <div>{isLogin ? <UserMenu /> : <NavbarAuth />}</div>
        </Container>
      </nav>
    </header>
  );
};

export default Appbar;
