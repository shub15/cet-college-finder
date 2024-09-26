import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const API_URL = import.meta.env.VITE_API_URL || '';

function Dashboard() {
  const { detail } = useContext(AuthContext)
  const [colleges, setColleges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch applied colleges data from the backend
    const fetchColleges = async () => {
      try {
        const response = await fetch(`${API_URL}/api/user/my-college-list`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: detail }),
        });
        const data = await response.json();
        setColleges(data); // Store the colleges data in state
      } catch (err) {
        setError('Failed to load colleges');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  if (loading) {
    return <p className="text-center my-10">Loading...</p>;
  }

  //   if (error) {
  //     return <p className="text-center text-red-500 mt-10">{error}</p>;
  //   }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Preferred Colleges</h1>
        {colleges.length > 0 ? (
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">College Name</th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">Location</th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">Website</th>
              </tr>
            </thead>
            <tbody>
              {colleges.map((college) => (
                <tr key={college.id} className="border-b">
                  <td className="py-2 px-4">{college.name}</td>
                  <td className="py-2 px-4 text-yellow-600">{college.location}</td>
                  <td className="py-2 px-4 text-blue-600 hover:underline">
                    <a href={`https://${college.website}`}>
                      {college.website}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-700">You haven't applied to any colleges yet.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
