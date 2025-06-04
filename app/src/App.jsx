import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Lesson1 from "./pages/Lesson1";
import Lesson2 from "./pages/Lesson2";

function App() {
  return (
    <Router>
      <div className="w-full max-w-full flex flex-col items-center justify-center pt-6 pb-10 pl-10 pr-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lesson/1" element={<Lesson1 />} />
          <Route path="/lesson/2" element={<Lesson2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
