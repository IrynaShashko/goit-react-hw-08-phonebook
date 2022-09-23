import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

import { signup } from '../../redux/auth/auth-operation';

import { getAuthError } from '../../redux/auth/auth-selectors';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signup(data));
  };
  Notify.init({
    width: '200px',
    position: 'center-top',
    distance: '50px',
    opacity: 1,
    borderRadius: '4px',
    timeout: 1000,
    // ...
  });

  return (
    <div className="container">
      <RegisterForm onSubmit={onRegister} />
      {status && Notify.warning(`${message}`)}
    </div>
  );
};

export default RegisterPage;
