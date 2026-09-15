import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ReadingPage from "./pages/ReadingPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tarot From The Divide</h1>
      </header>
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reading" element={<ReadingPage />} />
      </Routes>
    </div>
  );
}

export default App;
