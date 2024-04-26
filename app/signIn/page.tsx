"use client"
import React, { useState } from 'react';
import axios from 'axios';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }
    try {
      const response = await axios.post('http://localhost:4000/admin/login', {
        email,
        password,
      });

      const { access_token } = response.data;

      if (access_token) {
        // localStorage.setItem('accessToken', access_token);
        window.location.href = '/dashboard'; 
      } else {
        setError('Login failed');
      }
    } catch (error) {
      setError('Invalid User');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-semibold mb-6">Sign In</h1>
      <div className="w-64">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSignIn}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Sign In
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
}
