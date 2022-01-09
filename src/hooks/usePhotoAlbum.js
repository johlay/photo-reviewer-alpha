import { db } from "../firebase";
import {
  collection,
  doc,
  addDoc,
  deleteDoc,
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

  // delete the photo album
  const deletePhotoAlbum = async (albumId) => {
    // delete the document for the photo album that is stored in firebase firestore
    await deleteDoc(doc(db, "albums", albumId));
  };

  // edit the title of the photo album
  const edit = async (newTitle, albumId) => {
    // update the title of the photo album
    await updateDoc(doc(db, "albums", albumId), {
      name: newTitle,
    });
  };

  return { create, deletePhotoAlbum, edit };
};

export default usePhotoAlbum;
