import PropTypes from 'prop-types';
import { FiTrash2 } from 'react-icons/fi';
import { List, ListItem, ListItemText, Divider } from '@mui/material';

import { Button } from './ContactsList.styled';

const ContactList = ({ contacts, removeContact }) => {
  const elements = contacts?.map(({ id, name, number }) => (
    <ListItem li key={id} divider>
      <Divider light />
      <ListItemText>
        {name} {number}
      </ListItemText>
      <Button type="button" onClick={() => removeContact(id)}>
        <FiTrash2 />
      </Button>
    </ListItem>
  ));

  return <List component="ul">{elements}</List>;
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  removeContact: PropTypes.func,
};

export default ContactList;
