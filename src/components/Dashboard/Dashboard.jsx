import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext';
import DashboardUserDetails from './DashboardUserDetails';
import html2pdf from 'html2pdf.js';

const API_URL = import.meta.env.VITE_API_URL || '';

function Dashboard() {
  const { detail } = useContext(AuthContext);
  const [colleges, setColleges] = useState([]);
  const [filteredColleges, setFilteredColleges] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
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
        setColleges(data);
        setFilteredColleges(data);
      } catch (err) {
        setError('Failed to load colleges');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchColleges();
  }, []);

  // Filter colleges based on search term and location
  useEffect(() => {
    const filtered = colleges.filter((college) =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedLocation ? college.location === selectedLocation : true)
    );
    setFilteredColleges(filtered);
  }, [searchTerm, selectedLocation, colleges]);

  const handleDownloadPdf = () => {
    const element = document.getElementById('dashboard-content');
    html2pdf()
      .set({
        margin: 1,
        filename: 'Preferred_Colleges.pdf',
        html2canvas: { scale: 2 },
        jsPDF: { orientation: 'portrait' },
      })
      .from(element)
      .save();
  };

  if (loading) {
    return <p className="text-center my-10">Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <DashboardUserDetails />
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-center">Your Preferred Colleges</h1>
          <button
            onClick={handleDownloadPdf}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Download as PDF
          </button>
        </div>

        {/* Search and Filter Options */}
        <div className="flex space-x-4 mb-6">
          <input
            type="text"
            placeholder="Search by college name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-1/2 px-3 py-2 border rounded"
          />
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-1/2 px-3 py-2 border rounded"
          >
            <option value="">All Locations</option>
            {[...new Set(colleges.map((college) => college.location))].map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div id="dashboard-content">
          {filteredColleges.length > 0 ? (
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">College Name</th>
                  <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">Location</th>
                  <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">Website</th>
                </tr>
              </thead>
              <tbody>
                {filteredColleges.map((college) => (
                  <tr key={college.id} className="border-b">
                    <td className="py-2 px-4">{college.name}</td>
                    <td className="py-2 px-4 text-yellow-600">{college.location}</td>
                    <td className="py-2 px-4 text-blue-600 hover:underline">
                      <a href={`https://${college.website}`} target="_blank" rel="noopener noreferrer">
                        {college.website}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-700">No colleges found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
