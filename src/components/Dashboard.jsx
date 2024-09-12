import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [colleges, setColleges] = useState([
    { id: 1, name: 'Stanford University', location: 'California, USA', status: 'Pending' },
    { id: 2, name: 'Massachusetts Institute of Technology', location: 'Massachusetts, USA', status: 'Accepted' },
    { id: 3, name: 'Harvard University', location: 'Massachusetts, USA', status: 'Rejected' },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const appliedColleges = [
    { id: 1, name: 'Stanford University', location: 'California, USA', status: 'Pending' },
    { id: 2, name: 'Massachusetts Institute of Technology', location: 'Massachusetts, USA', status: 'Accepted' },
    { id: 3, name: 'Harvard University', location: 'Massachusetts, USA', status: 'Rejected' },
  ];
  useEffect(() => {
    // Fetch applied colleges data from the backend
    const fetchColleges = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/colleges');
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
    return <p className="text-center mt-10">Loading...</p>;
  }

//   if (error) {
//     return <p className="text-center text-red-500 mt-10">{error}</p>;
//   }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Applied Colleges</h1>
        {colleges.length > 0 ? (
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">College Name</th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">Location</th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">Application Status</th>
              </tr>
            </thead>
            <tbody>
              {colleges.map((college) => (
                <tr key={college.id} className="border-b">
                  <td className="py-2 px-4">{college.name}</td>
                  <td className="py-2 px-4">{college.location}</td>
                  <td className={`py-2 px-4 ${college.status === 'Accepted' ? 'text-green-600' : college.status === 'Rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
                    {college.status}
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
