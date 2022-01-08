import { useState } from "react";
import usePhotoAlbum from "../../hooks/usePhotoAlbum";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

const CreatePhotoAlbum = ({ userUid, refetch }) => {
  const [photoAlbumTitle, setPhotoAlbumTitle] = useState("");

  const photoAlbum = usePhotoAlbum();

  const handleClick = () => {
    // create the new "empty" album
    photoAlbum.create(photoAlbumTitle, userUid).then(() => {
      // refetch data for getting photo albums
      refetch();

      // reset input field
      setPhotoAlbumTitle("");
    });
  };

  return (
    <div className="d-flex justify-content-center">
      <InputGroup className="mb-3 w-75">
        <FormControl
          onChange={(e) => setPhotoAlbumTitle(e.target.value)}
          value={photoAlbumTitle}
          placeholder="Enter photo album name"
          aria-label="enter photo album name"
          aria-describedby="new-photo-album-name"
        />
        <Button
          type="button"
          variant="dark"
          disabled={photoAlbumTitle.length === 0}
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
