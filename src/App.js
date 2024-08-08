// src/App.js
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';

const API_KEY = 'eb17f712ec744586a55d9307fe8b6652';
const url = 'https://newsapi.org/v2/everything?q=';

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews('cricket');
  }, []);

  const fetchNews = async (query) => {
    try {
      const res = await fetch(`${url}${query}&apiKey=${API_KEY}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      setArticles(data.articles);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError(err.message);
    }
  };
  

  const onNavItemClick = (id) => {
    fetchNews(id);
  };

  return (
    <div className="App">
      <NavBar fetchNews={fetchNews} onNavItemClick={onNavItemClick} />
      {error && <div>Error: {error}</div>}
      <Main articles={articles} />
    </div>
  );
}

export default App;
