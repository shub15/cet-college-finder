import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || '';

function UpdateCollege() {
  const navigate = useNavigate();
  const [colleges, setColleges] = useState([]);
  const [success, setSuccess] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const handleCollegeDetails = (college) => {
    console.log(college)
    navigate('/admin/editform', { state: { college } });
  };

  const handleCollegeDelete = async (id) => {
    const isConfirmed = window.confirm('Are you sure you want to delete this college?');
    if (!isConfirmed) return; // Cancel delete if user declines

    try {
      await axios.delete(`${API_URL}/api/colleges/${id}`);
      setColleges((prevColleges) => prevColleges.filter((college) => college.id !== id));
      // setSuccess(true);  // Show success message on deletion
      setDeleteConfirm(true);
      setTimeout(() => {
        // setSuccess(false);
        setDeleteConfirm(false);
      }, 3000);  // Hide message after 3 seconds
    } catch (error) {
      console.error('Error deleting college:', error);
    }
  };

  useEffect(() => {
    axios.get(`${API_URL}/api/colleges`)
      .then(response => {
        setColleges(response.data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  const categoryName = ["ID", "Open Rank", "Open Percentile", "TFWS Rank", "TFWS Percentile", "OBC Rank", "OBC Percentile", "MI Rank", "MI Percentile", "EWS Rank", "EWS Percentile"];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Edit College</h1>

      {/* Success Message */}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">College Edited successfully!</span>
        </div>
      )}

      {deleteConfirm && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">College has been permanently removed from the list.</span>
        </div>
      )}

      {/* Fetch College */}
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Saved Colleges</h1>
        {colleges.length > 0 ? (
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">College Name</th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">Location</th>
                <th className="py-2 px-4 bg-gray-200 text-left text-gray-700 font-semibold">Website</th>
                <th className="py-2 px-4 bg-gray-200 text-gray-700 font-semibold" colSpan="2">Action</th>
              </tr>
            </thead>
            <tbody>
              {colleges.map((college) => (
                <tr key={college.id} className="border-b">
                  <td className="py-2 px-4">{college.name}</td>
                  <td className="py-2 px-4 text-yellow-600">{college.location}</td>
                  <td className="py-2 px-4 text-blue-600 hover:underline">
                    <a href={`https://${college.website}`} target="_blank" rel="noopener noreferrer">
                      {college.website}
                    </a>
                  </td>
                  <td className="py-2 px-4 text-yellow-600">
                    <button onClick={() => handleCollegeDetails(college)}>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="mr-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg" onClick={() => handleCollegeDelete(college.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-700">You haven't added colleges yet.</p>
        )}
      </div>

    </div>
  );
}

export default UpdateCollege;
