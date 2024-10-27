import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const LogoutPage = () => {
    const { addDetail } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear authentication flag
        localStorage.removeItem('auth');
        addDetail(null);
        navigate('/login');
    };

    return (
        <div className="flex flex-col justify-center items-center min-h-[70vh] bg-gray-50">
        <div className="bg-white px-10 py-16 md:px-36 md:py-24 text-center rounded-lg shadow-md">
          <p className="mb-8 text-2xl font-bold text-gray-900">
            Are you sure?
          </p>
          <div className="flex justify-center gap-6">
            <button
              onClick={handleLogout}
              className="text-white bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-medium shadow-sm"
            >
              Yes
            </button>
            <Link to="/">
              <button className="text-red-600 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-md font-medium shadow-sm border border-red-600">
                No
              </button>
            </Link>
          </div>
        </div>
      </div>
      

    );
};

export default LogoutPage;
