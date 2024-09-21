import React from 'react';

function CollegeCard({ college }) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-blue-900 text-2xl font-bold">{college.name}</h2>
      <p className="text-gray-600">{college.location}</p>
      <p>Branch: {college.branch}</p>
      <p>Type: {college.collegeType}</p>
      <p>Cutoff 2023: {college.cutoff2023 !== null ? college.cutoff2023 : 'N/A'}</p>
      <p>Cutoff 2022: {college.cutoff2022 !== null ? college.cutoff2022 : 'N/A'}</p>
      <a href={college.website || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        {college.website ? 'Visit Website' : 'No Website Available'}
      </a>
    </div>
  );
}

export default CollegeCard;
