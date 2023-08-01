import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticleApp from './Components/articles/ArticleApp';
import CategorieApp from './Components/categories/CategorieApp';
import ScategorieApp from './Components/scategories/ScategorieApp';
import Navscroll from './Components/Navscroll';

function App() {
  return (
    <Router>
      <Navscroll />
      <Routes>
        <Route path="/articles" element={<ArticleApp />}></Route>
        <Route path="/categories" element={<CategorieApp />}></Route>
        <Route path="/scategories" element={<ScategorieApp />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
