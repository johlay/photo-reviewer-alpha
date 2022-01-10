import { db } from "../firebase";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useQuery } from "react-query";

const useGetPhotos = (albumId) => {
  // function that gets all the documents from "photos" collection where the owner matches user's uid in firebase firestore database
  const getPhotos = async (uid) => {
    const snapshot = await getDocs(
      query(
        collection(db, "photos"),
        where("albums", "array-contains", uid),
        orderBy("uploaded_at", "desc")
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

  const photosQuery = useQuery([`get-photos-${albumId}`], () =>
    getPhotos(albumId)
  );

  return photosQuery;
};

export default useGetPhotos;
