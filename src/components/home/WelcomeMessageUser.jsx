import { Link } from "react-router-dom";

const WelcomeMessageUser = () => {
  return (
    <>
      <h2 className="text-center text-light py-3 fw-bold">
        Photo Reviewer Alpha
      </h2>
      <p className="text-center text-light">Let's get started!</p>
      <p className="text-center text-light">
        Head over to{" "}
        <Link className="text-light" to="/photo-albums">
          Albums
        </Link>{" "}
        to create your album, upload your photos and then send your review link
        to your customer.
      </p>
    </>
  );
};

export default WelcomeMessageUser;
