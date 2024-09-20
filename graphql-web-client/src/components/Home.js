import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_AND_PRODUCTS } from '../graphql/query';
import { useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import '../styles/Home.css'; // 스타일 임포트

function Home() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const { loading, error, data } = useQuery(GET_USER_AND_PRODUCTS, {
    variables: { userId },
    skip: !userId, // userId가 없으면 쿼리 실행하지 않음
  });


  console.log(data);
  useEffect(() => {
    if (!userId) {
      navigate('/');
    }
  }, [userId, navigate]);

  const handleSearch = () => {
    if (searchKeyword.trim()) {
      navigate(`/search/${searchKeyword}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="home-container">
      <header className="home-header">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <button onClick={handleSearch}>검색</button>
        </div>
        <div onClick={() => navigate('/my')}>
          <p>{data.getUser.name}</p>
        </div>
      </header>

      <nav className="home-nav">
        {[...new Set(data.getProducts.map(product => product.productType))].map(type => (
          <button key={type} onClick={() => navigate(`/category/${type}`)}>
            {type}
          </button>
        ))}
      </nav>

      <main className="home-main">
        <ProductList products={data.getProducts} />
      </main>
    </div>
  );
}

export default Home;
