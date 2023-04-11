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
  {
    id: 3,
    artist: 'Pablo Picasso',
    title: "Les Demoiselles d'Avignon",
    medium: 'Oil on canvas',
    year: '1907',
    imageUrl: '../public/demoiselles-davignon.jpg',
    description:
      "Les Demoiselles d'Avignon is a large oil painting created by Spanish artist Pablo Picasso. It is regarded as a seminal work of modern art and a radical departure from traditional European painting.",
    tags: ['cubism', 'modern art', 'famous'],
  },
  {
    id: 4,
    artist: 'Edvard Munch',
    title: 'The Scream',
    medium: 'Oil, tempera, pastel and crayon on cardboard',
    year: '1893',
    imageUrl: '../public/the-scream.jpg',
    description:
      'The Scream is a series of four paintings by Norwegian Expressionist artist Edvard Munch. The painting shows a figure with an agonized expression against a landscape with a tumultuous orange sky.',
    tags: ['expressionism', 'famous'],
  },
];

export { artworks };
