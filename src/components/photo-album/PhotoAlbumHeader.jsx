import PhotoAlbumHeaderOptions from "./PhotoAlbumHeaderOptions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const PhotoAlbumHeader = () => {
  return (
    <>
      <Row>
        <Col>
          <h2 className="fw-bold text-light">Nature</h2>

          <p className="text-light mb-0">Album created: 5 mins ago</p>
          <p className="text-light mb-0">
            <span className="fw-bold">Added by:</span> Johnny Lay
          </p>
        </Col>
        <Col className="d-flex justify-content-end">
          <PhotoAlbumHeaderOptions />
        </Col>
      </Row>
    </>
  );
};

export default PhotoAlbumHeader;
