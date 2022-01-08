import { useState } from "react";
import usePhotoAlbum from "../../hooks/usePhotoAlbum";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const EditPhotoAlbumTitleModal = ({
  album,
  refetch,
  showModal,
  setShowModal,
}) => {
  const [photoAlbumTitle, setPhotoAlbumTitle] = useState("");

  const photoAlbum = usePhotoAlbum();

  const onSaveChanges = () => {
    photoAlbum.edit(photoAlbumTitle, album?.id).then(() => {
      // refetch data for photo album(s) after editing
      refetch();

      // close the modal if title editing was successful
      setShowModal(false);
    });
  };

  return (
    <Modal
      size="md"
      aria-labelledby="edit-photo-album-title-modal"
      show={showModal}
      centered
    >
      <Modal.Body>
        <p className="text-center h3 fw-normal mb-3">
          Edit title for photo album: <span className="h3">{album?.name}</span>
        </p>
        <Form.Control
          onChange={(e) => setPhotoAlbumTitle(e.target.value)}
          value={photoAlbumTitle}
          className="mx-auto"
          style={{ width: "90%" }}
          type="text"
          placeholder="Enter a new title for you photo album"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => {
          setPhotoAlbumTitle("")
          setShowModal(false);
        }}>
          Cancel
        </Button>
        <Button disabled={photoAlbumTitle.length < 1} variant="dark" onClick={onSaveChanges}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPhotoAlbumTitleModal;
