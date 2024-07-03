import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    mainArticle: null,
    articles: [],
    sources: [], // To store fetched sources
    status: 'idle',
    error: null,
    searchParameters:{
      query:""
    }
};


// Async thunk to fetch top headlines by country (example: India)
export const fetchNews = createAsyncThunk('news/fetchNews', async () => {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                country: 'in', // Example: Fetching news from India
                apiKey: 'fcfecdcca8c74d9f885193516cdafa1c', // Replace with your actual API key
            },
        });
        
        return response.data.articles;
        
    } catch (error) {
        throw Error('Failed to fetch top headlines');
    }
});
export const fetchSearchResults = createAsyncThunk('news/fetchSearchResults', async (query) => {
    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: query,
                apiKey: 'fcfecdcca8c74d9f885193516cdafa1c', // Replace with your actual API key
            },
        });
        return response.data.articles;
    } catch (error) {
        throw Error('Failed to fetch search results');
    }
});

// Async thunk to fetch news sources by category, language, or country
export const fetchByCategory = createAsyncThunk('news/fetchByCategory', async (params) => {
    // ^^^ params is defined as an argument here
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines/sources?', {
            params: {
                apiKey:'fcfecdcca8c74d9f885193516cdafa1c', // Replace with your actual API key
                category: params.category, // Accessing category from params
                language: params.language, // Accessing language from params
                country: params.country, // Accessing country from params
            },
        });
       
        return response.data.sources;
    } catch (error) {
        throw Error('Failed to fetch news sources');
    }
});

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        searchVideos:(state,action)=>{
            state.searchParameters=action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.mainArticle = action.payload[1]; // Assuming you want to set the first article as mainArticle
                state.articles = action.payload;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(fetchByCategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchByCategory.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.sources = action.payload; // Store fetched sources
            })
            .addCase(fetchByCategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            }).addCase(fetchSearchResults.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSearchResults.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.searchResults = action.payload; // Store search results
            })
            .addCase(fetchSearchResults.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });;
    },
});
export const {searchVideos}=newsSlice.actions
export default newsSlice.reducer;
