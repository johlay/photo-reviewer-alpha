import CreatePhotoAlbum from "./CreatePhotoAlbum";
import useAuthContext from "../../hooks/useAuthContext";

const ListMyPhotoAlbums = () => {
  const { currentUser } = useAuthContext();

  return (
    <>
      <h2 className="text-center text-light py-3 fw-bold">My Photo Albums</h2>{" "}
      <CreatePhotoAlbum userUid={currentUser?.uid} />
    </>
  );
};

export default ListMyPhotoAlbums;
