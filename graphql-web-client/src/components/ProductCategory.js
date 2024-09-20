import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/query';
import ProductList from './ProductList';
import { useParams } from 'react-router-dom';
import '../styles/ProductCategory.css'; // 스타일 임포트

function ProductCategory() {
  const { productType } = useParams(); // URL에서 productType을 가져옵니다.
  const { loading, error, data } = useQuery(GET_PRODUCTS, {
    variables: { includeDetails: true },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log('123'+data.getProducts)

  // 클라이언트에서 productType으로 필터링
  const filteredProducts = data.getProducts.filter(
    product => product.productType === productType
  );

  return (
    <div className="product-category-container">
      <h1>{productType} Products</h1>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default ProductCategory;
