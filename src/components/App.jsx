import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Appbar from '../components/Navbar/Appbar';
import UserRoutes from '../UserRoutes';

import { current } from 'redux/auth/auth-operation';
import '../shared/styles/styles.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  return (
    <div className="App">
      <Appbar />
      <UserRoutes />
    </div>
  );
}

export default App;
