import styles from "./Card.module.css";

export const Card = ({
    project,
    isExpanded,
    expandedRow,
    onExpanded,
    cardRef
}) => {
    return (
        <article
            ref={cardRef}
            style={{
                "--expanded-row": expandedRow
            }}
            className={`${styles.card} ${
                isExpanded ? styles.card_expanded : ""
            }`}
            onClick={onExpanded}
        >
            <div className={styles.image_container}>
                <img
                    className={styles.card_image}
                    src={project.image}
                    alt={`Imagen de un proyecto ${project.title} creado por Abraham Gálvez`}
                />
            </div>

            <div className={styles.card_info}>
                <h3>{project.title}</h3>

                <hr className={styles.line} />

                <p
                    className={`${styles.description} ${
                        isExpanded ? styles.description_hidden : ""
                    }`}
                >
                    {project.description}
                </p>

                <div
                    className={`${styles.card_details} ${
                        isExpanded ? styles.card_visible : ""
                    }`}
                >
                    <div className={styles.card_details_content}>
                        <p className={styles.long_description}>
                            {project.longDescription}
                        </p>

                        <div className={styles.card_stack}>
                            <strong>Stack</strong>
                            <p>{project.stack}</p>
                        </div>

                        <div className={styles.card_features}>
                            {project.features.map((feature) => (
                                <span key={feature}>{feature}</span>
                            ))}
                        </div>

                        <div className={styles.card_links}>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(event) =>
                                    event.stopPropagation()
                                }
                            >
                                GitHub
                            </a>

                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(event) =>
                                        event.stopPropagation()
                                    }
                                >
                                    Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};