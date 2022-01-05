import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/partials/Navigation";
import HomePage from "./pages/HomePage";

function App() {
  // set the background color for the whole application
  document.body.className = "bg-secondary";

  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
