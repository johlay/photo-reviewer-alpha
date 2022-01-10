import useAuthContext from "../../hooks/useAuthContext";
import useGetPhotoAlbums from "../../hooks/useGetPhotoAlbums";
import CreatePhotoAlbum from "./CreatePhotoAlbum";
import PhotoAlbumsGrid from "./PhotoAlbumsGrid";

const ListPhotoAlbums = () => {
  const { currentUser } = useAuthContext();
  const myPhotoAlbums = useGetPhotoAlbums(currentUser?.uid);

  const userPhotoAlbums = myPhotoAlbums?.data?.filter(
    (item) => item?.reviewed === false
  );
  const customerReviews = myPhotoAlbums?.data?.filter(
    (item) => item?.reviewed === true
  );

  return (
    <>
      <h2 className="text-center text-light py-3 fw-bold">My Photo Albums</h2>
      <CreatePhotoAlbum
        refetch={myPhotoAlbums.refetch}
        userUid={currentUser?.uid}
      />

      {userPhotoAlbums?.length === 0 && (
        <p className="text-light text-center h6 my-3">
          There are currently no photo albums added by you
        </p>
      )}

      <PhotoAlbumsGrid
        data={userPhotoAlbums}
        refetch={myPhotoAlbums.refetch}
        user={currentUser}
      />

      <hr className="bg-light my-5" />

      <h2 className="text-center text-light py-3 fw-bold">
        Photo Albums reviewed by customers
      </h2>

      {customerReviews?.length === 0 && (
        <p className="text-light text-center h6">
          There are currently no reviews by customers
        </p>
      )}
      <PhotoAlbumsGrid
        data={customerReviews}
        refetch={myPhotoAlbums.refetch}
        user={currentUser}
      />
    </>
  );
};

export default ListPhotoAlbums;
