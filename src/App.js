import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Homepage from './pages/Homepage'
import NewsPost from './pages/NewsPost/NewsPost'
import News from './pages/News/News';

function App() {
  const [news, setNews] = useState([]);

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Homepage /> } />
        <Route path='/news' element={ <News /> } />
        <Route path='/news/:id' element={ <NewsPost /> } />
      </Routes>
    </Router>
  );
}

export default App;
