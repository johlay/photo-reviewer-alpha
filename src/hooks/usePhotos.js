import { useState } from "react";
import { db, storage } from "../firebase";
import {
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
  arrayRemove,
} from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

const usePhotos = () => {
  const [isMutating, setIsMutating] = useState(false);

  const deletePhoto = async (photo, albumId) => {
    setIsMutating(true);

    // remove photo from photo's "albums" field
    await updateDoc(doc(db, "photos", photo?.id), {
      albums: arrayRemove(albumId),
    });

    // check if the photo is being used in other photo albums
    const documentSnapshot = await getDoc(doc(db, "photos", photo?.id)).then(
      (doc) => {
        return { id: doc.id, ...doc.data() };
      }
    );

    // if the photo is not used in any other photo albums, then delete the document from database and from storage
    if (documentSnapshot?.albums?.length === 0) {
      // delete photo from firebase storage
      await deleteObject(ref(storage, photo?.fullpath));

      // delete photo document from firebase firestore database
      await deleteDoc(doc(db, "photos", photo.id));

      return setIsMutating(false);
    }

    setIsMutating(false);
  };

  return { deletePhoto, isMutating };
};

export default usePhotos;
