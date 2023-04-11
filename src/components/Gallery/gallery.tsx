import './gallery.css';
import { artworks } from '../../data';
import { Artwork } from '../../types';

import ArtworkCard from '../ArtworkCard/artworkCard';

interface GalleryProps {
  artworks: Artwork[];
}

const Gallery: React.FC<GalleryProps> = ({ artworks }) => {
  const rowSize = 3;
  const rows = [];
  for (let i = 0; i < artworks.length; i += rowSize) {
    rows.push(artworks.slice(i, i + rowSize));
  }

  return (
    <div className="gallery">
      {rows.map((row, index) => (
        <div className="gallery-row" key={index}>
          {row.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
