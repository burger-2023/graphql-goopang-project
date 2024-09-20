import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import MyPage from './components/MyPage';
import Cart from './components/Cart';
import UserDetail from './components/UserDetail';
import ProductCategory from './components/ProductCategory';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user-detail" element={<UserDetail />} />
        <Route path="/category/:productType" element={<ProductCategory />} />
        <Route path="/search/:keyword" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
