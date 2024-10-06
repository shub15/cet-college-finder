import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';

const CollegeDetails = () => {
    // const collegeData = {
    //     name: 'K. J. Somaiya Institute of Technology',
    //     location: 'Sion, Mumbai',
    //     description: 'A premier institution offering courses in engineering, science, and technology.',
    //     feeStructure: {
    //         undergraduate: '₹ 1,95,000 per year',
    //         postgraduate: '₹ 50,000 per year',
    //     },
    //     cutoffs: {
    //         Open: '90%',
    //         OBC: '85%',
    //         SC: '75%',
    //         ST: '65%',
    //     },
    //     reviews: [
    //         { name: 'John Doe', review: 'Great campus and facilities!' },
    //         { name: 'Jane Smith', review: 'Excellent faculty and environment.' },
    //     ],
    //     statistics: {
    //         placements: '85%',
    //         avgSalary: '₹ 7 LPA',
    //         topCompanies: ['Google', 'Microsoft', 'Infosys'],
    //     },
    // };
    const categoryName = ["ID", "Open Rank", "Open Percentile", "TFWS Rank", "TFWS Percentile", "OBC Rank", "OBC Percentile", "MI Rank", "MI Percentile", "EWS Rank", "EWS Percentile"];
    const location = useLocation();
    const college = location.state;  // Access passed college details
    const details = college.college;
    // Example data structure using details passed from the previous component
    const collegeData = {
        name: details.name,
        location: details.location,
        website: details.website || 'N/A',
        description: details.description || 'A premier institution offering various branches of engineering.',
        branches: details.branches || [],
    };

    return (
        <div className="container mx-auto p-6">
            {/* College Name */}
            <h1 className="text-4xl font-bold text-blue-600 mb-4">{collegeData.name}</h1>

            {/* College Location and Website */}
            <p className="text-gray-500 text-xl">Location: {collegeData.location}</p>
            <p className="text-gray-500 text-xl">Website: <a href={`https://${collegeData.website}`} className="text-blue-500 underline">{collegeData.website}</a></p>

            {/* Description Section */}
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-2">Description</h2>
                <p className="text-gray-700">{collegeData.description}</p>
            </section>

            {/* Branches and Cutoffs */}
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-2">Branches and Cutoffs</h2>
                {collegeData.branches.length > 0 ? (
                    <ol className="list-decimal">
                        {collegeData.branches.map((branch) => (
                            <li key={branch.collegeBranchId} className="my-4">
                                <h3 className="font-semibold">{branch.branchName}</h3>
                                <ul className="list-disc list-inside ml-6">
                                    {Object.entries(branch.cutoffCategories).map(([category, cutoff], index) => (
                                        index > 0 && (<li key={category}>
                                            {categoryName[index]}: {categoryName[index].includes("Rank") ? cutoff : `${cutoff}%`}
                                        </li>)
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                ) : (
                    <p className="text-gray-700">No branches available.</p>
                )}
            </section>
        </div>
    );
};

export default CollegeDetails;