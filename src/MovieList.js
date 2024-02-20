import React from 'react';
import { Link } from 'react-router-dom';

// Exemple de données de films
const moviesData = [
  {
    id: 1,
    title: 'Inception',
    description: 'Un voleur expérimenté vole des secrets précieux grâce à l\'extraction de rêves.',
    trailerLink: 'https://www.youtube.com/watch?v=YoHD9XEInc0'
  },
  {
    id: 2,
    title: 'The Dark Knight',
    description: 'Lorsque le Joker lance une vague de chaos sur Gotham City, Batman doit intervenir pour l\'arrêter.',
    trailerLink: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
  },
  // Ajoutez d'autres films ici...
];

function MovieList() {
  return (
    <div>
      <h1>Liste des Films</h1>
      <ul>
        {moviesData.map((movie) => (
          <li key={movie.id}>
            {/* Créez un lien vers la page de détail de chaque film */}
            <Link to={`/movie/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
