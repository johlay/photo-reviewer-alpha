import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/photo-albums")}
      className="mb-5"
      variant="dark"
    >
      <span aria-label="an arrow left icon" className="me-1">
        <FontAwesomeIcon icon={faArrowCircleLeft} size="1x" color="white" />
      </span>{" "}
      Go back
    </Button>
  );
};

export default GoBackButton;
