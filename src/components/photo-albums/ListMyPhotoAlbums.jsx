import CreatePhotoAlbum from "./CreatePhotoAlbum";
import PhotoAlbumGrid from "./PhotoAlbumGrid";
import useAuthContext from "../../hooks/useAuthContext";
import useGetPhotoAlbums from "../../hooks/useGetPhotoAlbums";

const ListMyPhotoAlbums = () => {
  const { currentUser } = useAuthContext();
  const myPhotoAlbums = useGetPhotoAlbums(currentUser?.uid);

  return (
    <>
      <h2 className="text-center text-light py-3 fw-bold">My Photo Albums</h2>{" "}
      <CreatePhotoAlbum userUid={currentUser?.uid} />
      <PhotoAlbumGrid
        addedBy={currentUser?.displayName}
        data={myPhotoAlbums?.data}
      />
    </>
  );
};

export default ListMyPhotoAlbums;
