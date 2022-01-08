import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const CustomerReviewSummary = () => {
  return (
    <>
      <p className="text-center text-light">You have reviewed 0 / 12 photos</p>
      <p className="text-center text-light">
        <span className="pe-3" aria-label="counter-keep">
          0
        </span>
        <FontAwesomeIcon
          className="me-5"
          icon={faThumbsUp}
          size="1x"
          color="green"
        />
        <span className="ps-5" aria-label="counter-discard">
          0
        </span>
        <FontAwesomeIcon
          className="ms-3"
          icon={faThumbsDown}
          size="1x"
          color="red"
        />
      </p>

      <div className="d-flex justify-content-center my-4">
        <Button variant="dark">Submit review</Button>
      </div>
    </>
  );
};

export default CustomerReviewSummary;
