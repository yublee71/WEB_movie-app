import styles from "./Movie.module.css";

export function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <h2>{title}</h2>
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
