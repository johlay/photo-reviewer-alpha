import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import usePhotos from "../../hooks/usePhotos";

const PhotoCard = ({ photo, refetchPhotos }) => {
  const { deletePhoto } = usePhotos();

  const onDeletePhoto = () => {
    deletePhoto(photo).then(() => {
      // refetch photos after photo deletion is successful
      refetchPhotos();
    });
  };

  return (
    <Card className="my-4">
      <Card.Img
        variant="top"
        src={photo?.photo_url}
        style={{ cursor: "pointer", height: "180px" }}
      />
      <Card.Body>
        <Card.Title>{photo?.name}</Card.Title>
        <p className="mb-0">
          size: {(photo?.size / (1024 * 1024)).toFixed(2)} MB
        </p>

        <hr />
        <div className="d-grid">
          <Button onClick={onDeletePhoto} variant="dark">
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PhotoCard;
