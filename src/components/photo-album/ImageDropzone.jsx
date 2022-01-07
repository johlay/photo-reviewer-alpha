import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const ImageDropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {});

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/jpg, image/jpeg, image/png, image/webp",
    maxFiles: 1,
    onDrop,
  });

  // images that were selected using the image dropzone
  const files =
    acceptedFiles.length === 0 ? (
      <li>None selected</li>
    ) : (
      acceptedFiles.map((image, index) => <li key={index}>{image.name}</li>)
    );

  return (
    <div
      className={`py-3
      ${!isDragActive && "bg-dark"}
      ${isDragAccept && "bg-success"}
      ${isDragReject && "bg-danger"}
      `}
      style={{ border: "3px dashed white", cursor: "pointer" }}
      {...getRootProps()}
      id="image-dropzone"
    >
      <input {...getInputProps()} />

      <p className="text-light text-center mb-0">
        Drag and drop photos here or click to select photos <br />
        <em>Accepted files: .jpg, .jpeg, .png, .webp </em> <br />
      </p>
      <hr className="bg-light w-75 mx-auto" />
      <div className="text-white text-center">
        <p className="mb-0">Selected photos:</p>
        <ul className="list-unstyled">{files}</ul>
      </div>
    </div>
  );
};

export default ImageDropzone;
