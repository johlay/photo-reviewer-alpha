import { useEffect, useState } from "react";
import CustomerReviewSummary from "./CustomerReviewSummary";

const CustomerReviewPhotoAlbum = ({ photos, photoAlbum }) => {
  const [reviewedPhotos, setReviewedPhotos] = useState([]);

  useEffect(() => {
    // re-map the array of photos to include attribute of: keep, discard
    const photosToBeReviewed = photos?.map((photo) => {
      return { ...photo, reviewed: false, keep: null, discard: null };
    });

    setReviewedPhotos(photosToBeReviewed);
  }, [photos]);

  return (
    <>
      <h3 className="text-center text-light py-3 fw-bold h2">
        {photoAlbum?.data?.name}
      </h3>
      <CustomerReviewSummary />
    </>
  );
};

export default CustomerReviewPhotoAlbum;
