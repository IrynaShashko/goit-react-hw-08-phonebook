import useForm from '../../shared/hooks/useForm';

import styles from './register-form.module.css';

import { initialState } from './initialState';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          Имя пользователя:
        </label>
        <input
          value={name}
          name="name"
          onChange={handleChange}
          className={styles.input}
          type="text"
          placeholder="Введите имя пользователя"
          required
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          Email:
        </label>
        <input
          value={email}
          name="email"
          onChange={handleChange}
          className={styles.input}
          type="email"
          placeholder="Enter email"
        />
      </div>
      <div className={styles.group}>
        <label className={styles.label} htmlFor="">
          Password:
        </label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          className={styles.input}
          type="password"
          placeholder="Enter password"
        />
      </div>
      <div className={styles.group}>
        <button type="submit">Sign up</button>
      </div>
    </form>
  );
};

export default RegisterForm;
