import Container from "react-bootstrap/Container";
import WelcomeMessageGuest from "../components/home/WelcomeMessageGuest";

const HomePage = () => {
  return (
    <Container className="my-5">
      <WelcomeMessageGuest />
    </Container>
  );
};

export default HomePage;
