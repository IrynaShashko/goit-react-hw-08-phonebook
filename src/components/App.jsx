import styles from './app.module.css';
import Navbar from './Navbar/Navbar';
import PhoneBookRoutes from '../PhoneBookRoutes';

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <PhoneBookRoutes />
    </div>
  );
};
