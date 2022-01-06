import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, where, getDocs } from "firebase/firestore";

const useGetPhotoAlbums = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPhotoAlbums();
  }, []);

  // get all documents from "photo albums" collection where the owner matches the user's uid in firebase firestore
  const getPhotoAlbums = async (userUid) => {
    const snapshot = await getDocs(
      collection(db, "albums"),
      where("owner", "==", `${userUid}`)
    );

    const response = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    // store the new response data in the state variable: data  & set loading to
    setData(response);
    setLoading(false);
  };
  return { data, loading, getPhotoAlbums };
};

export default useGetPhotoAlbums;
