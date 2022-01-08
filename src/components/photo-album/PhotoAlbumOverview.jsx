import { useParams } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import useGetPhotoAlbum from "../../hooks/useGetPhotoAlbum";
import usePhotos from "../../hooks/usePhotos";
import GoBackButton from "./GoBackButton";
import PhotoAlbumHeader from "./PhotoAlbumHeader";
import PhotoDropzone from "./PhotoDropzone";
import PhotoGrid from "./PhotoGrid";
import RequireAuthMessage from "../routeguard/RequireAuthMessage";

const PhotoAlbumOverview = () => {
  const { currentUser } = useAuthContext();
  const { albumId } = useParams();
  const photoAlbum = useGetPhotoAlbum(albumId);
  const photos = usePhotos(albumId);

  // check if current user is the creator/owner of this album
  if (
    currentUser &&
    photoAlbum.data &&
    currentUser.uid !== photoAlbum.data.owner
  ) {
    // if authentication was unsuccessful then return the RequireAuthMessage component instead.
    return <RequireAuthMessage />;
  }

  return (
    <>
      <GoBackButton />
      <PhotoAlbumHeader currentUser={currentUser} photoAlbum={photoAlbum} />

      <hr className="bg-light my-5" />
      <PhotoDropzone refetchPhotos={photos?.refetch} />
      <PhotoGrid photos={photos} />
    </>
  );
};

export default PhotoAlbumOverview;
