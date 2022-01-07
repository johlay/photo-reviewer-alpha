import useAuthContext from "../../hooks/useAuthContext";
import useGetPhotoAlbums from "../../hooks/useGetPhotoAlbums";
import CreatePhotoAlbum from "./CreatePhotoAlbum";
import PhotoAlbumsGrid from "./PhotoAlbumsGrid";

const ListMyPhotoAlbums = () => {
  const { currentUser } = useAuthContext();
  const myPhotoAlbums = useGetPhotoAlbums(currentUser?.uid);

  return (
    <>
      <h2 className="text-center text-light py-3 fw-bold">My Photo Albums</h2>
      <CreatePhotoAlbum
        refetch={myPhotoAlbums.refetch}
        userUid={currentUser?.uid}
      />
      <PhotoAlbumsGrid
        data={myPhotoAlbums?.data}
        refetch={myPhotoAlbums.refetch}
        user={currentUser}
      />
    </>
  );
};

export default ListMyPhotoAlbums;
