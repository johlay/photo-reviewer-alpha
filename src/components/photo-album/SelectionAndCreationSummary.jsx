import Button from "react-bootstrap/Button";

const SelectionAndCreationSummary = ({ selectedPhotos }) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <p className="mb-0 text-light mx-2">
          Create a new photo album based on selected photos: <br />
        </p>
        <Button disabled={!selectedPhotos?.length} variant="dark">New photo album</Button>
      </div>
      <p className="text-light text-center mb-5">Selected photos: {selectedPhotos?.length}</p>
    </>
  );
};

export default SelectionAndCreationSummary;
