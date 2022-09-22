import useForm from '../../shared/hooks/useForm';

import {
  Container,
  Paper,
  Box,
  Typography,
  Button,
  TextField,
} from '@mui/material';

// import styles from './register-form.module.css';

import { initialState } from './initialState';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={5}>
        <Box
          component="form"
          sx={{ p: 5, width: 300, height: 300 }}
          action=""
          onSubmit={handleSubmit}
        >
          <Typography variant="h5" component="h2">
            Register form
          </Typography>
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
          <Box component="div" mt={2}>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              type="submit"
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegisterForm;
