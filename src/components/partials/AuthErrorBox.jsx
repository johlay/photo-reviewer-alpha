import Alert from "react-bootstrap/Alert";

const AuthErrorBox = ({ error }) => {
  return (
    <Alert variant="danger" className="text-center fw-bold">
      {error}
    </Alert>
  );
};

export default AuthErrorBox;
