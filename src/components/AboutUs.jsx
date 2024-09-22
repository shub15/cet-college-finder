import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header Section */}
            <section className="bg-blue-600 text-white py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        CETCollegeFinder is your ultimate tool for navigating the complex process of college admissions in Maharashtra. Designed specifically for students who have taken the CET exam, our platform helps you identify the best colleges based on your scores, reservation status, and other personalized criteria.
                    </p>
                </div>
            </section>

            {/* Mission and Vision Section */}
            <section className="py-12 px-4">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Mission */}
                    <div className="bg-white shadow-md p-8 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Mission</h2>
                        <p className="text-gray-600">
                            Our mission is to help students to find the college based on their interest and carrier they want to pursue in. 
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white shadow-md p-8 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h2>
                        <p className="text-gray-600">
                            "Unlock Your Future: Find the Perfect College with CETCollegeFinder"
                        </p>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="bg-gray-50 py-12 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-blue-600 mb-8">Our History</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                       We are the team of three from 2nd Year IT department.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-12 px-4">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-semibold text-blue-600 text-center mb-8">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Team Member 1 */}
                        <div className="bg-white shadow-md p-6 rounded-lg text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Sahil Doshi</h3>
                            <p className="text-blue-600">Founder</p>
                            <p className="text-gray-600 mt-2">
                                The origial idea of the project.
                            </p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-white shadow-md p-6 rounded-lg text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Shubham Maity</h3>
                            <p className="text-blue-600">Project Lead</p>
                            <p className="text-gray-600 mt-2">
                                Frontend and backend.
                            </p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="bg-white shadow-md p-6 rounded-lg text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Vatsal Umrania</h3>
                            <p className="text-blue-600">Member</p>
                            <p className="text-gray-600 mt-2">
                                Data Survey.
                            </p>
                        </div>

                        {/* Team Member 4 */}
                        <div className="bg-white shadow-md p-6 rounded-lg text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Dr. Harsh Bhor</h3>
                            <p className="text-blue-600">Project Guide</p>
                            <p className="text-gray-600 mt-2">
                                Our project guide.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
