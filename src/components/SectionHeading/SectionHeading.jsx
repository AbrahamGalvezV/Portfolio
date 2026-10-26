import styles from "./SectionHeading.module.css";

export function SectionHeading({
  number,
  eyebrow,
  title,
  id,
}) {
  return (
    <header className={styles.heading} aria-labelledby={id}>
      <span className={styles.eyebrow}>
        {number} <span className={styles.dash}>—</span> {eyebrow}
      </span>


      <h2 className={styles.title} id={id}>
        {title}
        <span className={styles.period}>.</span>
      </h2>


      <div className={styles.divider} aria-hidden="true">
        <span className={styles.line} />
        <span className={styles.diamond} />
        <span className={styles.line} />
      </div>
    </header>
  );
}