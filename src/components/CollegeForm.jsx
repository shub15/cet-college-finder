import React, { useState } from 'react';

const CollegeForm = () => {
  const [collegeName, setCollegeName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("College Added:", collegeName);
    setCollegeName('');
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Add College</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">College Name</label>
          <input
            type="text"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Enter college name"
          />
        </div>
        <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">
          Add College
        </button>
      </form>
    </div>
  );
};

export default CollegeForm;
