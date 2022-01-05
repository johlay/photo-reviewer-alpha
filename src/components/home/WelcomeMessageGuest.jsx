import { Link } from "react-router-dom";

const WelcomeMessageGuest = () => {
  return (
    <>
      <h2 className="text-center text-light py-3 fw-bold">
        Photo Reviewer Alpha
      </h2>
      <p className="text-center text-light">
        Collaboration between photographers and customers made easy!
      </p>
      <p className="text-center text-light">
          Here you can create albums, upload photos and have your customer review them.
      </p>
      
      <p className="text-center text-light">
        Services are only available for members.
      </p>
      <p className="text-center text-light">
        Not a member at Photo Reviewer Alpha?{" "}
        <Link className="text-light" to="/register">
          Register now
        </Link>
      </p>
    </>
  );
};

export default WelcomeMessageGuest;
