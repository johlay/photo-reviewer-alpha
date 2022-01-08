import { useParams } from "react-router-dom";
import CustomerReviewPhotoAlbum from "./CustomerReviewPhotoAlbum";
import CustomerReviewWelcomeMessage from "./CustomerReviewWelcomeMessage";
import useGetPhotoAlbum from "../../hooks/useGetPhotoAlbum";
import useGetPhotos from "../../hooks/useGetPhotos";

const CustomerReviewOverview = () => {
  const { albumId } = useParams();

  const photoAlbum = useGetPhotoAlbum(albumId);
  const photos = useGetPhotos(albumId);

  return (
    <>
      <CustomerReviewWelcomeMessage photoAlbum={photoAlbum?.data} />
      <hr className="bg-light my-5" />
      <CustomerReviewPhotoAlbum photos={photos?.data} photoAlbum={photoAlbum} />
    </>
  );
};

export default CustomerReviewOverview;
