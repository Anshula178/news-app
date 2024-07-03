import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { searchVideos } from '../../features/news/newsSlice';

function Navbar() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleSearch = (e) => {
        let { value } = e.target;
        console.log('Search input:', value);  // Add this line
        if (value.length > 3) {
            dispatch(searchVideos({ query: value }));
            navigate("/search");
        }
    };

    return (
        <nav className="bg-white ">
            <div className="container mx-auto px-4 flex items-center justify-between py-4">
                {/* Logo or Brand */}
                <div className="text-2xl font-bold">
                    <Link to="/" className="text-black">NEWZz</Link>
                </div>

                {/* Navigation Links */}
                <div className="ms-14 flex space-x-7 relative">
                    <Link to="/" className="text-gray-800 hover:text-blue-500">Home</Link>
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="px-4  text-gray-800 hover:text-blue-500 focus:outline-none"
                        >
                            Category
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-lg rounded-lg z-10">
                                <Link to="/business" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">Business</Link>
                                <Link to="/entertainment" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">Entertainment</Link>
                                <Link to="/sports" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">Sports</Link>
                                <Link to="/general" className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">General</Link>
                            </div>
                        )}
                    </div>
                    <Link to="/contact" className="text-gray-800 hover:text-blue-500">Contact</Link>
                </div>

                {/* Search Input */}
                <div className="relative ml-auto">
                    <input
                        type="search"
                        placeholder="Search"
                        className="py-2 px-4 w-64 bg-gray-200 text-gray-800 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        onChange={handleSearch}
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
