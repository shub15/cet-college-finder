import React from 'react';
import Logout from './Logout';  // Import logout button
import AdminPage from './AdminPage';

const Admin = () => {
    return (
        <div>
            <div className='flex justify-between p-4 bg-gray-800 text-white'>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                {/* Logout Button */}
                <Logout />
            </div>
            {/* Your Admin functionality here */}
            <AdminPage />
        </div>
    );
};

export default Admin;
