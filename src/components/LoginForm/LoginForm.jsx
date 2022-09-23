import useForm from '../../shared/hooks/useForm';
import { Container, Form, H2, P, Button } from './LoginForm.styled';
import { initialState } from './initialState';
import { TextField } from '@mui/material';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <Container>
      <Form action="" onSubmit={handleSubmit}>
        <H2>Log in to PHONEBOOK</H2>
        <P>Enter your email address and password.</P>
        <TextField
          value={email}
          id="email"
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Enter email"
          label="Email"
          multiline="controlled"
          size="small"
          margin="normal"
          autoComplete="current-email"
          fullWidth
          required
        />
        <TextField
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Enter your password"
          label="Password"
          multiline="controlled"
          size="small"
          margin="normal"
          autoComplete="current-password"
          fullWidth
          required
        />
        <Button variant="contained" size="medium" color="primary" type="submit">
          Log in
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
