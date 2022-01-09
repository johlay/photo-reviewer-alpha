import { db } from "../firebase";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

const useSelectPhotosAndCreatePhotoAlbum = () => {
  // create a new photo album "copy" based on the selected photos
  const selectAndCreate = async (album, selectedPhotos) => {
    console.log({ album, selectedPhotos });
    // create a new firebase firestore document for the new "empty" album
    const createdPhotoAlbumDocument = await addDoc(collection(db, "albums"), {
      name: `${album?.name}-Copy`,
      owner: album?.owner,
      created_at: serverTimestamp(),
      reviewed: false,
    });

    // find the document for every approved and reviewed photo(s) that is already stored in firebase firestore database
    selectedPhotos.forEach(async (photo) => {
      // update the document for the approved photo (keep) that is stored in firebase firestore document
      await updateDoc(doc(db, "photos", photo?.id), {
        albums: arrayUnion(createdPhotoAlbumDocument.id),
      });
    });
  };

  return { selectAndCreate };
};

export default useSelectPhotosAndCreatePhotoAlbum;
