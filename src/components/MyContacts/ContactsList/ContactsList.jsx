import styles from './contacts-list.module.css';

const ContactList = ({ contacts, removeContact }) => {
  const elements = contacts?.map(({ id, name, number }) => (
    <li key={id} className={styles.item}>
      {name} {number}
      <button
        type="button"
        className={styles.btn}
        onClick={() => removeContact(id)}
      >
        Delete
      </button>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default ContactList;
