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
    const location = useLocation();
    const details = location.state;
    const college = details.college
    console.log(college)

    const collegeData = {
        name: college.name,
        location: college.location,
        description: college.description || 'A premier institution offering courses in engineering, science, and technology.',
        feeStructure: {
            undergraduate: '₹ 1,95,000 per year',
            postgraduate: '₹ 50,000 per year',
        },
        cutoffs: {
            Open: '90%',
            OBC: '85%',
            SC: '75%',
            ST: '65%',
        },
        reviews: [
            { name: 'John Doe', review: 'Great campus and facilities!' },
            { name: 'Jane Smith', review: 'Excellent faculty and environment.' },
        ],
        statistics: {
            placements: '85%',
            avgSalary: '₹ 7 LPA',
            topCompanies: ['Google', 'Microsoft', 'Infosys'],
        },
    };

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold text-blue-600 mb-4">{collegeData.name}</h1>
            <p className="text-gray-500 text-xl">{collegeData.location}</p>

            {/* Description Section */}
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-2">Description</h2>
                <p className="text-gray-700">{collegeData.description}</p>
            </section>

            {/* Fee Structure */}
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-2">Fee Structure</h2>
                <table className="table-auto w-full text-left">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Course</th>
                            <th className="px-4 py-2">Fee</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border px-4 py-2">Undergraduate</td>
                            <td className="border px-4 py-2">{collegeData.feeStructure.undergraduate}</td>
                        </tr>
                        <tr>
                            <td className="border px-4 py-2">Postgraduate</td>
                            <td className="border px-4 py-2">{collegeData.feeStructure.postgraduate}</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Cutoffs */}
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-2">Cutoffs</h2>
                <ul className="list-disc list-inside">
                    {Object.entries(collegeData.cutoffs).map(([category, cutoff]) => (
                        <li key={category} className="text-gray-700">
                            {category}: {cutoff}
                        </li>
                    ))}
                </ul>
            </section>

            {/* Branchs */}
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-2">Cutoffs</h2>

                {college.branches.map(([branch, branchName]) => (
                    <ul className="list-disc list-inside">
                        {branch}
                    </ul>
                ))}
            </section>

            {/* Reviews */}
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
                {collegeData.reviews.map((review, index) => (
                    <div key={index} className="border p-4 rounded-lg mb-2 bg-gray-50">
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-gray-700">{review.review}</p>
                    </div>
                ))}
            </section>

            {/* Statistical Analysis */}
            <section className="my-6">
                <h2 className="text-2xl font-semibold mb-2">Statistical Analysis</h2>
                <p><strong>Placements:</strong> {collegeData.statistics.placements}</p>
                <p><strong>Average Salary:</strong> {collegeData.statistics.avgSalary}</p>
                <p><strong>Top Companies:</strong> {collegeData.statistics.topCompanies.join(', ')}</p>
            </section>
        </div>
    );
};

export default CollegeDetails;