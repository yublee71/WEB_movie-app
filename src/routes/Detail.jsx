import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Movie } from "../components/Movie/Movie";

export function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    // <>
    //   {movie ? (
    //     <>
    //       <h1>{movie.title}</h1>
    //       <p>{movie.year}</p>
    //       <p>{movie.rating}</p>
    //       <ul>
    //         {movie.genres.map((g, index) => (
    //           <li key={index}>{g}</li>
    //         ))}
    //       </ul>
    //       <p>{movie.description_full}</p>
    //     </>
    //   ) : null}
    // </>
    <>
      {movie ? (
        <Movie
          key={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          genres={movie.genres}
          year={movie.year}
          summary={movie.description_full}
        />
      ) : null}
    </>
  );
}
