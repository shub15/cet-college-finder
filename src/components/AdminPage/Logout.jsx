import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication flag
    localStorage.removeItem('auth');
    navigate('/admin');
  };

  return (
    <button onClick={handleLogout} className="text-white bg-red-600 p-2 rounded">
      Logout
    </button>
  );
};

export default Logout;
