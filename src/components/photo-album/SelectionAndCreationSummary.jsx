import { useState } from "react";
import Button from "react-bootstrap/Button";
import SelectionAndCreationModal from "../modals/SelectionAndCreationModal";
import useSelectPhotosAndCreatePhotoAlbum from "../../hooks/useSelectPhotosAndCreatePhotoAlbum";

const SelectionAndCreationSummary = ({
  photoAlbum,
  resetSelectedPhotos,
  selectedPhotos,
}) => {
  const [showModal, setShowModal] = useState(false);

  const { newAlbum, selectAndCreate } = useSelectPhotosAndCreatePhotoAlbum();

  const handleButtonClick = () => {
    selectAndCreate(photoAlbum?.data, selectedPhotos).then(() => {
      // show modal that confirms that the new photo album has been created
      setShowModal(true);
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

      <SelectionAndCreationModal
        album={newAlbum}
        resetSelectedPhotos={resetSelectedPhotos}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
  );
};

export default SelectionAndCreationSummary;
