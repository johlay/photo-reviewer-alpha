import Container from "react-bootstrap/Container";
import ListPhotoAlbums from "../components/photo-albums/ListPhotoAlbums";

const PhotoAlbumsPage = () => {
  return (
    <Container className="my-5">
      <ListPhotoAlbums />
    </Container>
  );
};

export default PhotoAlbumsPage;
