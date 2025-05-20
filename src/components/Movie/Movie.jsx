import styles from "./Movie.module.css";
import { Link } from "react-router-dom";

export function Movie({
  coverImg,
  title,
  summary,
  genres,
  link,
  year,
  iscard,
}) {
  return (
    <div className={styles[iscard]}>
      <img src={coverImg} alt={`${title} img`} />
      <div className={styles.heading}>
        <h2>{link ? <Link to={`${link}`}>{title}</Link> : title}</h2>
        <p>{year}</p>
      </div>
      <ul>
        {genres.map((g, index) => (
          <li key={index}>{g}</li>
        ))}
      </ul>
      <p>
        {iscard && summary.length > 350
          ? `${summary.slice(0, 350)}...`
          : summary}
      </p>
    </div>
  );
}
