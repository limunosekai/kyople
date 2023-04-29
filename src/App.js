import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import Letter from "./components/Letter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
