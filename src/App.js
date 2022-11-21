import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import BooksList from './components/BooksList';
import WishList from './components/WishList';

function App() {
  const [username, setUsername] = useState("");
  const [wishList, setWishList] = useState([]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bookslist">BooksList</Link>
            </li>
            <li>
              <Link to="/wishlist">Wish List</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/bookslist" element={<BooksList username={username} setUsername={setUsername} wishList={wishList} setWishList={setWishList}/>}>
          </Route>
          <Route path="/wishlist" element={<WishList wishList={wishList} setWishList={setWishList}/>}>
          </Route>
          <Route path="/" element={<Home username={username} setUsername={setUsername}/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
