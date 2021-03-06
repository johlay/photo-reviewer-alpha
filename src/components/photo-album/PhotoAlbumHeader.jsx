import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PhotoAlbumHeaderOptions from "./PhotoAlbumHeaderOptions";

// implement additional dayjs form
dayjs.extend(relativeTime);

const PhotoAlbumHeader = ({ currentUser, photos, photoAlbum }) => {
  return (
    <Row>
      <Col>
        <h2 className="fw-bold text-light">{photoAlbum?.data?.name}</h2>

        <p className="text-light mb-0">
          Created at:{" "}
          {dayjs(photoAlbum?.data?.created_at?.seconds * 1000).fromNow()}
        </p>
        <p className="text-light mb-0">
          {photoAlbum?.data?.reviewed === true
            ? `Reviewed by: customer`
            : `Added by: ${currentUser?.displayName}`}
        </p>
      </Col>
      <Col className="d-flex justify-content-end">
        <PhotoAlbumHeaderOptions
          album={photoAlbum?.data}
          photos={photos}
          refetch={photoAlbum?.refetch}
        />
      </Col>
    </Row>
  );
};

export default PhotoAlbumHeader;
