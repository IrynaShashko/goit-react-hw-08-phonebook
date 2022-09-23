import bg from '../../images/telefon-makro-fon-3.jpg';
import { H1 } from '../HomePage/HomePage.styled';

const HomePage = () => {
  return (
    <main>
      <H1>Welcome to online PHONEBOOK!</H1>
      <img src={bg} alt="phone" width="100%" />
    </main>
  );
};

export default HomePage;
