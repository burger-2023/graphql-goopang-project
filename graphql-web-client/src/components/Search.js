import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH } from '../graphql/query';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Search.css'; // 스타일 임포트

function Search() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const { keyword } = useParams();
  const navigate = useNavigate();

  console.log(keyword);
  const { loading, error, data } = useQuery(SEARCH, {
    variables: { keyword, includeDetails: true },
  });

  const handleSearch = () => {
    if (searchKeyword.trim()) {
      navigate(`/search/${searchKeyword}`);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const users = data.search.filter(result => result.__typename === 'User');
  const electronics = data.search.filter(result => result.__typename === 'Electronics');
  const clothing = data.search.filter(result => result.__typename === 'Clothing');

  return (
    <div className="search-container">
      <header className="search-header">
        <input
          type="text"
          placeholder="Search..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
      </header>

      <div className="search-results">
        <h1>Search Results for "{keyword}"</h1>

        <h2>Users</h2>
        {users.length > 0 ? (
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.name} - {new Date(user.createdAt).toLocaleDateString()}
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found</p>
        )}

        <h2>Electronics</h2>
        {electronics.length > 0 ? (
          <ul>
            {electronics.map(product => (
              <li key={product.name}>
                {product.name} - ${product.price.toFixed(2)} ({product.productType}), Warranty: {product.warrantyPeriod}
              </li>
            ))}
          </ul>
        ) : (
          <p>No electronics found</p>
        )}

        <h2>Clothing</h2>
        {clothing.length > 0 ? (
          <ul>
            {clothing.map(product => (
              <li key={product.name}>
                {product.name} - ${product.price.toFixed(2)} ({product.productType}), Size: {product.size}
              </li>
            ))}
          </ul>
        ) : (
          <p>No clothing found</p>
        )}
      </div>
    </div>
  );
}

export default Search;
