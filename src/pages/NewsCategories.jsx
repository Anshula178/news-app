import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../features/news/newsSlice';
import { Link } from 'react-router-dom';

const NewsCategories = () => {
    const dispatch = useDispatch();
    const { articles, status, error } = useSelector((state) => state.news);
    const [selectedCategory, setSelectedCategory] = useState('general');
    const [filteredArticles, setFilteredArticles] = useState([]);

    useEffect(() => {
        // Fetch news when component mounts or when selected category changes
        dispatch(fetchNews({ category: selectedCategory }));
    }, [dispatch, selectedCategory]);

    useEffect(() => {
        // Filter articles based on selected category
        if (articles.length > 0) {
            const filtered = articles.filter(article => article.category === selectedCategory);
            setFilteredArticles(filtered);
        }
    }, [articles, selectedCategory]);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="container mx-auto p-4  mt-18 mb-18">
            <div className="flex justify-center space-x-4">
                <Link to="general"
                    className={`px-4 py-2 rounded-lg focus:outline-none ${selectedCategory === 'general' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
                    onClick={() => handleCategoryClick('general')}
                >
                    General
                </Link>
                <Link to="business"
                    className={`px-4 py-2 rounded-lg focus:outline-none ${selectedCategory === 'business' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
                    onClick={() => handleCategoryClick('business')}
                >
                    Business
                </Link>
                <Link to="sports"
                    className={`px-4 py-2 rounded-lg focus:outline-none ${selectedCategory === 'sports' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
                    onClick={() => handleCategoryClick('sports')}
                >
                    Sports
                </Link>
                <Link to="entertainment"
                    className={`px-4 py-2 rounded-lg focus:outline-none ${selectedCategory === 'entertainment' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white'}`}
                    onClick={() => handleCategoryClick('entertainment')}
                >
                    Entertainment
                </Link>
            </div>

            <div className="mt-8">
                {status === 'loading' && <p>Loading...</p>}
                {status === 'failed' && <p>Error: {error}</p>}
                {status === 'succeeded' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map((article, index) => (
                            <a key={index} href={article.url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                                {article.urlToImage && (
                                    <img src={article.urlToImage} alt={article.title} className="w-full h-72 object-cover rounded-t-lg" />
                                )}
                                <div className="p-4 bg-white rounded-b-lg shadow-md">
                                    <h3 className="text-2xl font-semibold text-black">{article.title}</h3>
                                    <p className="text-gray-700 mt-2">{article.description}</p>
                                    <p className="text-gray-500 text-sm mt-2">{new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NewsCategories;
