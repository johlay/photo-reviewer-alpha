import { useRef } from "react";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import useNewPhotoAlbum from "../../hooks/useNewPhotoAlbum";

const CreatePhotoAlbum = ({ userUid, refetch }) => {
  const albumTitleRef = useRef("");

  const photoAlbum = useNewPhotoAlbum();

  const handleClick = () => {
    // create the new "empty" album
    photoAlbum.create(albumTitleRef.current.value, userUid).then(() => {
      // refetch data for getting photo albums
      refetch();

      // reset input field
      albumTitleRef.current.value = "";
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <InputGroup className="mb-3 w-75">
        <FormControl
          ref={albumTitleRef}
          placeholder="New photo album name"
          aria-label="new photo album name"
          aria-describedby="new-photo-album-name"
        />
        <Button
          type="button"
          variant="dark"
          id="button-create-photo-album"
          onClick={handleClick}
        >
          Create photo album
        </Button>
      </InputGroup>
    </div>
  );
};

export default CreatePhotoAlbum;
