import React, { useState } from 'react';

const BranchManagement = ({ branches }) => {
  const [formData, setFormData] = useState({
    existingBranches: branches, // Use props as initial state
    newBranch: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddBranch = () => {
    const trimmedNewBranch = formData.newBranch.trim();
    if (trimmedNewBranch && !formData.existingBranches.includes(trimmedNewBranch)) {
      setFormData((prevData) => ({
        ...prevData,
        existingBranches: [...prevData.existingBranches, trimmedNewBranch],
        newBranch: '' // Clear input after adding
      }));
    } else {
      alert('Branch already exists or is empty!'); // Alert for duplicate or empty branch
    }
  };

  const handleEditBranch = (index, newName) => {
    const trimmedNewName = newName.trim();
    if (trimmedNewName) {
      const updatedBranches = formData.existingBranches.map((branch, i) => 
        i === index ? trimmedNewName : branch
      );
      setFormData({ ...formData, existingBranches: updatedBranches });
    }
  };

  const handleRemoveBranch = (branchToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      existingBranches: prevData.existingBranches.filter(branch => branch !== branchToRemove)
    }));
  };

  return (
    <div>
      <label className="block text-sm font-medium mb-1">Add Branch</label>
      <input 
        type="text" 
        name="newBranch" 
        value={formData.newBranch} 
        onChange={handleChange} 
        className="border rounded w-full py-2 px-4 mb-2"
        placeholder="Add a new branch"
      />
      <button 
        type='button'
        onClick={handleAddBranch} 
        className="bg-blue-500 text-white py-1 px-4 rounded mb-4"
      >
        Add Branch
      </button>

      {formData.existingBranches.length > 0 && (
        <div className="border rounded p-2">
          <h3 className="font-semibold">Existing Branches:</h3>
          <ul>
            {formData.existingBranches.map((branch, index) => (
              <li key={index} className="flex justify-between items-center py-1">
                <input 
                  type="text" 
                  value={branch} 
                  onChange={(e) => handleEditBranch(index, e.target.value)} 
                  className="border rounded w-1/2 py-1 px-2"
                />
                <button 
                  onClick={() => handleRemoveBranch(branch)} 
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BranchManagement;
