import useForm from '../../../shared/hooks/useForm';

import styles from './form-add-book.module.css';

import { initialState } from './initialState';

const FormAddContact = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, number } = state;
  console.log('name', name);
  console.log('email', number);

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className={styles.group}>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="">
            Name:
          </label>
          <input
            value={name}
            name="name"
            onChange={handleChange}
            className={styles.input}
            type="text"
            placeholder="Type name..."
          />
        </div>
        <label className={styles.label} htmlFor="">
          Number:
        </label>
        <input
          value={number}
          name="number"
          onChange={handleChange}
          className={styles.input}
          type="number"
          placeholder="Type number..."
        />
      </div>
      <div className={styles.group}>
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default FormAddContact;
