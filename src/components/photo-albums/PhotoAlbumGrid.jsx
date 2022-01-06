import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PhotoAlbumCard from "./PhotoAlbumCard";

const PhotoAlbumGrid = ({ data, refetch, user }) => {
  return (
    <Row xs={1} sm={2} md={3} lg={4} xl={4}>
      {data?.map((album) => {
        return (
          <Col key={album?.id}>
            <PhotoAlbumCard album={album} refetch={refetch} user={user} />
          </Col>
        );
      })}
    </Row>
  );
};

export default PhotoAlbumGrid;
