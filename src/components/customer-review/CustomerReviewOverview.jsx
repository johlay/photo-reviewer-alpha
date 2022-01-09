import { useParams } from "react-router-dom";
import CustomerReviewPhotoAlbum from "./CustomerReviewPhotoAlbum";
import CustomerReviewWelcomeMessage from "./CustomerReviewWelcomeMessage";
import useGetPhotoAlbum from "../../hooks/useGetPhotoAlbum";
import useGetPhotos from "../../hooks/useGetPhotos";
import NotFoundPage from "../../pages/NotFoundPage";

const CustomerReviewOverview = () => {
  const { albumId } = useParams();

  const photoAlbum = useGetPhotoAlbum(albumId);
  const photos = useGetPhotos(albumId);

  if (!photoAlbum?.data && photoAlbum.isFetched) {
    return <NotFoundPage />;
  }

  if (!photos?.data && photos.isFetched) {
    return <NotFoundPage />;
  }

  // render components only if data exists for: "photoAlbum" and "photos"
  return photoAlbum?.data && photos?.data ? (
    <>
      <CustomerReviewWelcomeMessage photoAlbum={photoAlbum?.data} />
      <hr className="bg-light my-5" />
      <CustomerReviewPhotoAlbum photos={photos?.data} photoAlbum={photoAlbum} />
    </>
  ) : null;
};

export default CustomerReviewOverview;
