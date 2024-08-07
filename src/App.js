// src/App.js
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Main from './components/Main';
// import Filter from './components/Filter';
 

const API_KEY = 'eb17f712ec744586a55d9307fe8b6652';
const url = 'https://newsapi.org/v2/everything?q=';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
     fetchNews('cricket')
  }, []);

  const fetchNews = async (query) => {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    setArticles(data.articles);
  };

  const onNavItemClick = (id) => {
    fetchNews(id);
  };

  return (
    <div className="App">
      <NavBar fetchNews={fetchNews} onNavItemClick={onNavItemClick} />
       {/* <Filter/> */}
      <Main articles={articles} />
    </div>
  );
}

export default App;
