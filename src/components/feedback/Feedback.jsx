import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";

const Feedback = () => {
  return (
    <>
      <h2 className="text-center text-light py-3 fw-bold">
        Thank you for reviewing the photo album!
      </h2>

      <div className="d-flex justify-content-center">
        <FontAwesomeIcon icon={faHandshake} color="white" size="5x" />
      </div>
    </>
  );
};

export default Feedback;
