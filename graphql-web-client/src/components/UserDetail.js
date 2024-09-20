import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/query';
import { useNavigate } from 'react-router-dom';
import '../styles/UserDetail.css'; // 스타일 임포트

function UserDetail() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { userId, includeUserDetail: true, includeCart: false, includeItems: false },
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
    <div className="user-detail-container">
      <h1>User Details</h1>
      <p>Name: {data.getUser.name}</p>
      <p>Email: {data.getUser.email}</p>
      <p>Joined: {new Date(data.getUser.createdAt).toLocaleDateString()}</p>
    </div>
  );
}

export default UserDetail;
