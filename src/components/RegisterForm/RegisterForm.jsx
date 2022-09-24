import useForm from '../../shared/hooks/useForm';
import PropTypes from 'prop-types';
import { Container, Form, H2, P, Button } from '../LoginForm/LoginForm.styled';
import { TextField } from '@mui/material';

// import styles from './register-form.module.css';

import { initialState } from './initialState';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <Container>
      <Form action="" onSubmit={handleSubmit}>
        <H2>Create a PHONEBOOK account</H2>
        <P>Sign up with your name, email and password.</P>
        <TextField
          value={name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Name"
          label="Name"
          multiline="controlled"
          size="small"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Enter email"
          label="Email"
          multiline="controlled"
          size="small"
          margin="normal"
          fullWidth
          required
        />
        <TextField
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Enter password"
          label="Password"
          multiline="controlled"
          size="small"
          margin="normal"
          fullWidth
          required
        />
        <Button variant="contained" size="medium" color="primary" type="submit">
          Sign up
        </Button>
      </Form>
    </Container>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default RegisterForm;
