// src/components/NewsCard.js
import React from 'react';

function NewsCard({ article }) {
  
  const date = new Date(article.publishedAt).toLocaleString('en-US', {
    timeZone: 'Asia/Jakarta',
  });

  return (
    <div className="card"  onClick={()=>window.open(article.url)}>
      <div className="card-header">
        <img src={article.urlToImage} alt="news-image" id="news-img" />
      </div>
      <div className="card-content">
        <h3 id="news-title">{article.title}</h3>
        <h6 className="news-source" id="news-source">{`${article.source.name} · ${date}`}</h6>
        <p className="news-desc" id="news-desc">{article.description}</p>
      </div>
      
    </div>
  );
}

export default NewsCard;
