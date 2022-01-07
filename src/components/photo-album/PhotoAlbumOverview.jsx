import { useParams } from "react-router-dom";
import PhotoAlbumHeader from "./PhotoAlbumHeader";

const PhotoAlbumOverview = () => {
  const { albumId } = useParams();

  return (
    <>
      <PhotoAlbumHeader albumId={albumId} />

      <hr className="bg-light my-5" />
    </>
  );
};

export default PhotoAlbumOverview;
