import { useRef } from "react";
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
  const photoAlbumTitleRef = useRef("");

  const photoAlbum = usePhotoAlbum();

  const onSaveChanges = () => {
    photoAlbum.edit(photoAlbumTitleRef.current.value, album?.id).then(() => {
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
          ref={photoAlbumTitleRef}
          className="mx-auto"
          style={{ width: "90%" }}
          type="text"
          placeholder="Enter a new title for you photo album"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setShowModal(false)}>
          Cancel
        </Button>
        <Button variant="dark" onClick={onSaveChanges}>
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditPhotoAlbumTitleModal;
