import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post('', {
        name,
        email,
        password,
        phone
      });

      setMessage("Sign up successful! Redirecting to sign in...");
      setTimeout(() => navigate('/user/signIn'), 2000);
    } catch (error) {
      console.error(error);
      setMessage("Sign up failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Sign Up Page</h1>

      <input
        type="text"
        placeholder="Enter name"
        className="border p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      <input
        type="text"
        placeholder="Enter phone"
        className="border p-2 rounded"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button
        onClick={handleSignUp}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Sign Up
      </button>

      {message && <p>{message}</p>}
    </div>
  );
};

export default SignUp;
