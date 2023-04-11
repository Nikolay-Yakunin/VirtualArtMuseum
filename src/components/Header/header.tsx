import React from 'react';
import SearchBar from '../SearchBar/searchBar';

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header className="header">
      <div className="header-logo">VAV</div>
      <h1 className="header-title">Explore and Appreciate the World's Masterpieces</h1>
      <div className="header-search-bar">
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
};

export default Header;
