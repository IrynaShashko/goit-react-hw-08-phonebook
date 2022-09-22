import useForm from '../../shared/hooks/useForm';

import {
  Container,
  Paper,
  Box,
  Typography,
  Button,
  TextField,
} from '@mui/material';

import { initialState } from './initialState';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={5}>
        <Box
          component="form"
          sx={{ p: 5, width: 300, height: 200 }}
          action=""
          onSubmit={handleSubmit}
        >
          <Typography variant="h5" component="h2">
            Login form
          </Typography>
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
            autoComplete="current-email"
            fullWidth
            required
          />
          <TextField
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
          <Box component="div" mt={2}>
            <Button
              variant="contained"
              size="medium"
              color="primary"
              type="submit"
            >
              Log in
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginForm;
