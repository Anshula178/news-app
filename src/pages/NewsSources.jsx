import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchByCategory } from '../features/news/newsSlice';

const NewsSources = () => {
    const dispatch = useDispatch();
    const { sources, status, error } = useSelector((state) => state.news);

    useEffect(() => {
        dispatch(fetchByCategory({ category:sources.category, language:sources.language, country:sources.country }));
    }, [dispatch]);

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>News Sources</h2>
            <ul>
                {sources.map((source) => (
                    <li key={source.id}>{source.category}</li>
                ))}
            </ul>
        </div>
    );
};

export default NewsSources;
