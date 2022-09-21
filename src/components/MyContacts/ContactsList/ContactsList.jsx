import styles from './contacts-list.module.css';

const ContactList = ({ contacts, removeContact }) => {
  const elements = contacts.map(({ id, name, email }) => (
    <li key={id} className={styles.item}>
      {name}. Автор: {email}.
      <button
        type="button"
        className={styles.btn}
        onClick={() => removeContact(id)}
      >
        Удалить
      </button>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default ContactList;
