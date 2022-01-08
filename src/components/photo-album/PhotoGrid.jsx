import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PhotoCard from "./PhotoCard";
import { SRLWrapper } from "simple-react-lightbox";

const PhotoGrid = ({ onSelectedPhoto, photos, refetchPhotos }) => {
  const emptyPhotoAlbumMessage = (
    <p className="text-light text-center h6">
      This photo album is currently empty
    </p>
  );

  return (
    <SRLWrapper>
      {photos?.data?.length === 0 && emptyPhotoAlbumMessage}
      <Row xs={1} sm={2} md={3} lg={4} xl={4}>
        {photos?.data?.map((photo) => {
          return (
            <Col key={photo?.uuid}>
              <PhotoCard
                onSelectedPhoto={onSelectedPhoto}
                refetchPhotos={refetchPhotos}
                photo={photo}
              />
            </Col>
          );
        })}
      </Row>
    </SRLWrapper>
  );
};

export default PhotoGrid;
