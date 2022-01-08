import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const CustomerReviewWelcomeMessage = () => {
  return (
    <>
      {" "}
      <h2 className="text-center text-light py-3 fw-bold">Welcome!</h2>
      <p className="text-center text-light">
        You have been invited to review this photo album:{" "}
        <span className="fw-bold">Nature</span>
      </p>
      <p className="text-center text-light">
        Please choose which photos you want to keep and which ones you would
        like to discard
      </p>
      <p className="text-center text-light">
        You must select{" "}
        <span className="px-3" aria-label="icon-thumbs-down">
          <FontAwesomeIcon icon={faThumbsDown} size="1x" color="white" />
        </span>{" "}
        or{" "}
        <span className="px-3" aria-label="icon-thumbs-up">
          <FontAwesomeIcon icon={faThumbsUp} size="1x" color="white" />
        </span>{" "}
        for all the photos before you can submit the review
      </p>
    </>
  );
};

export default CustomerReviewWelcomeMessage;
