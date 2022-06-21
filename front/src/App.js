import {
  Routes,
  Route,
} from "react-router-dom";

import { ImageGrid } from "./components/grid";
import { ImagePgae } from "./components/imagePgae";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ImageGrid />} />
      <Route path="/:id" element={<ImagePgae />} />
    </Routes>
  );
}

export default App;
