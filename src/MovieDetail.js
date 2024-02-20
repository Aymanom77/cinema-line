import React from 'react';
import { Link, useParams } from 'react-router-dom';
import MoviesData from './MoviesData'; // Importez les données des films

function MovieDetail() {
  const { id } = useParams(); // Obtenez l'ID du film à partir des paramètres d'URL
  const movie = MoviesData.find(movie => movie.id === Number(id)); // Trouvez le film correspondant à l'ID

  if (!movie) {
    return <div>Film non trouvé</div>; // Gestion de cas où le film n'est pas trouvé
  }

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Description : {movie.description}</p>
      <p>Lien de bande-annonce : <a href={movie.trailerLink}>Regarder</a></p>
      <Link to="/">Retour à la liste des films</Link>
    </div>
  );
}

export default MovieDetail;
