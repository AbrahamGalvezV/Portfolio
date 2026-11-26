import styles from "./JobCard.module.css";

const MAX_TAGS = 4;

export const JobCard = ({ job }) => {
  const technologies = [job.data.technology].flat().slice(0, MAX_TAGS);

  return (
    <article className={styles.card}>
      <h4 className={styles.title}>{job.titulo}</h4>
      <p className={styles.company}>
        {job.empresa} | {job.ubicacion}
      </p>
      <p className={styles.description}>{job.descripcion}</p>

      <ul className={styles.tags}>
        {technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    </article>
  );
};
