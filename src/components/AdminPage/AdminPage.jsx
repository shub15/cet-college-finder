import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminPage = () => {
    const [isExpanded, setIsExpanded] = useState(true);

    // Toggle the sidebar expansion
    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="flex min-h-screen bg-gray-100 overflow-hidden">
            {/* Sidebar */}
            <div className={`${isExpanded ? 'w-1/4' : 'w-16'} bg-gray-800 text-white p-4 transition-width duration-300`}>
                <button onClick={toggleSidebar} className="bg-blue-900 w-8 h-8 text-white focus:outline-none mb-4">
                    {isExpanded ? '<' : '>'}
                </button>
                {isExpanded && <h1 className="text-xl font-bold mb-8">Admin Panel</h1>}
                <ul>
                    <li className="mb-4">
                        <Link to="/admin" className="hover:text-gray-300 flex items-center">
                            {isExpanded && <span className="ml-2">Add College</span>}
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/admin/edit" className="hover:text-gray-300 flex items-center">
                            {isExpanded && <span className="ml-2">Edit College</span>}
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/notifications" className="hover:text-gray-300 flex items-center">
                            {isExpanded && <span className="ml-2">Add Notification</span>}
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Main content area */}
            <div className={`${isExpanded ? 'w-3/4' : 'w-full'} p-8 transition-width duration-300`}>
                <Outlet />
            </div>
        </div>
    );
};

export default AdminPage;
