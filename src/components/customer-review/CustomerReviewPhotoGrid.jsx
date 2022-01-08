import CustomerReviewPhotoCard from "./CustomerReviewPhotoCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CustomerReviewPhotoGrid = ({ onReviewPhoto, photos }) => {
  return (
    <Row xs={1} sm={2} md={3} lg={4} xl={4}>
      {photos?.map((photo) => {
        return (
          <Col key={photo?.uuid}>
            <CustomerReviewPhotoCard
              onReviewPhoto={onReviewPhoto}
              photo={photo}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default CustomerReviewPhotoGrid;
