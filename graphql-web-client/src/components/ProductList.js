import React from 'react';
import '../styles/ProductList.css'; // 스타일 임포트

function ProductList({ products }) {
  if (!products || products.length === 0) {
    return <p>No products available</p>;
  }
  console.log(products)
  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id}>
            <p>
                {product.name} - ${product.price.toFixed(2)} {product.productType === 'ELECTRONICS' ? "🖥️" : "👗"} 
                {product.warrantyPeriod && (
                    <span> Warranty: {product.warrantyPeriod}</span>
                )}
                {product.size && (
                    <span> Size: {product.size}</span>
                )}
            </p>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;