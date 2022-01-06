import { db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

const useEditPhotoAlbumTitle = () => {
  const edit = async (newTitle, userUid) => {
    // update the title of the photo album
    await updateDoc(doc(db, "albums", userUid), {
      name: newTitle,
    });
  };

  return { edit };
};

export default useEditPhotoAlbumTitle;
