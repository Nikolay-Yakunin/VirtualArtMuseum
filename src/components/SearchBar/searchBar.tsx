import React, { ChangeEvent } from 'react';
import './searchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <div>
      <label htmlFor="search-input">Search:</label>
      <input type="text" id="search-input" onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
