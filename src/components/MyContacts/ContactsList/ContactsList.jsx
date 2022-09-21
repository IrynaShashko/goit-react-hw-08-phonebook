import styles from './contacts-list.module.css';

const ContactList = ({ contacts, removeContact }) => {
  console.log('contacts', contacts);
  const elements = contacts?.map(({ id, name, email }) => (
    <li key={id} className={styles.item}>
      {name} {email}.
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
