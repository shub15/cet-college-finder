import React, { useContext, useState } from 'react';
import CollegeCard from './CollegeCard';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext';

const API_URL = import.meta.env.VITE_API_URL || '';

function CollegeList({ colleges }) {
  const { detail } = useContext(AuthContext)
  const navigate = useNavigate();
  // if (colleges.length === 0) {
  //   return <p className="text-center">No colleges found.</p>;
  // }

  const [selectedColleges, setSelectedColleges] = useState([]); // To store selected colleges
  const [successMessage, setSuccessMessage] = useState(''); // For displaying success messages

  // Handle selecting a college
  const handleSelectCollege = (college) => {
    if (selectedColleges.some(item => item.id === college.id)) {
      // Remove the college if it's already selected
      setSelectedColleges(selectedColleges.filter(item => item.id !== college.id));
    } else {
      // Add the selected college
      setSelectedColleges([...selectedColleges, college]);
    }
  };

  // Handle saving the custom list of colleges
  const handleSaveList = () => {
    const token = localStorage.getItem('auth'); // Get user token from local storage
    console.log(detail)
    console.log(token)

    if (!token) {
      alert("Please sign in to save your custom list.");
      navigate("/login");
      return;
    }

    // Extract only the college IDs from the selectedColleges array
    const collegeIds = selectedColleges.map(college => college.id);

    axios.post(`${API_URL}/api/user/college-list`,
      {
        collegeIds: collegeIds,
        email: detail
      }, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        console.log('Custom list saved successfully', response.data);
        setSuccessMessage(response.data); // Set the success message
      })
      .catch(error => {
        console.error('Error saving custom list:', error);
        alert("Please sign in to save your custom list.");
        navigate("/login");
      });
  };
  // Handle navigation to CollegeDetails with state
  const handleCollegeDetails = (college) => {
    navigate('/collegedetails', { state: { college } });
  };

  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    //   {colleges.map(college => (
    //     <CollegeCard key={college.id} college={college} />
    //   ))}
    // </div>
    <div className="container mx-auto">
      <div className='flex justify-between'>
        <h1 className="text-2xl font-bold mb-4">Select Your Favorite Colleges</h1>
        <button
          onClick={handleSaveList}
          className=" bg-rose-800 text-white px-6 py-3 mb-4 rounded"
        >
          Save Custom List
        </button>
      </div>

      {successMessage && (
        <div className="bg-green-800 text-white p-4 rounded mb-4">
          {successMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.map(college => (
          <div
            key={college.id}
            className={`border p-4 rounded ${selectedColleges.some(item => item.id === college.id) ? 'bg-blue-100' : 'bg-white'}`}
          >
            <CollegeCard key={college.id} college={college} />
            <div>
              <button
                onClick={() => handleSelectCollege(college)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              >
                {selectedColleges.some(item => item.id === college.id) ? 'Remove from List' : 'Add to List'}
              </button>
              <button onClick={() => handleCollegeDetails(college)} className='mt-2 ml-2 bg-blue-500 text-white px-4 py-2 rounded'>See details</button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSaveList}
        className="mt-6 bg-rose-800 text-white px-6 py-3 rounded"
      >
        Save Custom List
      </button>
    </div>
  );
}

export default CollegeList;
