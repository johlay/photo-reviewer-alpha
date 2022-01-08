import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PhotoCard from "./PhotoCard";

const PhotoGrid = ({ photos, refetchPhotos }) => {
  return (
    <Row xs={1} sm={2} md={3} lg={4} xl={4}>
      {photos?.data?.map((photo) => {
        return (
          <Col key={photo?.uuid}>
            <PhotoCard refetchPhotos={refetchPhotos} photo={photo} />
          </Col>
        );
      })}
    </Row>
  );
};

export default PhotoGrid;
