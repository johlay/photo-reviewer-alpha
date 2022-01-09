import Button from "react-bootstrap/Button";
import useSelectPhotosAndCreatePhotoAlbum from "../../hooks/useSelectPhotosAndCreatePhotoAlbum";

const SelectionAndCreationSummary = ({ photoAlbum, selectedPhotos }) => {
  const { selectAndCreate } = useSelectPhotosAndCreatePhotoAlbum();

  const handleButtonClick = () => {
    selectAndCreate(photoAlbum?.data, selectedPhotos).then(() => {
      alert("Successfully created a new photo album based on selected photos")
    });
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <p className="mb-0 text-light mx-2">
          Create a new photo album based on selected photos: <br />
        </p>
        <Button
          onClick={handleButtonClick}
          disabled={!selectedPhotos?.length}
          variant="dark"
        >
          New photo album
        </Button>
      </div>
      <p className="text-light text-center mb-5">
        Selected photos: {selectedPhotos?.length}
      </p>
    </>
  );
};

export default SelectionAndCreationSummary;
