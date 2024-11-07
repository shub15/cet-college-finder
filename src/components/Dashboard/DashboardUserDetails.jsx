import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../AuthContext';

const API_URL = import.meta.env.VITE_API_URL || '';

const DashboardUserDetails = () => {
    const { detail } = useContext(AuthContext)
    const [user, setUser] = useState();
    const [isDeleting, setIsDeleting] = useState(false);

    // Fetch single user data from backend
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`${API_URL}/api/user/userbyemail`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email: detail }),
                });
                const data = await response.json();
                console.log(data)
                setUser(data); // Store the colleges data in state
            } catch (err) {
                console.error('Failed to load user', err);
            }
        }

        fetchUser();
    }, [detail]);

    console.log(user)

    // // Fetch single user data from backend
    // useEffect(() => {
    //     fetch(`${import.meta.env.REACT_APP_API_URL}/api/user`) // Assuming there's a single user endpoint
    //         .then((response) => response.json())
    //         .then((data) => setUser(data))
    //         .catch((error) => console.error('Error fetching data:', error));
    // }, []);

    const handleDeleteUser = async () => {
        if (window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
            try {
                setIsDeleting(true);
                const response = await fetch(`${API_URL}/api/user/delete/${user.id}`, {
                    method: 'DELETE',
                });

                if (response.ok) {
                    alert('User deleted successfully');
                    setUser(null); // Clear user data after deletion
                } else {
                    alert('Failed to delete user');
                }
            } catch (error) {
                console.error('Error deleting user:', error);
                alert('An error occurred while deleting the user');
            } finally {
                setIsDeleting(false);
            }
        }
    };

    if (isDeleting) return <div className='m-4'>User does not exist.</div>;
    if (!user) return <div className='m-4'>Loading...</div>;

    return (
        <div className="bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
            {/* Top Section: User Info */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-8">
                    {/* Profile Picture Placeholder */}
                    <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-gray-700">{user.name.charAt(0)}</span>
                    </div>

                    {/* User Information */}
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                        <div className="flex space-x-4 mt-2">
                            <p className="text-gray-600 font-medium">
                                <span className="hover:text-blue-600 cursor-pointer relative group">
                                    Location: {user.location}
                                </span>
                            </p>
                            <p className="text-gray-600 font-medium">
                                <span className="hover:text-blue-600 cursor-pointer relative group">
                                    Category: {user.category}
                                </span>
                            </p>
                            <p className="text-gray-600 font-medium">
                                <span className="hover:text-blue-600 cursor-pointer relative group">
                                    Percentile: {user.percentile}%
                                </span>
                            </p>
                        </div>

                        {/* Email hover tooltip */}
                        <p className="text-sm text-gray-500 mt-2">
                            <span className="hover:text-blue-600 cursor-pointer relative group">
                                Hover for email
                                <span className="absolute left-0 top-full mt-1 bg-gray-700 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {user.email}
                                </span>
                            </span>
                        </p>
                    </div>
                </div>

                {/* Delete User Button positioned to the right */}
                <button
                    onClick={handleDeleteUser}
                    disabled={isDeleting}
                    className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 disabled:bg-red-300"
                >
                    {isDeleting ? 'Deleting...' : 'Delete User'}
                </button>
            </div>
        </div>
    </div>
    );
};

export default DashboardUserDetails;
