import useForm from '../../shared/hooks/useForm';

// import styles from '../LoginForm/';

import { initialState } from './initialState';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Email:</label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Enter email"
        />
      </div>
      <div>
        <label htmlFor="">Password:</label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Enter your password"
        />
      </div>
      <div>
        <button type="submit">Log in</button>
      </div>
    </form>
  );
};

export default LoginForm;
