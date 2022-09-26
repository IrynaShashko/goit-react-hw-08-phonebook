import bg from '../../images/vacation.jpg';
import { Container, ImgContainer, H1 } from '../HomePage/HomePage.styled';

const HomePage = () => {
  return (
    <main>
      <Container>
        <div>
          <H1>Welcome to online PHONEBOOK!</H1>
        </div>
        <ImgContainer>
          <img src={bg} alt="phone" width="100%" />
        </ImgContainer>
      </Container>
    </main>
  );
};

export default HomePage;
