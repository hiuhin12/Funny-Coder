import React, { useState } from 'react';
import ic_search from './img/ic_search.png';

function SearchBar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // User chưa nhập tên city thì alert 
    if (city === '') {
      alert("Please enter a city name")
      return;
    }
    
    // Gọi hàm onSearch
    onSearch(city);
  };

  // Nhấn vào icon search 
  const handleIconClick = () => {
    if (city === '') {
      alert("Please enter a city name");
      return;
    }

    onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Enter city name" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
        />
        <img src={ic_search} onClick={handleIconClick}/>
      </div>
      
    </form>
  );
}

export default SearchBar;
