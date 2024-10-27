import React, { useState } from 'react';

const EditCollegeCutoffs = ({ collegeData, categoryName }) => {
    // Create a state to store the modified branches and cutoff values
    const [editableData, setEditableData] = useState(collegeData.branches);

    // Handler to update cutoff values
    const handleCutoffChange = (branchId, category, value) => {
        setEditableData((prevData) =>
            prevData.map((branch) =>
                branch.collegeBranchId === branchId
                    ? {
                        ...branch,
                        cutoffCategories: {
                            ...branch.cutoffCategories,
                            [category]: value,
                        },
                    }
                    : branch
            )
        );
    };

    return (
        <section className="my-6">
            <h2 className="text-2xl font-semibold mb-2">Branches and Cutoffs</h2>
            {editableData.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-4 border-b">Branch</th>
                                {categoryName.slice(1).map((category) => (
                                    <th key={category} className="py-2 px-4 border-b">{category}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {editableData.map((branch) => (
                                <tr key={branch.collegeBranchId}>
                                    <td className="py-2 px-4 border-b">{branch.branchName}</td>
                                    {categoryName.slice(1).map((category) => {
                                        const cutoffValue = branch.cutoffCategories[category] || '';

                                        return (
                                            <td key={`${branch.collegeBranchId}-${category}`} className="py-2 px-4 border-b text-center">
                                                <input
                                                    type="text"
                                                    value={cutoffValue}
                                                    onChange={(e) => handleCutoffChange(branch.collegeBranchId, category, e.target.value)}
                                                    className="text-center border rounded p-1"
                                                />
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-gray-700">No branches available.</p>
            )}
        </section>
    );
};

export default EditCollegeCutoffs;
