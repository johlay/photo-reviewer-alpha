import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const useNewPhotoAlbum = () => {
  // create a new "empty" album
  const create = async (title, userUid) => {
    // create a new firestore firebase document for the new "empty" album
    await addDoc(collection(db, "albums"), {
      name: title,
      owner: userUid,
      created_at: serverTimestamp(),
      reviews: null,
    });
  };

  return { create };
};

export default useNewPhotoAlbum;
