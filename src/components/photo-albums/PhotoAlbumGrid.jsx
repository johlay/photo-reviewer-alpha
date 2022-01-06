import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PhotoAlbumCard from "./PhotoAlbumCard";

const PhotoAlbumGrid = ({ data, addedBy }) => {
  return (
    <Row xs={1} sm={2} md={3} lg={4} xl={4}>
      {data?.map((album) => {
        return (
          <Col key={album?.id}>
            <PhotoAlbumCard album={album} addedBy={addedBy} />
          </Col>
        );
      })}
    </Row>
  );
};

export default PhotoAlbumGrid;
