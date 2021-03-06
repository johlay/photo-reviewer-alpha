import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PhotoSelector from "./PhotoSelector";
import useDeletePhotos from "../../hooks/useDeletePhotos";

const PhotoCard = ({ albumId, onSelectedPhoto, photo, refetchPhotos }) => {
  const { deletePhoto, isMutating } = useDeletePhotos();

  const onDeletePhoto = () => {
    deletePhoto(photo, albumId).then(() => {
      // remove the photo from selectedPhotos array as well (if already selected)
      onSelectedPhoto(false, photo);

      // refetch photos after photo deletion is successful
      refetchPhotos();
    });
  };
  return (
    <Card className="my-4">
      <PhotoSelector onSelectedPhoto={onSelectedPhoto} photo={photo} />

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
          <Button disabled={isMutating} onClick={onDeletePhoto} variant="dark">
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PhotoCard;
