import React from 'react'
import { Link } from 'react-router-dom'

const bg = {
    "color": "bg-blue-950",
    "useful": "text-blue-100 hover:text-blue-500 font-semibold block pb-2 text-sm"
}

export default function Footer() {
    return (
        <>
            {/* component */}
            {/* <link
                rel="stylesheet"
                href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
            /> */}
            <link
                rel="stylesheet"
                href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
            />
            <footer className={`relative ${bg.color} pt-8 pb-6`}>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-white">
                                CET College Finder
                            </h4>
                            <h5 className="text-lg mt-0 mb-2 text-gray-400">
                                Find your best college.
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6">
                                <button
                                    className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <i className="fab fa-twitter" />
                                </button>
                                <button
                                    className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <i className="fab fa-facebook-square" />
                                </button>
                                {/* <button
                                    className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <i className="fab fa-dribbble" />
                                </button> */}
                                <button
                                    className="bg-white text-blue-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                                    type="button"
                                >
                                    <a href="https://github.com/shub15" target="_blank"
                                        rel="noopener noreferrer">
                                        <i className="fab fa-github" />
                                    </a>
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-blue-500 text-sm font-semibold mb-2">
                                        Useful Links
                                    </span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a
                                                className={bg.useful}
                                                href="https://github.com/shub15"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className={bg.useful}
                                                href="https://github.com/shub15"
                                            >
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className={bg.useful}
                                                href="https://github.com/shub15"
                                            >
                                                Github
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className={bg.useful}
                                                href="/"
                                            >
                                                Free Products
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-blue-500 text-sm font-semibold mb-2">
                                        Other Resources
                                    </span>
                                    <ul className="list-unstyled">
                                        {/* <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                                            >
                                                MIT License
                                            </a>
                                        </li> */}
                                        {/* <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://creative-tim.com/terms?ref=njs-profile"
                                            >
                                                Terms &amp; Conditions
                                            </a>
                                        </li> */}
                                        {/* <li>
                                            <a
                                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                                                href="https://creative-tim.com/privacy?ref=njs-profile"
                                            >
                                                Privacy Policy
                                            </a>
                                        </li> */}
                                        <li>
                                            <a
                                                className="text-blue-100 hover:text-blue-500 font-semibold block pb-2 text-sm"
                                                href="https://github.com/shub15"
                                            >
                                                Contact Us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blue-100" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blue-100 font-semibold py-1">
                                Copyright © <span id="get-current-year">2024</span>
                                <Link
                                    to="/about"
                                    className="text-blue-100 hover:text-blue-500"
                                // target="_blank"
                                >
                                    {" "}
                                    Sahil Doshi, Shubham Maity, Vatsal Umrania
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
