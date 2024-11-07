import React, { useState } from 'react';

function CollegeCard({ college, selectedBranch }) {
  const MAX_VISIBLE_BRANCHES = 3;
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="">
      <h2 className="text-blue-900 text-2xl font-bold">{college.name}</h2>
      <p className="text-yellow-600 font-semibold text-lg">{college.location}</p>
      <p>Type: {college.collegeType ? college.collegeType : (college.minority ? college.minority + " Minority" : college.minority + "Non-Minority")}</p>

      {/* Display branch-wise cutoffs */}
      <div>
        <h3 className="font-bold">Branches and Open Category Cutoffs (Percentile):</h3>
        {college.branches && college.branches.length > 0 ? (
          // If 'All' branches are selected, show all branches' cutoffs, otherwise show only the selected branch
          college.branches
            .filter(branch => selectedBranch === 'All' || branch.branchName === selectedBranch)
            .slice(0, showMore ? college.branches.length : MAX_VISIBLE_BRANCHES)
            .map((branch, index) => (
              <div key={index}>
                <p className="font-semibold">{branch.branchName}</p>
                <p>
                  Open Category Cutoff (Percentile):{' '}
                  {branch.cutoffCategories?.openPercentile !== null
                    ? branch.cutoffCategories.openPercentile.toFixed(2)
                    : 'N/A'}
                </p>
              </div>
            ))
        ) : (
          <p>No branches or cutoffs available</p>
        )}

        {/* Show "See more" button if there are more branches than the visible limit */}
        {college.branches && college.branches.length > MAX_VISIBLE_BRANCHES && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-blue-500 hover:underline mt-2"
          >
            {showMore ? 'Show less...' : 'See more...'}
          </button>
        )}
      </div>

      <a href={`https://${college.website}` || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        {college.website ? 'Visit Website' : 'No Website Available'}
      </a>
    </div>
  );
}

export default CollegeCard;
