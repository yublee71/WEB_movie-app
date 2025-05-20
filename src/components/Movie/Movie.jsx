import styles from "./Movie.module.css";
import { Link } from "react-router-dom";

export function Movie({ coverImg, title, summary, genres, link, year }) {
  return (
    <div>
      <h2>{link ? <Link to={`${link}`}>{title}</Link> : title}</h2>
      <p>{year}</p>
      <ul>
        {genres.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>
      <p>{summary}</p>
      <img src={coverImg} alt={`${title} img`} />
    </div>
  );
}
