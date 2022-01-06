import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

const useEditPhotoAlbumTitle = () => {
  const edit = async (newTitle, albumId) => {
    // update the title of the photo album
    await updateDoc(doc(db, "albums", albumId), {
      name: newTitle,
    });
  };

  return { edit };
};

export default useEditPhotoAlbumTitle;
