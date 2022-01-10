import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const SelectionAndCreationModal = ({
  album,
  resetSelectedPhotos,
  showModal,
  setShowModal,
}) => {
  const navigate = useNavigate();

  return (
    <Modal
      size="md"
      aria-labelledby="create-review-link-modal"
      show={showModal}
      centered
    >
      <Modal.Body>
        <p className="text-center h3 fw-normal mb-3">Success!</p>
        <p className="text-center">
          A new photo album has been created based on selected photos. New photo
          album name: {album?.name}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setShowModal(false)}>
          Stay
        </Button>
        <Button
          variant="dark"
          onClick={() => {
            // reset list of selected photos --> empty array
            resetSelectedPhotos();

            navigate(`/photo-albums/${album?.id}`);
          }}
        >
          Go to new photo album
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SelectionAndCreationModal;
