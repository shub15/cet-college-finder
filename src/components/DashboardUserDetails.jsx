import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

const API_URL = import.meta.env.VITE_API_URL || '';

const DashboardUserDetails = () => {
    const { detail } = useContext(AuthContext)
    const [user, setUser] = useState();

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

    if (!user) return <div>Loading...</div>;

    return (
        <div className="bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                {/* Top Section: User Info */}
                <div className="flex items-center space-x-8 mb-8">
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
            </div>
        </div>
    );
};

export default DashboardUserDetails;
