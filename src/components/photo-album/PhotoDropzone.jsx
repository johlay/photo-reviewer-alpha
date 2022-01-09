import { useCallback, useState } from "react";
import { useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import useUploadPhotos from "../../hooks/useUploadPhotos";
import UploadProgressBar from "./UploadProgressBar";

const PhotoDropzone = ({ refetchPhotos }) => {
  const [files, setFiles] = useState();
  const photos = useUploadPhotos();

  const { albumId } = useParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length === 0) return;

    // store the file that was selected inside state variable: file
    setFiles(acceptedFiles);

    photos.uploadPhoto({
      albumId,
      acceptedFiles,
      refetchPhotos,
      setFiles,
      dropzone: true,
    });
  });

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/jpg, image/jpeg, image/png, image/webp",
    maxFiles: 5,
    disabled: photos?.isMutating,
    onDrop,
  });

  // render files that was selected using the photo dropzone
  const renderFiles = !files?.length ? (
    <li>None selected</li>
  ) : (
    files?.map((image, index) => <li key={index}>{image.name}</li>)
  );

  return (
    <>
      <div
        className={`py-3
      ${!isDragActive && !photos?.isMutating && "bg-dark"}
      ${isDragAccept && "bg-success"}
      ${isDragReject && "bg-danger"}
      ${photos?.isMutating && "bg-dark opacity-50"}
      `}
        style={{
          border: "3px dashed white",
          cursor: `${photos?.isMutating ? "" : "pointer"}`,
        }}
        {...getRootProps()}
        id="image-dropzone"
      >
        <input {...getInputProps()} />

        <p className="text-light text-center mb-0">
          Drag and drop photos here or click to select photos <br />
          <em>Accepted files: .jpg, .jpeg, .png, .webp </em> <br />
          <em>Maximum files per upload: 5</em>
        </p>
        <hr className="bg-light w-75 mx-auto" />
        <div id="dropzone-selected-files" className="text-white text-center">
          <p className="mb-0">Selected photos:</p>
          <ul className="list-unstyled">{renderFiles}</ul>
        </div>
      </div>

      {photos.uploadProgress !== null && (
        <UploadProgressBar
          error={photos?.error}
          progress={photos?.uploadProgress}
        />
      )}
    </>
  );
};

export default PhotoDropzone;
