import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const CustomerReviewSummary = ({ reviewedPhotos }) => {
  const navigate = useNavigate();

  // check how many photos have been reviewed by customer
  const customerReviewedPhotos = reviewedPhotos?.filter(
    (photo) => photo?.selected === true
  ).length;
  const totalPhotos = reviewedPhotos?.length;

  // photos to be discarded
  const reviewedPhotosDiscard = reviewedPhotos?.filter(
    (photo) => photo?.discard === true
  ).length;

  // photos to be kept
  const reviewedPhotosKeep = reviewedPhotos?.filter(
    (photo) => photo?.keep === true
  );

  // validation - check if every photos has been reviewed
  const validateReviewedPhotos = reviewedPhotos?.every((photo) => {
    return photo?.selected === true;
  });

  const handleSubmitReview = () => {
    alert("you have reviewed all photos!");

    // re-directs user to route path: "/review/feedback"
    navigate("/review/feedback");
  };

  return (
    <>
      <p className="text-center text-light">
        You have reviewed{" "}
        <span aria-label="reviewed-photos">{customerReviewedPhotos}</span> /{" "}
        <span aria-label="total-photos">{totalPhotos}</span> photos
      </p>
      <p className="text-center text-light">
        <span className="pe-3" aria-label="counter-keep">
          {reviewedPhotosKeep?.length}
        </span>
        <FontAwesomeIcon
          className="me-5"
          icon={faThumbsUp}
          size="1x"
          color="green"
        />
        <span className="ps-5" aria-label="counter-discard">
          {reviewedPhotosDiscard}
        </span>
        <FontAwesomeIcon
          className="ms-3"
          icon={faThumbsDown}
          size="1x"
          color="red"
        />
      </p>

      <div className="d-flex justify-content-center my-4">
        <Button
          onClick={handleSubmitReview}
          disabled={!validateReviewedPhotos}
          variant="dark"
        >
          Submit review
        </Button>
      </div>
    </>
  );
};

export default CustomerReviewSummary;
