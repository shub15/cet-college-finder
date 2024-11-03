import React, { useState } from 'react';
import axios from 'axios';
import BranchManagement from './BranchManagement';
import EditCollegeCutoffs from './EditCollegeCutoffs';

const API_URL = import.meta.env.VITE_API_URL || '';

function CollegeForm() {
  const categoryName = ["id", "openRank", "openPercentile", "tfwsRank", "tfwsPercentile", "obcRank", "obcPercentile", "miRank", "miPercentile", "ewsRank", "ewsPercentile"];

  const [formData, setFormData] = useState({
    name: '',
    website: '',
    location: '',
    branch: '',
    collegeType: '',
    cutoff2023: '',
    cutoff2022: '',
    cutoff2021: '',
    cutoff2020: ''
  });

  const [success, setSuccess] = useState(false); // New state for success message

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false); // Reset success state on new submission

    // Submit form data to the backend
    axios.post(`${API_URL}/api/colleges`, formData)
      .then(response => {
        console.log('College data submitted successfully', response.data);
        setSuccess(true); // Set success to true on successful submission

        // Optionally reset the form after submission
        setFormData({
          name: '',
          website: '',
          location: '',
          branch: '',
          collegeType: '',
          cutoff2023: '',
          cutoff2022: '',
          cutoff2021: '',
          cutoff2020: ''
        });
      })
      .catch(error => {
        console.error('Error submitting college data:', error);
      });
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Add New College</h1>

      {/* Success Message */}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">College data submitted successfully!</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium">College Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded w-full py-2 px-4"
            required
          />
        </div>

        {/* Website */}
        <div>
          <label className="block text-sm font-medium">Website</label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="border rounded w-full py-2 px-4"
            placeholder="https://example.com"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border rounded w-full py-2 px-4"
            required
          />
        </div>

        {/* Branch */}
        {/* <div>
          <label className="block text-sm font-medium">Branch</label>
          <input 
            type="text" 
            name="branch" 
            value={formData.branch} 
            onChange={handleChange} 
            className="border rounded w-full py-2 px-4"
          />
        </div> */}

        {/* College Type */}
        <div>
          <label className="block text-sm font-medium">College Type</label>
          <input
            type="text"
            name="collegeType"
            value={formData.collegeType}
            onChange={handleChange}
            className="border rounded w-full py-2 px-4"
            placeholder="Minority, Non-Minority, etc"
          />
        </div>

        {/* Cutoffs */}
        {/* <div>
          <label className="block text-sm font-medium">Cutoff</label>
          <input
            type="number"
            name="cutoff2023"
            value={formData.cutoff2023}
            onChange={handleChange}
            className="border rounded w-full py-2 px-4"
          />
        </div> */}

        {/* <div>
          <label className="block text-sm font-medium">Cutoff 2022</label>
          <input 
            type="number" 
            name="cutoff2022" 
            value={formData.cutoff2022} 
            onChange={handleChange} 
            className="border rounded w-full py-2 px-4"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Cutoff 2021</label>
          <input 
            type="number" 
            name="cutoff2021" 
            value={formData.cutoff2021} 
            onChange={handleChange} 
            className="border rounded w-full py-2 px-4"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Cutoff 2020</label>
          <input 
            type="number" 
            name="cutoff2020" 
            value={formData.cutoff2020} 
            onChange={handleChange} 
            className="border rounded w-full py-2 px-4"
          />
        </div> */}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Add College
        </button>

      </form>
    </div>
  );
}

export default CollegeForm;
