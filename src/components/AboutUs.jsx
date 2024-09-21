import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            {/* Header Section */}
            <section className="bg-blue-600 text-white py-12">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-lg max-w-2xl mx-auto">
                        We are committed to empowering students and professionals through AI and data science. Our mission is to foster innovation and research that addresses global challenges.
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
                            Our mission is to cultivate a learning environment where innovation in AI and Data Science thrives. We aim to provide students and researchers with the tools and knowledge needed to tackle real-world challenges.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white shadow-md p-8 rounded-lg">
                        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Our Vision</h2>
                        <p className="text-gray-600">
                            We envision a world where technology drives positive change, and AI solutions are accessible to everyone. Our vision is to lead the way in shaping a future driven by ethical and innovative AI technologies.
                        </p>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="bg-gray-50 py-12 px-4">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-semibold text-blue-600 mb-8">Our History</h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        Founded in 2020, our organization started with the belief that AI and data science could transform industries and solve some of the world’s toughest challenges. Over the years, we’ve grown into a community of innovators, researchers, and professionals working to push the boundaries of technology.
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
                            <p className="text-blue-600">Tech Lead</p>
                            <p className="text-gray-600 mt-2">
                                Leads our frontend and backend.
                            </p>
                        </div>

                        {/* Team Member 3 */}
                        <div className="bg-white shadow-md p-6 rounded-lg text-center">
                            <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800">Vatsal Umrania</h3>
                            <p className="text-blue-600">DBMS</p>
                            <p className="text-gray-600 mt-2">
                                Handles our Database.
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
