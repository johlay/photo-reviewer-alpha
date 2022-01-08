import Alert from "react-bootstrap/Alert";
import ProgressBar from "react-bootstrap/ProgressBar";

const UploadProgressBar = ({ error, progress }) => {
  if (error) {
    return (
      <Alert className="w-25 mt-3 mx-auto" variant="danger">
        <p className="fw-bold text-dark text-center mb-0">
          An error occured. Please try again.
        </p>
      </Alert>
    );
  }

  return (
    <>
      {progress !== 100 && (
        <ProgressBar className="my-4" variant="dark" animated now={progress} />
      )}

      {progress === 100 && (
        <p className="text-light text-center my-3">Successfully uploaded!</p>
      )}
    </>
  );
};

export default UploadProgressBar;
