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
                <span className={styles.role}>FRONTEND DEVELLOPER</span>
            </a>
            <nav className={styles.nav} arial-label="Navegavión principal">
            <a className={styles.link} href="#stack-title">
                STACK
            </a>
            <a className={styles.link} href="#projects-heading">
                PROYECTOS
            </a>
            <a className={styles.link} href="#proyectos-en-vivo">
                PROYECTOS EN VIVO
            </a>

            </nav>
      </div>

    </header>
  );
};
