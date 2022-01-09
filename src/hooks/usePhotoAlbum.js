import { db } from "../firebase";
import {
  collection,
  doc,
  addDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

const usePhotoAlbum = () => {
  // create a new "empty" album
  const create = async (title, userUid) => {
    // create a new firebase firestore document for the new "empty" album
    await addDoc(collection(db, "albums"), {
      name: title,
      owner: userUid,
      created_at: serverTimestamp(),
      reviewed: false,
    });
  };

  // edit the title of the photo album
  const edit = async (newTitle, albumId) => {
    // update the title of the photo album
    await updateDoc(doc(db, "albums", albumId), {
      name: newTitle,
    });
  };

  return { create, edit };
};

export default usePhotoAlbum;
