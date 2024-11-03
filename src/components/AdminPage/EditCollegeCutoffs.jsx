import React, { useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || '';

const EditCollegeCutoffs = ({ collegeData, categoryName }) => {
    const [editableData, setEditableData] = useState(collegeData.branches);
    const [modifiedCutoffs, setModifiedCutoffs] = useState({});

    const handleCutoffChange = (branchId, category, value) => {
        setEditableData((prevData) =>
            prevData.map((branch) =>
                branch.collegeBranchId === branchId
                    ? {
                        ...branch,
                        cutoffCategories: {
                            ...branch.cutoffCategories,
                            [category]: parseFloat(value) || 0,
                        },
                    }
                    : branch
            )
        );

        setModifiedCutoffs((prev) => ({
            ...prev,
            [branchId]: {
                ...(prev[branchId] || {}),
                [category]: parseFloat(value) || 0,
            },
        }));
    };

    const handleSave = async () => {
        for (const [branchId, cutoffs] of Object.entries(modifiedCutoffs)) {
            try {
                const response = await fetch(`${API_URL}/api/colleges/${collegeData.id}/branches/${branchId}/cutoffs`, {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(cutoffs),
                });
                
                if (response.ok) {
                    alert(`Cutoff data for branch ${branchId} saved successfully!`);
                } else {
                    alert(`Failed to save cutoff data for branch ${branchId}`);
                }
            } catch (error) {
                console.error(`Error saving data for branch ${branchId}:`, error);
                alert(`An error occurred while saving data for branch ${branchId}`);
            }
        }
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
                            {editableData.map((branch) => {
                                return (
                                    <tr key={branch.collegeBranchId}>
                                        <td className="py-2 px-4 border-b">{branch.branchName}</td>
                                        {categoryName.slice(1).map((category) => {
                                            const cutoffValue = branch.cutoffCategories[category] || 0;

                                            return (
                                                <td key={`${branch.collegeBranchId}-${category}`} className="py-2 px-4 border-b text-center">
                                                    <input
                                                        type="number"
                                                        value={cutoffValue}
                                                        onChange={(e) => handleCutoffChange(branch.collegeBranchId, category, e.target.value)}
                                                        className="text-center border rounded p-1"
                                                    />
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
            <div className="mt-4 text-center">
                <button
                    onClick={handleSave}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Save Changes
                </button>
            </div>
        </section>
    );
};

export default EditCollegeCutoffs;
