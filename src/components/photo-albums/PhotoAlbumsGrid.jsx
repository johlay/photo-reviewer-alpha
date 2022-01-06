import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PhotoAlbumsCard from "./PhotoAlbumsCard";

const PhotoAlbumsGrid = ({ data, refetch, user }) => {
  return (
    <Row xs={1} sm={2} md={3} lg={4} xl={4}>
      {data?.map((album) => {
        return (
          <Col key={album?.id}>
            <PhotoAlbumsCard album={album} refetch={refetch} user={user} />
          </Col>
        );
      })}
    </Row>
  );
};

export default PhotoAlbumsGrid;
