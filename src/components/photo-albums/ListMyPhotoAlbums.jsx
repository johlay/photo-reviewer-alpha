import CreatePhotoAlbum from "./CreatePhotoAlbum";
import useAuthContext from "../../hooks/useAuthContext";
import useGetPhotoAlbums from "../../hooks/useGetPhotoAlbums";

const ListMyPhotoAlbums = () => {
  const { currentUser } = useAuthContext();
  const myPhotoAlbums = useGetPhotoAlbums(currentUser?.uid);

  return (
    <>
      <h2 className="text-center text-light py-3 fw-bold">My Photo Albums</h2>{" "}
      <CreatePhotoAlbum userUid={currentUser?.uid} />
    </>
  );
};

export default ListMyPhotoAlbums;
