import Memo from "./components/Memo";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PostMemo from "./components/PostMemo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Memo />} />
          <Route path="/post" element={<PostMemo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
