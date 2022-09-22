import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'redux/auth/auth-operation';
import { getUser } from 'redux/auth/auth-selectors';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());
  return (
    <div>
      <p>Welcome, {name}</p> |
      <button onClick={onLogout} type="button">
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
