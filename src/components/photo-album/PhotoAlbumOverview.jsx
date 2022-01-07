import { useParams } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import useGetPhotoAlbum from "../../hooks/useGetPhotoAlbum";
import GoBackButton from "./GoBackButton";
import ImageDropzone from "./ImageDropzone";
import RequireAuthMessage from "../routeguard/RequireAuthMessage";
import PhotoAlbumHeader from "./PhotoAlbumHeader";

const PhotoAlbumOverview = () => {
  const { currentUser } = useAuthContext();
  const { albumId } = useParams();
  const photoAlbum = useGetPhotoAlbum(albumId);

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
      <ImageDropzone />
    </>
  );
};

export default PhotoAlbumOverview;
