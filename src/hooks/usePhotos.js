import { db, storage } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

const usePhotos = () => {
  const deletePhoto = async (photo) => {
    // delete photo from firebase storage
    await deleteObject(ref(storage, photo?.fullpath));

    // delete photo document from firebase firestore database
    await deleteDoc(doc(db, "photos", photo.id));
  };

  return { deletePhoto };
};

export default usePhotos;
