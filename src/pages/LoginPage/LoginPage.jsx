import { useSelector, useDispatch } from 'react-redux';

import LoginForm from '../../components/LoginForm/LoginForm';

import { login } from '../../redux/auth/auth-operation';

import { getAuthError } from '../../redux/auth/auth-selectors';

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <div className="container">
      <LoginForm onSubmit={onLogin} />
      {status && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
};

export default LoginPage;
