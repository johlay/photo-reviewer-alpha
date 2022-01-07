import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const CreateReviewLinkModal = ({ album, showModal, setShowModal }) => {
  return (
    <Modal
      size="md"
      aria-labelledby="create-review-link-modal"
      show={showModal}
      centered
    >
      <Modal.Body>
        <p className="text-center h3 fw-normal mb-3">
          Review link for photo album <span className="h3">{album?.name}</span>
        </p>
        <p className="text-center">
          It's easy to get your photo album reviewed. Send this review link to
          you customer:{" "}
          <span className="fw-bold">
            {window.location.origin + "/review/" + album?.id}
          </span>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={() => setShowModal(false)}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateReviewLinkModal;
