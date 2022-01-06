import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import useEditPhotoAlbumTitle from "../../hooks/useEditPhotoAlbumTitle";

const EditPhotoAlbumTitleModal = ({
  album,
  refetch,
  showModal,
  setShowModal,
}) => {
  const photoAlbumTitleRef = useRef("");

  const photoAlbum = useEditPhotoAlbumTitle();

  const onSaveChanges = () => {
    photoAlbum.edit(photoAlbumTitleRef.current.value, album?.id).then(() => {
      // refetch data for photo albums
      refetch();

      // close the modal if title editing was successful
      setShowModal(false);
    });
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="confirm-account-modal"
      show={showModal}
      centered
    >
      <Modal.Body>
        <p className="text-center h3 fw-normal mb-3">
          Edit title for photo album: <span className="h3">{album?.name}</span>
        </p>
        <Form.Control
          ref={photoAlbumTitleRef}
          className="w-75 mx-auto"
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
