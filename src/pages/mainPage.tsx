import React, { useState } from 'react';
import './main.css';

import Header from '../components/Header/header';
import Gallery from '../components/Gallery/gallery';
import { artworks } from '../data';
import Footer from '../components/Footer/footer';

const info = {
  name: 'Your name',
  email: 'Your email',
  phone: 'Your phone',
  telegram: 'Your Telegram',
  wishes:
    '"Please feel free to reach out to me using any of the contact information below. I look forward to hearing from you!"',
};

const MainPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  const filteredArtworks = artworks.filter((artwork) =>
    artwork.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <div>
      <Header onSearch={handleSearch} />
      <Gallery artworks={filteredArtworks} />
      <Footer info={info} />
    </div>
  );
};

export default MainPage;
