import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const Logout = () => {
  const { addDetail } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication flag
    localStorage.removeItem('auth');
    addDetail(null);
    navigate('/admin/login');
  };

  return (
    <button onClick={handleLogout} className="text-white bg-red-600 p-2 rounded">
      Logout
    </button>
  );
};

export default Logout;
