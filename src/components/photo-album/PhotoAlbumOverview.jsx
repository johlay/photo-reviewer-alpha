import { useState } from "react";
import { useParams } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import useGetPhotoAlbum from "../../hooks/useGetPhotoAlbum";
import useGetPhotos from "../../hooks/useGetPhotos";
import GoBackButton from "./GoBackButton";
import NotFoundPage from "../../pages/NotFoundPage";
import PhotoAlbumHeader from "./PhotoAlbumHeader";
import PhotoDropzone from "./PhotoDropzone";
import PhotoGrid from "./PhotoGrid";
import RequireAuthMessage from "../routeguard/RequireAuthMessage";
import SelectionAndCreationSummary from "./SelectionAndCreationSummary";

const PhotoAlbumOverview = () => {
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const { currentUser } = useAuthContext();
  const { albumId } = useParams();
  const photoAlbum = useGetPhotoAlbum(albumId);
  const photos = useGetPhotos(albumId);

  // check if current user is the creator/owner of this album
  if (
    currentUser &&
    photoAlbum.data &&
    currentUser.uid !== photoAlbum.data.owner
  ) {
    // if authentication was unsuccessful then return the RequireAuthMessage component instead.
    return <RequireAuthMessage />;
  }

  // returns page not found if data for the photo album could not be found
  if (!photoAlbum?.data && photoAlbum.isFetched) {
    return <NotFoundPage />;
  }

  // returns page not found if data for the photos could not be found
  if (!photos?.data && photos.isFetched) {
    return <NotFoundPage />;
  }

  const onSelectedPhoto = (selected, photo) => {
    // check if user selected the photo, if true - add it to the array/state variable --> "selectedPhotos"
    if (selected === true) {
      setSelectedPhotos((prev) => {
        return [...prev, photo];
      });
      return;
    }

    if (selected === false) {
      // create an updated list, removing the photo if it existed in the list before.
      let updatedList = selectedPhotos.filter((item) => item?.id !== photo?.id);

      setSelectedPhotos(updatedList);
      return;
    }
  };

  // render components only if data exists for: "photoAlbum" and "photos"
  return photoAlbum?.data && photos?.data ? (
    <>
      <GoBackButton />
      <PhotoAlbumHeader currentUser={currentUser} photoAlbum={photoAlbum} />

      <hr className="bg-light my-5" />
      <PhotoDropzone refetchPhotos={photos?.refetch} />
      <SelectionAndCreationSummary
        photoAlbum={photoAlbum}
        selectedPhotos={selectedPhotos}
      />
      <PhotoGrid
        albumId={albumId}
        isAlbumReviewed={photoAlbum?.data?.reviewed}
        onSelectedPhoto={onSelectedPhoto}
        refetchPhotos={photos?.refetch}
        photos={photos}
      />
    </>
  ) : null;
};

export default PhotoAlbumOverview;
