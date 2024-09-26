import React, { useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || '';

const AdminLogin = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/user/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const authenticated = await response.json(); // Expecting true or false from backend

      if (authenticated) {
        // Store authentication flag in localStorage or sessionStorage
        localStorage.setItem('auth', 'true');
        navigate('/admin');  // Redirect to admin page after successful login
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form className="bg-white p-8 shadow-lg rounded-lg" onSubmit={handleLogin}>
        <h1 className="text-2xl font-bold mb-6">Login</h1>

        {error && <p className="text-red-600 mb-4">{error}</p>}

        <input
          id='email'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 p-2 w-full border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
