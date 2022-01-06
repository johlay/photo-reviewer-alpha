import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

const useDeletePhotoAlbum = () => {
  const deletePhotoAlbum = async (albumId) => {
    // delete the document for the photo album that is stored in firebase firestore
    await deleteDoc(doc(db, "albums", albumId));
  };

  return { deletePhotoAlbum };
};

export default useDeletePhotoAlbum;
