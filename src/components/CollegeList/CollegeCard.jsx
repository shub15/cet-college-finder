import React from 'react';

function CollegeCard({ college, selectedBranch }) {
  return (
    <div className="">
      <h2 className="text-blue-900 text-2xl font-bold">{college.name}</h2>
      <p className="text-yellow-600 font-semibold text-lg">{college.location}</p>
      <p>Type: {college.collegeType}</p>

      {/* Display branch-wise cutoffs */}
      <div>
        <h3 className="font-bold">Branches and Open Category Cutoffs (Percentile):</h3>
        {college.branches && college.branches.length > 0 ? (
          // If 'All' branches are selected, show all branches' cutoffs, otherwise show only the selected branch
          college.branches
            .filter(branch => selectedBranch === 'All' || branch.branchName === selectedBranch)
            .map((branch, index) => (
              <div key={index}>
                <p className="font-semibold">{branch.branchName}</p>
                <p>
                  Open Category Cutoff (Percentile):{' '}
                  {branch.cutoffCategories?.openPercentile !== null ? branch.cutoffCategories.openPercentile.toFixed(2) : 'N/A'}
                </p>
              </div>
            ))
        ) : (
          <p>No branches or cutoffs available</p>
        )}
      </div>

      <a href={college.website || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        {college.website ? 'Visit Website' : 'No Website Available'}
      </a>
    </div>
  );
}

export default CollegeCard;
