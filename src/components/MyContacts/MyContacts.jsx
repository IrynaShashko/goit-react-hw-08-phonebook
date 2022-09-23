import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@mui/material';

import { Container } from '../LoginForm/LoginForm.styled';
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
    <Container>
      <div>
        <FormAddContacts onSubmit={onAddContact} />
      </div>
      <div>
        <TextField
          onChange={onSetFilter}
          value={filter}
          name="filter"
          type="text"
          placeholder="Enter name "
          label="Find"
          multiline="controlled"
          size="small"
          margin="normal"
          autoComplete="current-filter"
          fullWidth
        />
        <ContactList contacts={contacts} removeContact={onRemoveContact} />
      </div>
    </Container>
  );
};

export default MyContacts;
