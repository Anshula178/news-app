// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Logo or Site Name */}
                    <div className="w-full md:w-1/4 mb-4">
                        <h2 className="text-xl font-bold">NewsSite</h2>
                        <p className="mt-2 text-gray-400">Your trusted source for news</p>
                    </div>

                    {/* Links */}
                    <div className="w-full md:w-3/4 flex flex-wrap justify-between md:justify-end">
                        <div className="w-full md:w-1/3 mb-4">
                            <h3 className="text-lg font-semibold mb-2">Links</h3>
                            <ul>
                                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                            </ul>
                        </div>

                        {/* Social Media Links */}
                        <div className="w-full md:w-1/3 mb-4">
                            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                            <ul>
                                <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="w-full md:w-1/3">
                            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                            <p className="text-gray-400">123 News Street, City, Country</p>
                            <p className="text-gray-400">contact@newssite.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
