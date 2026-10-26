import styles from "./Header.module.css"

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <a
          className={styles.brand}
          href="#inicio"
          aria-label="Abraham Gálvez, volver al inicio"
        >
          <span className={styles.name}>ABRAHAM GÁLVEZ</span>
          <span className={styles.role}>FRONTEND DEVELOPER</span>
        </a>

        <nav className={styles.nav} aria-label="Navegación principal">
          <a className={styles.link} href="#stack">
            STACK
          </a>
          <a className={styles.link} href="#proyectos">
            PROYECTOS
          </a>
          <a className={styles.link} href="#liveProjects">
            PROYECTOS EN VIVO
          </a>
        </nav>
      </div>
    </header>
  );
};
