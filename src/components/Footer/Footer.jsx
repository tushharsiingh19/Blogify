import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
    return (
        <footer className="bg-slate-900 text-gray-300 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-14">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo & About */}
                    <div>
                        <div className="mb-5">
                            <Logo width="120px" />
                        </div>

                        <p className="text-gray-400 leading-7">
                            A modern blogging platform where you can write,
                            share, and discover amazing stories from people
                            around the world.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-blue-400 transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/all-posts"
                                    className="hover:text-blue-400 transition"
                                >
                                    All Posts
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/add-post"
                                    className="hover:text-blue-400 transition"
                                >
                                    Write a Post
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5">
                            Resources
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-blue-400 transition"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-blue-400 transition"
                                >
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-blue-400 transition"
                                >
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5">
                            Legal
                        </h3>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-blue-400 transition"
                                >
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-blue-400 transition"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">

                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Blogify. All rights reserved.
                    </p>

                    <div className="flex gap-6 mt-4 md:mt-0">

                        <a
                            href="#"
                            className="hover:text-blue-400 transition"
                        >
                            GitHub
                        </a>

                        <a
                            href="#"
                            className="hover:text-blue-400 transition"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="#"
                            className="hover:text-blue-400 transition"
                        >
                            Twitter
                        </a>

                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;