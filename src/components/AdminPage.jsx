import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminPage = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="w-1/4 bg-gray-800 text-white p-4">
                <h1 className="text-xl font-bold mb-8">Admin Panel</h1>
                <ul>
                    <li className="mb-4">
                        <Link to="/admin" className="hover:text-gray-300">Add College</Link>
                    </li>
                    <li>
                        <Link to="/admin/notifications" className="hover:text-gray-300">Add Notification</Link>
                    </li>
                </ul>
            </div>
            <div className="w-3/4 p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminPage;
