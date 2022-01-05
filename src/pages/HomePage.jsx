import Container from "react-bootstrap/Container";
import WelcomeMessageGuest from "../components/home/WelcomeMessageGuest";
import WelcomeMessageUser from "../components/home/WelcomeMessageUser";
import useAuthContext from "../hooks/useAuthContext";

const HomePage = () => {
  const { currentUser } = useAuthContext();

  return (
    <Container className="my-5">
      {!currentUser ? <WelcomeMessageGuest /> : <WelcomeMessageUser />}
    </Container>
  );
};

export default HomePage;
