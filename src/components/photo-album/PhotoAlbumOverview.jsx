import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import PhotoAlbumHeader from "./PhotoAlbumHeader";

const PhotoAlbumOverview = () => {
  const { albumId } = useParams();

  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={() => navigate("/photo-albums")}
        className="mb-5"
        variant="dark"
      >
        <span aria-label="an arrow left icon" className="me-1">
          <FontAwesomeIcon icon={faArrowCircleLeft} size="1x" color="white" />
        </span>{" "}
        Go back
      </Button>

      <PhotoAlbumHeader albumId={albumId} />

      <hr className="bg-light my-5" />
    </>
  );
};

export default PhotoAlbumOverview;
