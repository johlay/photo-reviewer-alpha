import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const CustomerReviewWelcomeMessage = ({ photoAlbum }) => {
  return (
    <>
      <h2 className="text-center text-light py-3 fw-bold">Welcome!</h2>
      <p className="text-center text-light">
        You have been invited to review this photo album:{" "}
        <span aria-label="photo-album-name" className="fw-bold">
          {photoAlbum?.name}
        </span>
      </p>
      <p className="text-center text-light">
        Please choose which photos you want to keep and which ones you would
        like to discard
      </p>
      <p className="text-center text-light">
        You must select{" "}
        <FontAwesomeIcon
          className="mx-4"
          icon={faThumbsUp}
          size="1x"
          color="white"
        />
        or
        <FontAwesomeIcon
          className="mx-4"
          icon={faThumbsDown}
          size="1x"
          color="white"
        />
        for all the photos before you can submit the review
      </p>
    </>
  );
};

export default CustomerReviewWelcomeMessage;
