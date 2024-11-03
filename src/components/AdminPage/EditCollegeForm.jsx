import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import EditCollegeCutoffs from './EditCollegeCutoffs';
import BranchManagement from './BranchManagement';

const API_URL = import.meta.env.VITE_API_URL || '';

function EditCollegeForm () {
    const location = useLocation();
    const college = location.state;  // Access passed college details
    const details = college.college;

    console.log(details)
    console.log(college)
  
    const collegeData = {
      id: details.id,
      name: details.name,
      location: details.location,
      website: details.website || 'N/A',
      description: details.description || 'A premier institution offering various branches of engineering.',
      branches: details.branches || [],
      logo: details.logo
  };

  const categoryName = ["id", "openRank", "openPercentile", "tfwsRank", "tfwsPercentile", "obcRank", "obcPercentile", "miRank", "miPercentile", "ewsRank", "ewsPercentile"];
  
    const [formData, setFormData] = useState({
    name: collegeData.name,
    website: collegeData.website,
    location: collegeData.location,
    branch: collegeData.branches.map((branch, i) => (i == 0 ? "" : " ") + branch.branchName),
    collegeType: details.minority ? details.minority : "Non-Minority" ,
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
    <div className="container mx-auto px-4 w-11/12">
      <h1 className="text-2xl font-bold mb-4">Edit College</h1>
      
      {/* Success Message */}
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">College data Edited successfully!</span>
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

        {console.log(formData.branch)}

        <BranchManagement branches={formData.branch}/>

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

         <EditCollegeCutoffs collegeData={collegeData} categoryName={categoryName}/>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        >
          Edit College
        </button>

      </form>
    </div>
  );
}

export default EditCollegeForm;
