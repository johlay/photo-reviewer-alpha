import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const CustomerReviewPhotoCard = ({ onReviewPhoto, photo }) => {
  return (
    <Card className="my-4">
      <Card.Img
        variant="top"
        src={photo?.photo_url}
        style={{ cursor: "pointer", height: "180px" }}
      />
      <Card.Body className="bg-dark">
        <div className="d-flex justify-content-between">
          <FontAwesomeIcon
            onClick={() => onReviewPhoto({ type: "keep" }, photo)}
            className="mx-4"
            style={{ cursor: "pointer" }}
            icon={faThumbsUp}
            size="1x"
            color={photo?.keep ? "green" : "white"}
          />
          <FontAwesomeIcon
            className="mx-4"
            onClick={() => onReviewPhoto({ type: "discard" }, photo)}
            style={{ cursor: "pointer" }}
            icon={faThumbsDown}
            size="1x"
            color={photo?.discard ? "red" : "white"}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomerReviewPhotoCard;
