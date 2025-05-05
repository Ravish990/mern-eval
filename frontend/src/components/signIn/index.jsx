import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const User = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setMessage('Already signed in. Redirecting...');
      setTimeout(() => navigate('/'), 2000); 
    }
  }, [navigate]);

  const signIn = async () => {
    try {
      const response = await axios.post('https://mern-eval.onrender.com/user/signIn', {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem('authToken', token);
      setMessage("Signed in successfully!");
      console.log("Token received:", token);
      navigate('/'); 
    } catch (error) {
      console.error(error);
      setMessage("Sign in failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">User Sign In</h1>

      <input
        type="email"
        placeholder="Enter email"
        className="border p-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Enter password"
        className="border p-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={signIn}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign In
      </button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default User;
