import bg from '../../images/telefon-makro-fon.jpg';
import { Container, H1 } from '../HomePage/HomePage.styled';

const HomePage = () => {
  return (
    <main>
      <Container>
        <div>
          <H1>Welcome to online PHONEBOOK!</H1>
        </div>
        <div>
          <img src={bg} alt="phone" width="100%" />
        </div>
      </Container>
    </main>
  );
};

export default HomePage;
