import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Card from "react-bootstrap/Card";
import DeletePhotoAlbumModal from "../modals/DeletePhotoAlbumModal";
import EditPhotoAlbumTitleModal from "../modals/EditPhotoAlbumTitleModal";

// implement additional dayjs form
dayjs.extend(relativeTime);

const PhotoAlbumCard = ({ album, refetch, user }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <>
      <Card className="my-4">
        <div className="bg-dark" style={{ height: "180px" }}></div>

        <Card.Body>
          <Card.Title>{album?.name}</Card.Title>
          <p className="mb-0">
            Album created: {dayjs(album?.created_at?.seconds * 1000).fromNow()}
          </p>
          <p className="mb-0">
            <span className="fw-bold">Added by:</span> {user?.displayName}
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

export default PhotoAlbumCard;
