import { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faShare } from "@fortawesome/free-solid-svg-icons";
import CreateReviewLinkModal from "../modals/CreateReviewLinkModal";
import DeletePhotoAlbumModal from "../modals/DeletePhotoAlbumModal";
import EditPhotoAlbumTitleModal from "../modals/EditPhotoAlbumTitleModal";

const PhotoAlbumHeaderOptions = ({ album, refetch }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showCreateReviewLinkModal, setShowCreateReviewLinkModal] =
    useState(false);

  return (
    <div>
      <ButtonGroup aria-label="photo-album-header-options">
        <Button onClick={() => setShowEditModal(true)} variant="dark">
          Edit album title
          <span className="ms-3" arial-label="icon-edit-photo-album-title">
            <FontAwesomeIcon icon={faEdit} size="1x" color="white" />
          </span>
        </Button>

        <Button onClick={() => setShowDeleteModal(true)} variant="dark">
          Delete album
          <span className="ms-3" arial-label="icon-delete-photo-album">
            <FontAwesomeIcon icon={faTrash} size="1x" color="white" />
          </span>
        </Button>

        <Button
          onClick={() => setShowCreateReviewLinkModal(true)}
          variant="dark"
        >
          Create review link
          <span className="ms-3" arial-label="icon-create-review-link">
            <FontAwesomeIcon icon={faShare} size="1x" color="white" />
          </span>
        </Button>
      </ButtonGroup>

      <CreateReviewLinkModal
        album={album}
        showModal={showCreateReviewLinkModal}
        setShowModal={setShowCreateReviewLinkModal}
      />

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
    </div>
  );
};

export default PhotoAlbumHeaderOptions;
