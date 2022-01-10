import { useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Card from "react-bootstrap/Card";
import DeletePhotoAlbumModal from "../modals/DeletePhotoAlbumModal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import EditPhotoAlbumTitleModal from "../modals/EditPhotoAlbumTitleModal";
import useGetPhotos from "../../hooks/useGetPhotos";

// implement additional dayjs form
dayjs.extend(relativeTime);

const PhotoAlbumsCard = ({ album, refetch, user }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const photos = useGetPhotos(album?.id);

  // show an empty photo album thumbnail if there are no photos uploaded in the photo album, otherwise show the latest uploaded photo as thumbnail
  const photoAlbumThumbnail =
    photos?.data?.length === 0 ? (
      <div className="bg-dark rounded" style={{ height: "180px" }}></div>
    ) : (
      <Card.Img
        variant="top"
        src={photos?.data?.[0]?.photo_url}
        style={{ height: "180px" }}
      />
    );

  return (
    <>
      <Card className="my-4">
        {photoAlbumThumbnail}

        <Card.Body>
          <Card.Title>{album?.name}</Card.Title>
          <p className="mb-0">
            Created at: {dayjs(album?.created_at?.seconds * 1000).fromNow()}
          </p>
          <p className="mb-0">
            {album?.reviewed === true
              ? `Reviewed by: customer`
              : `Added by: ${user?.displayName}`}
          </p>
          <div className="d-flex justify-content-between my-3">
            <span
              onClick={() => setShowEditModal(true)}
              aria-label="edit-icon"
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faEdit} size="2x" color="black" />
            </span>

            <span
              onClick={() => setShowDeleteModal(true)}
              aria-label="delete-icon"
              style={{ cursor: "pointer" }}
            >
              <FontAwesomeIcon icon={faTrash} size="2x" color="black" />
            </span>
          </div>
          <hr />
          <div>
            <Link
              className="btn btn-dark d-grid"
              to={`/photo-albums/${album?.id}`}
            >
              Go to album
            </Link>
          </div>
        </Card.Body>
      </Card>

      <DeletePhotoAlbumModal
        album={album}
        refetch={refetch}
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
      />

      <EditPhotoAlbumTitleModal
        album={album}
        refetch={refetch}
        showModal={showEditModal}
        setShowModal={setShowEditModal}
      />
    </>
  );
};

export default PhotoAlbumsCard;
