import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import useUploadPhoto from "../../hooks/useUploadImage";
import UploadProgressBar from "./UploadProgresBar";

const ImageDropzone = () => {
  const [file, setFile] = useState();
  const photo = useUploadPhoto(setFile);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 0) return;

    // store the file that was selected inside state variable: files
    setFile(acceptedFiles);

    photo.uploadImage(acceptedFiles[0]);
  });

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/jpg, image/jpeg, image/png, image/webp",
    maxFiles: 1,
    disabled: photo?.isMutating,
    onDrop,
  });

  // render file that was selected using the image dropzone
  const renderFile = !file?.length ? (
    <li>None selected</li>
  ) : (
    file?.map((image, index) => <li key={index}>{image.name}</li>)
  );

  return (
    <>
      <div
        className={`py-3
      ${!isDragActive && !photo?.isMutating && "bg-dark"}
      ${isDragAccept && "bg-success"}
      ${isDragReject && "bg-danger"}
      ${photo?.isMutating && "bg-dark opacity-50"}
      `}
        style={{
          border: "3px dashed white",
          cursor: `${photo?.isMutating ? "" : "pointer"}`,
        }}
        {...getRootProps()}
        id="image-dropzone"
      >
        <input {...getInputProps()} />

        <p className="text-light text-center mb-0">
          Drag and drop photo here or click to select photo <br />
          <em>Accepted files: .jpg, .jpeg, .png, .webp </em> <br />
        </p>
        <hr className="bg-light w-75 mx-auto" />
        <div id="dropzone-selected-files" className="text-white text-center">
          <p className="mb-0">Selected photo:</p>
          <ul className="list-unstyled">{renderFile}</ul>
        </div>
      </div>

      {photo.uploadProgress !== null && (
        <UploadProgressBar
          error={photo?.error}
          progress={photo?.uploadProgress}
        />
      )}
    </>
  );
};

export default ImageDropzone;
