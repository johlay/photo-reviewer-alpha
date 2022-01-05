import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ConfirmAccountModal = ({ showModal }) => {
  const navigate = useNavigate();

  return (
    <Modal
      size="lg"
      aria-labelledby="confirm-account-modal"
      show={showModal}
      centered
    >
      <Modal.Body>
        <h3 className="text-center">Congratulations!</h3>
        <p className="text-center">
          Your account has been successfully created.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={() => navigate("/")}>
          Continue
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmAccountModal;
