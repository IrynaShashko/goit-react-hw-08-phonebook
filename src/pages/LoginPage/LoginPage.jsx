import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import LoginForm from '../../components/LoginForm/LoginForm';

import { login } from '../../redux/auth/auth-operation';

import { getAuthError } from '../../redux/auth/auth-selectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(login(data));
  };
  Notify.init({
    width: '200px',
    position: 'center-top',
    distance: '50px',
    opacity: 1,
    borderRadius: '4px',
    timeout: 3000,
    // ...
  });
  return (
    <main>
      <section>
        <LoginForm onSubmit={onLogin} />
        {status && Notify.warning(`${message}`)}
      </section>
    </main>
  );
};

export default LoginPage;
