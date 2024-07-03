// src/components/HomeScreen.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchNews } from '../features/news/newsSlice';
import NewsCategories from './NewsCategories';

function HomeScreen() {
  const dispatch = useDispatch();
  const { mainArticle, articles, status, error } = useSelector((state) => state.news);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchNews());
    }
  }, [status, dispatch]);

 

  return (
    <>
      <div className="container mx-auto p-4 md:p-8 lg:p-12">
        {/* Main Article Section */}
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>{error}</p>}
        {mainArticle && (
          <div className="mb-8">
            {mainArticle.urlToImage && (
              <a href={mainArticle.url} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <img src={mainArticle.urlToImage} alt={mainArticle.title} className="w-full h-96 object-cover rounded-t-lg" />
                <div className="p-4 bg-white rounded-b-lg">
                  <h2 className="text-3xl font-bold text-black">{mainArticle.title}</h2>
                  <p className="text-gray-700 mt-2">{mainArticle.description}</p>
                  
                </div>
              </a>
            )}
          </div>
        )}
        <NewsCategories />

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            article.urlToImage && (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  className="w-full h-72 object-cover rounded-t-lg"
                />
                <div className="p-4 bg-white rounded-b-lg">
                  <h3 className="text-2xl font-semibold text-black">{article.title}</h3>
                  <p className="text-gray-700 mt-2">{article.description}</p>
                  <p className=" mt-2 font-black">{article.author}</p>
                </div>
              </a>
            )
          ))}
        </div>
      </div>
      
    </>
  );
}

export default HomeScreen;
