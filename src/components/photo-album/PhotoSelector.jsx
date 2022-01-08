import Form from "react-bootstrap/Form";

const PhotoSelector = ({ onSelectedPhoto, photo }) => {
  return (
    <Form.Check
      onClick={(e) => onSelectedPhoto(e.target.checked, photo)}
      className="mb-0 position-absolute top-0 end-0 me-2 mt-1"
      style={{ transform: "scale(2.3)" }}
    />
  );
};

export default PhotoSelector;
