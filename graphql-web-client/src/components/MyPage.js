import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/query';
import { useNavigate } from 'react-router-dom';
import '../styles/MyPage.css'; // CSS 파일 임포트

function MyPage() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId, includeUserDetail: true, includeCart: true, includeItems: false },
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
    <div className="mypage-container">
      <header className="mypage-header">
        <div>
          <h1>{data.getUser.name}'s Page</h1>
          <p>Email: {data.getUser.email}</p>
          <p>Total Cart Amount: ${data.getUser.cart.totalAmount.toFixed(2)}</p>
        </div>
        <div>
          <button onClick={() => navigate('/cart')}>장바구니</button>
          <button onClick={() => navigate('/user-detail')}>회원 상세</button>
        </div>
      </header>
    </div>
  );
}

export default MyPage;
