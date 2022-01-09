import { useState } from "react";
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import useAuthContext from "./useAuthContext";

const useUploadPhoto = () => {
  const [error, setError] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);

  const { currentUser } = useAuthContext();

  const uploadPhoto = (albumId, photos, refetchPhotos, setFiles) => {
    // reset to default state
    setError(false);
    setUploadProgress(null);

    // progress has now started
    setIsMutating(true);

    if (!photos) return;

    photos.forEach((photo) => {
      const uuid = uuidv4();

      // gets the photo's file extension
      const ext = photo.name.substring(photo.name.lastIndexOf(".") + 1);

      // construct a reference for the file/photo that is going to be uploaded to firebase storage
      const storageRef = ref(
        storage,
        `photos/${currentUser?.uid}/${uuid}.${ext}`
      );

      // upload the image and its metadata
      const uploadTask = uploadBytesResumable(storageRef, photo);

      // attach an observer during the uploading process
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // save uplod task progress in variable, converting it to percentages
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          // store upload progress inside state variable: uploadProgress
          setUploadProgress(progress);
        },
        (error) => {
          setFiles(null);
          setIsMutating(false);
          setError("Image uploading failed due to error: ", error.message);
          return;
        },
        async () => {
          // the uploaded file's download URL
          const url = await getDownloadURL(storageRef);

          // create and store the new document in firebase firestore database for the uploaded file/photo
          await addDoc(collection(db, "photos"), {
            name: photo.name,
            fullpath: storageRef.fullPath,
            size: photo.size,
            type: photo.type,
            ext,
            photo_url: url,
            uploaded_at: serverTimestamp(),
            album_id: albumId,
            uuid,
          });

          setFiles(null);
          setIsMutating(false);
          setUploadProgress(null);

          // if uploading process was successful, refetch photos
          refetchPhotos();
        }
      );
    });
  };

  return { error, isMutating, uploadPhoto, uploadProgress };
};

export default useUploadPhoto;
