import { useNavigate, useLocation } from "react-router-dom";
import useDeletePhotoAlbum from "../../hooks/useDeletePhotoAlbum";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeletePhotoAlbumModal = ({ album, refetch, showModal, setShowModal }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const photoAlbum = useDeletePhotoAlbum(album?.id);

  const onDeletePhotoAlbum = () => {
    photoAlbum.deletePhotoAlbum().then(() => {
      // check the pathname of location.
      if (location.pathname !== "/photo-albums") {
        // if user is for an example in route path: "/photo-albums/:albumId" --> re-directs user to page for showing all photo albums
        navigate("/photo-albums");
      } else {
        // refetch data for photo albums after deletion
        refetch();

        // close the modal if deletion was successful
        setShowModal(false);
      }
    });
  };

  return (
    <Modal
      size="md"
      aria-labelledby="delete-photo-album-modal"
      show={showModal}
      centered
    >
      <Modal.Body>
        <p className="text-center h3 fw-normal mb-3">
          Delete photo album <span className="h3">{album?.name}</span>
        </p>
        <p className="text-center">
          Are you sure you want to delete the album{" "}
          <span className="fw-bold">"{album?.name}"</span>?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setShowModal(false)}>
          Cancel
        </Button>
        <Button variant="dark" onClick={onDeletePhotoAlbum}>
          Delete Photo Album
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeletePhotoAlbumModal;
