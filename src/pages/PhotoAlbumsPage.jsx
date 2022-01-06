import Container from "react-bootstrap/Container";
import ListMyPhotoAlbums from "../components/photo-albums/ListMyPhotoAlbums";

const PhotoAlbumsPage = () => {
  return (
    <Container className="my-5">
      <ListMyPhotoAlbums />
    </Container>
  );
};

export default PhotoAlbumsPage;
