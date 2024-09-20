import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';  // CSS 파일 경로 맞추기


function Login() {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('userId', userId);
    navigate('/home');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
