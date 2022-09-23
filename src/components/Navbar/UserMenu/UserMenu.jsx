import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operation';
import { getUser } from 'redux/auth/auth-selectors';
import { Container, User, Button } from './UserMenu.styled';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());
  return (
    <Container>
      <User>Hi, {name}!</User>{' '}
      <Button onClick={onLogout} type="button">
        Logout
      </Button>
    </Container>
  );
};

export default UserMenu;
