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
        logo: details.logo
    };

    return (
        <div className="container mx-auto p-6">
            <div className='flex justify-between'>
                {/* College Name */}
                <h1 className="text-4xl font-bold text-blue-600 mb-4">{collegeData.name}</h1>
                {/* {collegeData.logo && <img src={collegeData.logo} alt='college logo' />} */}
            </div>

            {/* College Location and Website */}
            <p className="text-gray-500 text-xl">Location: {collegeData.location}</p>
            <p className="text-gray-500 text-xl">Website: <a href={`https://${collegeData.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">{collegeData.website}</a></p>

            {/* Description Section */}
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-2">Description</h2>
                <p className="text-gray-700">{collegeData.description}</p>
            </section>

            {/* Branches and Cutoffs */}
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-2">Branches and Cutoffs</h2>
                {collegeData.branches.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="py-2 px-4 border-b">Branch</th>
                                    {categoryName.slice(1).map((category) => ( // Skip the first element (ID)
                                        <th key={category} className="py-2 px-4 border-b">{category}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {collegeData.branches.map((branch) => {
                                    // Extract cutoff categories, skipping the first (assumed to be "ID")
                                    const cutoffs = Object.entries(branch.cutoffCategories).slice(1);

                                    return (
                                        <tr key={branch.collegeBranchId}>
                                            <td className="py-2 px-4 border-b">{branch.branchName}</td>
                                            {categoryName.slice(1).map((category, index) => {
                                                // Get the cutoff value for the current category, or default to '-'
                                                const cutoffValue = cutoffs[index] ? cutoffs[index][1] : null;

                                                return (
                                                    <td key={`${branch.collegeBranchId}-${category}`} className="py-2 px-4 border-b text-center">
                                                        {cutoffValue ?
                                                            (category.includes("Rank") ? cutoffValue : `${cutoffValue}%`)
                                                            : '-'}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-gray-700">No branches available.</p>
                )}
            </section>
        </div>
    );
};

export default CollegeDetails;