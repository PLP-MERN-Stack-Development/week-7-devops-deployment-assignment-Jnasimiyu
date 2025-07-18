import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
// import other pages

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* other routes */}
      </Routes>
    </Router>
  );
}

export default App;
