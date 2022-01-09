import { useEffect, useState } from "react";
import CustomerReviewPhotoGrid from "./CustomerReviewPhotoGrid";
import CustomerReviewSummary from "./CustomerReviewSummary";

const CustomerReviewPhotoAlbum = ({ photos, photoAlbum }) => {
  const [reviewedPhotos, setReviewedPhotos] = useState([]);

  useEffect(() => {
    // re-map the array of photos to include attribute of: reviewed, keep, discard
    const photosToBeReviewed = photos?.map((photo) => {
      return { ...photo, reviewed: false, keep: null, discard: null };
    });

    setReviewedPhotos(photosToBeReviewed);
  }, [photos]);

  const onReviewPhoto = ({ type }, photo) => {
    if (type === "keep") {
      // update the photo's review status
      let updatedListReview = reviewedPhotos.map((item) => {
        if (item?.id === photo?.id) {
          return { ...photo, selected: true, keep: true, discard: false };
        } else {
          return item;
        }
      });

      return setReviewedPhotos(updatedListReview);
    }

    if (type === "discard") {
      // update the photo's review status
      let updatedListReview = reviewedPhotos.map((item) => {
        if (item?.id === photo?.id) {
          return { ...photo, selected: true, keep: false, discard: true };
        } else {
          return item;
        }
      });

      return setReviewedPhotos(updatedListReview);
    }
  };

  return (
    <>
      <h3 className="text-center text-light py-3 fw-bold h2">
        {photoAlbum?.data?.name}
      </h3>
      <CustomerReviewSummary
        photoAlbum={photoAlbum?.data}
        reviewedPhotos={reviewedPhotos}
      />
      <CustomerReviewPhotoGrid
        onReviewPhoto={onReviewPhoto}
        photos={reviewedPhotos}
      />
    </>
  );
};

export default CustomerReviewPhotoAlbum;
