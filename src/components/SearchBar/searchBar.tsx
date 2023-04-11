import React, { useState, useEffect, ChangeEvent } from 'react';
import './searchBar.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(query);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query, onSearch]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search artworks" value={query} onChange={handleChange} />
    </div>
  );
};

export default SearchBar;
