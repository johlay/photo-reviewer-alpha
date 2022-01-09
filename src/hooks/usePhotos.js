import { useState } from "react";
import { db, storage } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

const usePhotos = () => {
  const [isMutating, setIsMutating] = useState(false);

  const deletePhoto = async (photo) => {
    setIsMutating(true);

    // delete photo from firebase storage
    await deleteObject(ref(storage, photo?.fullpath));

    // delete photo document from firebase firestore database
    await deleteDoc(doc(db, "photos", photo.id));

    setIsMutating(false);
  };

  return { deletePhoto, isMutating };
};

export default usePhotos;
