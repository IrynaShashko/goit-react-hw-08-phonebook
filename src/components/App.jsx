import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Appbar from '../components/Navbar/Appbar';
import UserRoutes from '../UserRoutes';

import { current } from 'redux/auth/auth-operation';
// import styles from '../shared/styles/styles.css';
import { AppContainer } from './App.styled';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);

  return (
    <AppContainer>
      <Appbar />
      <UserRoutes />
    </AppContainer>
  );
}

export default App;
