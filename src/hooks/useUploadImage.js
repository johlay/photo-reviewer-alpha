import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytesResumable } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const useUploadImage = (setFiles) => {
  const [error, setError] = useState(false);
  const [isMutating, setIsMutating] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);

  const uploadImage = (image) => {
    // reset to default state
    setError(false);
    setUploadProgress(null);

    // progress has now started
    setIsMutating(true);

    if (!image) return;

    const uuid = uuidv4();

    // gets the image's file extension
    const ext = image.name.substring(image.name.lastIndexOf(".") + 1);

    // create reference for the file that is going to be uploaded to firebase storage
    const storageRef = ref(storage, `images/${uuid}.${ext}`);

    // upload the image and its metadata
    const uploadTask = uploadBytesResumable(storageRef, image);

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
      () => {
        setFiles(null);
        setIsMutating(false);
      }
    );
  };

  return { error, isMutating, uploadImage, uploadProgress };
};

export default useUploadImage;
