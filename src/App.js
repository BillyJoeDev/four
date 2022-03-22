import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage'


function App() {
  return (
    <Router>
      <Homepage />
      <Routes>
        <Route path='/' exact />
      </Routes>
    </Router>
  );
}

export default App;
