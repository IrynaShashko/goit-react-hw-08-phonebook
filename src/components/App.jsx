import Navbar from '../components/Navbar/Navbar';
import UserRoutes from '../UserRoutes';

import '../shared/styles/styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <UserRoutes />
    </div>
  );
}

export default App;
