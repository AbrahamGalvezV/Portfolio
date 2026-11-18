import styles from "./Card.module.css";
import { techIcons } from "./techIcons";

export const Card = ({
    project,
    isExpanded,
    expandedRow,
    onExpanded,
    transitionName
}) => {
    const handleKeyDown = (event) => {
        if (event.target !== event.currentTarget) return;

        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onExpanded();
        }
    };

    return (
        <article
            style={{
                "--expanded-row": expandedRow,
                viewTransitionName: transitionName
            }}
            className={`${styles.card} ${
                isExpanded ? styles.card_expanded : ""
            }`}
            onClick={onExpanded}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-expanded={isExpanded}
            aria-label={`${project.title}: ${
                isExpanded ? "ocultar detalles" : "ver detalles"
            }`}
        >
            <div className={styles.image_container}>
                <img
                    className={styles.card_image}
                    src={project.image}
                    alt={`Captura del proyecto ${project.title}`}
                    loading="lazy"
                    decoding="async"
                />
            </div>

            <div className={styles.card_info}>
                <span className={styles.type}>{project.type}</span>

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
                            <ul className={styles.tech_list}>
                                {project.technologies.map((key) => {
                                    const tech = techIcons[key];

                                    return (
                                        <li
                                            key={key}
                                            className={styles.tech}
                                            title={tech.name}
                                        >
                                            {tech.path && (
                                                <svg
                                                    aria-hidden="true"
                                                    className={styles.tech_icon}
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d={tech.path}
                                                    />
                                                </svg>
                                            )}
                                            <span>{tech.name}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className={styles.card_features}>
                            {project.features.map((feature) => (
                                <span key={feature}>{feature}</span>
                            ))}
                        </div>

                        {(project.github || project.demo) && (
                            <div className={styles.card_links}>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        tabIndex={isExpanded ? 0 : -1}
                                        onClick={(event) =>
                                            event.stopPropagation()
                                        }
                                    >
                                        GitHub
                                    </a>
                                )}

                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noreferrer"
                                        tabIndex={isExpanded ? 0 : -1}
                                        onClick={(event) =>
                                            event.stopPropagation()
                                        }
                                    >
                                        Demo
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
};
