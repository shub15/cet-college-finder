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
        <div className='flex flex-col justify-center items-center min-h-[70vh] bg-gray-100'>
            <div className='bg-white px-36 py-24 text-center rounded-lg shadow-md'>
                <p className='mb-6 text-2xl font-bold'>Are you sure?</p>
                <div>
                    <button onClick={handleLogout} className="text-white bg-red-600 px-6 py-2 rounded">
                        Yes
                    </button>
                    <Link to="/">
                        <button className="text-white bg-gray-600  px-6 py-2  ml-6 rounded">
                            No
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LogoutPage;
