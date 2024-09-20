// src/components/Cart.js
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/query';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem'; // CartItem 컴포넌트 임포트
import '../styles/Cart.css'; // Cart 컴포넌트 스타일 임포트

function Cart() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId, includeUserDetail: false, includeCart: true, includeItems: true },
    skip: !userId,
  });

  useEffect(() => {
    if (!userId) {
      navigate('/');
    }
  }, [userId, navigate]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="cart-container">
      <h1>{data.getUser.name} 님의 장바구니</h1>
      <p className="cart-total">총 가격: ${data.getUser.cart.totalAmount.toFixed(2)}</p>
      <ul className="cart-items">
        {data.getUser.cart.items.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default Cart;
