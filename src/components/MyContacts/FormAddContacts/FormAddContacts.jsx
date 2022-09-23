import useForm from '../../../shared/hooks/useForm';
import { Form, H2, Button } from '../../LoginForm/LoginForm.styled';
import { TextField } from '@mui/material';

import { initialState } from './initialState';

const FormAddContact = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, number } = state;

  return (
    <div>
      <Form action="" onSubmit={handleSubmit}>
        <H2>Add contact</H2>
        <TextField
          value={name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Type name..."
          label="Name"
          multiline="controlled"
          size="small"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          value={number}
          name="number"
          onChange={handleChange}
          type="number"
          placeholder="Type number..."
          label="Number"
          multiline="controlled"
          size="small"
          margin="normal"
          fullWidth
          required
        />
        <div>
          <Button type="submit">Add</Button>
        </div>
      </Form>
    </div>
  );
};

export default FormAddContact;
