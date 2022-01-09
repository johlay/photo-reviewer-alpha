import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import useGetPhotos from "./useGetPhotos";
import usePhotos from "./usePhotos";

const useDeletePhotoAlbum = (albumId) => {
  const photos = useGetPhotos(albumId);
  const { deletePhoto } = usePhotos();

  // delete the photo album
  const deletePhotoAlbum = async () => {
    // check if there are photos in the album before deleting the photo album
    if (photos?.data?.length !== 0) {
      // if there are photos in the photo album, then check if each photos are being used in other photo albums before deleting them (database and storage).
      photos?.data.forEach(async (photo) => {
        await deletePhoto(photo, albumId);
      });

      // when all photos are deleted from this photo album, then delete the document for the photo album that is stored in firebase firestore
      await deleteDoc(doc(db, "albums", albumId));
    }

    // if there are no photos available in this current photo album, just directly delete the photo album
    if (photos?.data?.length === 0) {
      // delete the document for the photo album that is stored in firebase firestore
      await deleteDoc(doc(db, "albums", albumId));
    }
  };

  return { deletePhotoAlbum };
};

export default useDeletePhotoAlbum;
