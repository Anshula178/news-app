import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchResults } from '../features/news/newsSlice';

function Search() {
    const dispatch = useDispatch();
    const searchResults = useSelector((state) => state.news.searchResults);
    const { query } = useSelector((state) => state.news.searchParameters);

    useEffect(() => {
        if (query) {
            dispatch(fetchSearchResults(query));
        }
    }, [dispatch, query]);

    return (
        <div className="container mx-auto py-8 px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {searchResults?.map((article, index) => (
                   article.urlToImage && (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            <img
                                src={article.urlToImage}
                                alt={article.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-black">{article.title}</h3>
                                <p className="text-gray-700 mt-2">{article.description}</p>
                                <p className="text-gray-500 mt-2">{article.author}</p>
                            </div>
                        </a>
                    </div>
                   )
                ))}
            </div>
        </div>
    );
}

export default Search;
