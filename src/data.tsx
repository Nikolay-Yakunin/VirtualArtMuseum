import { Artwork } from './types';

const artworks: Artwork[] = [
  {
    id: 1,
    artist: 'Leonardo da Vinci',
    title: 'Mona Lisa',
    medium: 'Oil on poplar panel',
    year: '1503–1519',
    imageUrl: '../public/mona-lisa.jpg',
    description:
      'The Mona Lisa is a half-length portrait painting by the Italian artist Leonardo da Vinci. It is considered an archetypal masterpiece of the Italian Renaissance.',
    tags: ['portrait', 'Renaissance', 'famous'],
  },
  {
    id: 2,
    artist: 'Vincent van Gogh',
    title: 'Starry Night',
    medium: 'Oil on canvas',
    year: '1889',
    imageUrl: '../public/starry-night.jpg',
    description:
      'The Starry Night is an oil on canvas painting by Dutch post-impressionist painter Vincent van Gogh. It depicts the view from the east-facing window of his asylum room at Saint-Paul-de-Mausole, just before sunrise.',
    tags: ['landscape', 'post-impressionism', 'famous'],
  },
];

export { artworks };
