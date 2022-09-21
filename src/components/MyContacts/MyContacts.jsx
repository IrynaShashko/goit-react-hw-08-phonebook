import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Container from './Container';
import FormAddContacts from './FormAddContacts/FormAddContacts';
import ContactList from './ContactsList/ContactsList';

import {
  fetchContacts,
  addContact,
  removeContact,
} from '../../redux/contacts/contacts-operation';
import { setFilter } from '../../redux/filter/filter-actions';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selectors';

import styles from './my-contacts.module.css';

const MyContacts = () => {
  const contacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = payload => {
    dispatch(addContact(payload));
  };

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <div className={styles.contacts}>
      <Container title="Add contacts">
        <FormAddContacts onSubmit={onAddContact} />
      </Container>
      <Container title="Contacts list">
        <input
          onChange={onSetFilter}
          value={filter}
          name="filter"
          type="text"
          placeholder="Enter name "
        />
        <ContactList contacts={contacts} removeContact={onRemoveContact} />
      </Container>
    </div>
  );
};

export default MyContacts;
