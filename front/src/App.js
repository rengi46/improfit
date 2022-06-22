import {
  Routes,
  Route,
} from "react-router-dom";

import { HomePage } from "./components/pages/homePage";
import { ImagePgae } from "./components/pages/imagePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:id" element={<ImagePgae />} />
    </Routes>
  );
}

export default App;
