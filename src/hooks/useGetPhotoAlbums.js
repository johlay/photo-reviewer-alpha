import { db } from "../firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useQuery } from "react-query";

const useGetPhotoAlbums = (userUid) => {
  // function that gets all documents from "photo albums" collection where the owner matches the user's uid in firebase firestore
  const getPhotoAlbums = async (uid) => {
    const snapshot = await getDocs(
      query(
        collection(db, "albums"),
        where("owner", "==", uid),
        orderBy("created_at", "desc")
      )
    );

    const response = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return response;
  };

  const getNewPhotoAlbumsQuery = useQuery(
    ["get-photo-albums"],
    () => getPhotoAlbums(userUid),
    { keepPreviousData: true }
  );

  return getNewPhotoAlbumsQuery;
};

export default useGetPhotoAlbums;
