import { db } from "../firebase";
import {
  arrayUnion,
  doc,
  collection,
  addDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

const useCreateCustomerReview = () => {
  // create a customer review
  const createCustomerReview = async (album, reviewedPhotosKeep) => {
    // create a new firebase firestore document for the new "empty" album
    const createdPhotoAlbumDocument = await addDoc(collection(db, "albums"), {
      name: `${album?.name}-${Date.now()}`,
      owner: album?.owner,
      created_at: serverTimestamp(),
      reviewed: true,
    });

    // find the document for every approved and reviewed photo(s) that is already stored in firebase firestore database
    reviewedPhotosKeep.forEach(async (photo) => {
      // update the document for the approved photo (keep) that is stored in firebase firestore document
      await updateDoc(doc(db, "photos", photo?.id), {
        albums: arrayUnion(createdPhotoAlbumDocument.id),
      });
    });
  };

  return { createCustomerReview };
};

export default useCreateCustomerReview;
