import { Artwork } from '../../types';
import './artworkCard.css';

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  return (
    <div className="artwork-card">
      <div className="artwork-image-container">
        <img src={artwork.imageUrl} alt={artwork.title} className="artwork-image" />
      </div>
      <div className="artwork-details">
        <h2 className="artwork-title">{artwork.title}</h2>
        <p className="artwork-artist">{artwork.artist}</p>
        <p className="artwork-year">{artwork.year}</p>
        <p className="artwork-medium">{artwork.medium}</p>
        <p className="artwork-description">{artwork.description}</p>
        <div className="artwork-tags">
          {artwork.tags.map((tag, index) => (
            <span key={index} className="artwork-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;
