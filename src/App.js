import "./App.css";
import Movie from "./Movie";
import Information from "./Information";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/info" element={<Information />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
