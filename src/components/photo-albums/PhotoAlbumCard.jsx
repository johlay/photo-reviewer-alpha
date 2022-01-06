import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Card from "react-bootstrap/Card";

// implement additional dayjs form
dayjs.extend(relativeTime);

const PhotoAlbumCard = ({ album, addedBy }) => {
  return (
    <>
      <Card className="my-4">
        <div className="bg-dark" style={{ height: "180px" }}></div>

        <Card.Body>
          <Card.Title>{album?.name}</Card.Title>
          <p className="mb-0">
            Album created: {dayjs(album?.created_at?.seconds * 1000).fromNow()}
          </p>
          <p className="mb-0">
            <span className="fw-bold">Added by:</span> {addedBy}
          </p>
          <div className="d-flex justify-content-between my-3">
            <span aria-label="edit-icon" style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faEdit} size="2x" color="black" />
            </span>

            <span aria-label="delete-icon" style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faTrash} size="2x" color="black" />
            </span>
          </div>
          <hr />
          <div>
            <Link
              className="btn btn-dark d-grid"
              to={`/photo-albums/${album?.id}`}
            >
              Go to album
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default PhotoAlbumCard;
