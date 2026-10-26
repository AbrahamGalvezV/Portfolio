
import abraham from "../../assets/img/abraham.png";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section
            id="inicio"
            className={styles.hero}
            aria-labelledby="hero-title"
        >
            <div className={styles.wrapper}>
                <img
                    className={styles.image}
                    src={abraham}
                    alt="Abraham Gálvez Vives, desarrollador frontend"
                    width="300"
                    height="300"
                    fetchPriority="high"
                />

                <div className={styles.content}>
                    <p className={styles.eyebrow}>
                        Diseño · Código · Experiencia
                    </p>

                    <h1 id="hero-title" className={styles.title}>
                        Abraham Gálvez Vives
                    </h1>

                    <hr className={styles.line} />

                    <p className={styles.sub}>
                        Frontend Developer
                    </p>

                    <p className={styles.desc}>
                        Me gusta transformar ideas en interfaces que no solo
                        funcionan, sino que también transmiten algo.
                        Actualmente centro mi desarrollo en{" "}
                        <strong>React, JavaScript y TypeScript</strong>,
                        mientras sigo explorando nuevas formas de mejorar
                        la experiencia y el diseño de cada proyecto.
                    </p>

                    <p className={styles.location}>
                        Alicante, España
                    </p>

                    <div className={styles.buttons}>
                        <a
                            className={styles.contactButton}
                            href="#contact"
                        >
                            Contacta conmigo <span aria-hidden="true">↗</span>
                        </a>

                        <div className={styles.socials}>
                            {/* Conserva aquí tus SVG de LinkedIn y GitHub,
                                dentro de enlaces con className={styles.socialLink}. */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};