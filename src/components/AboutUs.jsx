import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header Section */}
            <section className="bg-blue-950 text-white py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        CET College Finder is your ultimate tool for navigating the complex process of college admissions in Maharashtra. Designed specifically for students who have taken the CET exam, our platform helps you identify the best colleges based on your personalized criteria.
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
                            Our mission is to help students to find the college based on their interest and carrier they want to pursue. 
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white shadow-md p-8 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h2>
                        <p className="text-gray-600">
                            "Unlock Your Future: Find the Perfect College with CET College Finder"
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
                            <img src="https://scontent-bom2-2.cdninstagram.com/v/t51.2885-19/461460543_1276564690004495_1551109590864935576_n.jpg?stp=dst-jpg_s150x150&_nc_cat=110&ccb=1-7&_nc_sid=f7ccc5&_nc_ohc=cKqnqU0Y_o8Q7kNvgEruA9L&_nc_ad=z-m&_nc_cid=0&_nc_zt=24&_nc_ht=scontent-bom2-2.cdninstagram.com&oh=00_AYBbhBLZdHHCmoRJtRU5qgiw4NbfCqh3_WRSP8A0xMmXHg&oe=67330FA7" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Sahil Doshi</h3>
                            <p className="text-blue-600">Founder</p>
                            <p className="text-gray-600 mt-2">
                                The origial idea of the project.
                            </p>
                        </div>

                        {/* Team Member 2 */}
                        <div className="bg-white shadow-md p-6 rounded-lg text-center">
                            <img src="https://avatars.githubusercontent.com/u/83867127?v=4" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Shubham Maity</h3>
                            <p className="text-blue-600">Project Lead</p>
                            <p className="text-gray-600 mt-2">
                                Frontend, Backend & MySQL.
                            </p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="bg-white shadow-md p-6 rounded-lg text-center">
                            <img src="https://scontent-bom1-2.cdninstagram.com/v/t51.2885-19/448179061_428419473399688_8658991707102580644_n.jpg?stp=dst-jpg_s100x100&_nc_cat=100&ccb=1-7&_nc_sid=bf7eb4&_nc_ohc=VwTHwpEe1EUQ7kNvgGAOFEe&_nc_zt=24&_nc_ht=scontent-bom1-2.cdninstagram.com&oh=00_AYBwaxcU-Czqihfx-NEtVtn7X2oSAeAe6SAsi-RQjpuEcA&oe=6732F306" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Vatsal Umrania</h3>
                            <p className="text-blue-600">Data Base</p>
                            <p className="text-gray-600 mt-2">
                                Data Survey, ER Model
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
