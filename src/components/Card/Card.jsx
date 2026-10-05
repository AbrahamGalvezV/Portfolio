import styles from "./Card.module.css";

export const Card = ({ project, isExpanded, onExpanded, cardRef }) => {
  return (
    <article
      ref={cardRef}
      className={`${styles.card} ${isExpanded ? styles.card_expanded : ""}`}
      onClick={onExpanded}
    >
      <div className={styles.image_container}>
        <img
          className={styles.card_image}
          src={project.image}
          alt={`Imagen de un proyecto ${project.title} creado por Abraham.G.V.`}
        />
      </div>
      <div className={styles.card_info}>
        <h3>{project.title}</h3>
        {/* <hr className={styles.line} /> */}
        <p>{project.description}</p>
        {isExpanded && (
        <div className={styles.card_details}>
          <p>Stack usado: {project.stack} </p>
          <p>Recursos externos: {project.resources}</p>
        </div>
        )}
      </div>
    </article>
  );
};
