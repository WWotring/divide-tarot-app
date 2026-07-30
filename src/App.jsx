import { Routes, Route } from "react-router-dom";
import "./App.css";
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
        <Route path="/reading" element={<ReadingPage />} />
      </Routes>
    </div>
  );
}

export default App;
