import React from 'react';
import NewsCard from './NewsCard';

function Main({ articles }) {
  return (
    <main>
      <div className="cards-container container flex">
        {articles.map((article, index) => (
          <NewsCard key={article.id || index} article={article} />
        ))}
      </div>
    </main>
  );
}

export default Main;
