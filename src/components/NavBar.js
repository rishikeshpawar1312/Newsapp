 
import React, { useState } from 'react';
import pic from '../../src/assests/pic.png'

function NavBar({ fetchNews, onNavItemClick }) {
  const [searchText, setSearchText] = useState('');   

  return (
    <nav>
      <div className="main-nav container flex">
      <a href="/" onClick={() => window.location.reload()} className="company-logo">
          <img src={pic} alt="company logo" />
        </a>
        <div className="nav-links">
          <ul className="flex">
            <li className="hover-link nav-item" id="ipl" onClick={() => onNavItemClick('ipl')}>
              IPL
            </li>
            <li className="hover-link nav-item" id="finance" onClick={() => onNavItemClick('finance')}>
              Finance
            </li>
            <li className="hover-link nav-item" id="politics" onClick={() => onNavItemClick('politics')}>
              Politics
            </li>
          </ul>
        </div>
        <div className="search-bar flex">
        <input
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      e.preventDefault();  
      fetchNews(e.target.value); 
    }
  }}
  id="search-text"
  type="text"
  className="news-input"
  placeholder="e.g. Science"
  value={searchText}
  onChange={(e) => setSearchText(e.target.value)}
/>


          <button
            id="search-button"
            className="search-button"
            onClick={() => fetchNews(searchText)}
          >
            Search
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
