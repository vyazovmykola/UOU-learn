// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lesson from './pages/Lesson';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson/:lessonId" element={<Lesson />} />
      </Routes>
    </Router>
  );
}

export default App;
