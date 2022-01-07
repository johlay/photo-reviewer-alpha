import { useQuery } from "react-query";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const useGetPhotoAlbum = (albumId) => {
  // function that gets specific photo album (firebase firestore document) that matches the albumId
  const getPhotoAlbum = async (id) => {
    const documentSnapshot = await getDoc(doc(db, "albums", id));

    if (documentSnapshot.exists()) {
      return {
        id: albumId,
        ...documentSnapshot.data(),
      };
    } else {
      return null;
    }
  };

  const getPhotoAlbumQuery = useQuery(["get-photo-album", albumId], () =>
    getPhotoAlbum(albumId)
  );

  return getPhotoAlbumQuery;
};

export default useGetPhotoAlbum;
