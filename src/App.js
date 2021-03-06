import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Navigation from "./components/partials/Navigation";
import RequireAuth from "./components/routeguard/RequireAuth";
import CustomerReviewFeedbackPage from "./pages/CustomerReviewFeedbackPage";
import CustomerReviewPage from "./pages/CustomerReviewPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import PhotoAlbumPage from "./pages/PhotoAlbumPage";
import PhotoAlbumsPage from "./pages/PhotoAlbumsPage";
import SimpleReactLightbox from "simple-react-lightbox";

function App() {
  // set the background color for the whole application
  document.body.className = "bg-secondary";

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <SimpleReactLightbox>
          <div className="App">
            <Navigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              <Route
                path="/photo-albums"
                element={
                  <RequireAuth>
                    <PhotoAlbumsPage />{" "}
                  </RequireAuth>
                }
              />

              <Route
                path="/photo-albums/:albumId"
                element={
                  <RequireAuth>
                    <PhotoAlbumPage />
                  </RequireAuth>
                }
              />

              <Route path="/review/:albumId" element={<CustomerReviewPage />} />

              <Route
                path="/review/feedback"
                element={<CustomerReviewFeedbackPage />}
              />

              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </SimpleReactLightbox>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
