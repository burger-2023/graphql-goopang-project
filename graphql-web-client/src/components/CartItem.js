// src/components/CartItem.js
import React from 'react';
import '../styles/CartItem.css'; // 스타일을 위해 CSS 파일을 임포트

function CartItem({ item }) {
  return (
    <li className="cart-item">
      <p className="cart-item__name">상품명: {item.product.name}</p>
      <p className="cart-item__price">가격: ${item.product.price.toFixed(2)}</p>
      <p className="cart-item__category">카테고리: {item.product.productType}</p>
      <p className="cart-item__quantity">수량: {item.quantity}</p>
      <p className="cart-item__total">항목별 총 가격: ${(item.product.price * item.quantity).toFixed(2)}</p>
    </li>
  );
}

export default CartItem;
