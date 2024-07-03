import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchByCategory } from '../features/news/newsSlice';

const Business = () => {
    const dispatch = useDispatch();
    const { sources, status, error } = useSelector((state) => state.news);

    useEffect(() => {
        dispatch(fetchByCategory({ category: 'business',language:"en" }));
    }, [dispatch]);

    return (
       <div className="container mx-auto p-4 md:p-8 lg:p-12">
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>{error}</p>}
            {status === 'succeeded' && (
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Business News Sources</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sources.map((source) => (
                            <div key={source.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-gray-800">{source.name}</h3>
                                    <p className="text-gray-600">{source.description}</p>
                                </div>
                                <div className="bg-gray-200 px-4 py-2">
                                    <span className="text-sm font-medium text-gray-600">Category:</span>
                                    <span className="ml-1 text-sm font-semibold text-blue-600">{source.category}</span>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div> 
    );
};

export default Business;
