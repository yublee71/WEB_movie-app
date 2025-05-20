import { useState, useEffect } from "react";
import { Movie } from "../components/Movie/Movie";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?limit=50&minimum_rating=8&sort_by=download_count"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>The Movies!</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              link={`/movie/${movie.id}`}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              genres={movie.genres}
              year={movie.year}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
}
