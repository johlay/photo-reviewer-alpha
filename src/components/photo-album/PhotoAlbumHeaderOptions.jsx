import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faShare } from "@fortawesome/free-solid-svg-icons";

const PhotoAlbumHeaderOptions = () => {
  return (
    <div>
      <ButtonGroup aria-label="photo-album-header-options">
        <Button variant="dark">
          Edit album title
          <span className="ms-3" arial-label="icon-edit-photo-album-title">
            <FontAwesomeIcon icon={faEdit} size="1x" color="white" />
          </span>
        </Button>
        <Button variant="dark">
          Delete Album
          <span className="ms-3" arial-label="icon-delete-photo-album">
            <FontAwesomeIcon icon={faTrash} size="1x" color="white" />
          </span>
        </Button>
        <Button variant="dark">
          Create review link
          <span className="ms-3" arial-label="icon-create-review-link">
            <FontAwesomeIcon icon={faShare} size="1x" color="white" />
          </span>
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default PhotoAlbumHeaderOptions;
